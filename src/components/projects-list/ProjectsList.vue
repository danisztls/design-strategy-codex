<script setup lang="ts">
import { computed } from 'vue';
import { CdxCard } from '@wikimedia/codex';

interface ProjectItem {
	title: string;
	description: string;
	date: string; // YYYY-MM
	lead: string;
	initiative: string;
	url?: string;
}

const props = defineProps<{
	list: ProjectItem[];
	initiative?: string;
}>();

/**
 * Filter by initiative (if provided) and sort by date descending
 */
const filteredItems = computed(() => {
	let list = props.list;

	if (props.initiative) {
		list = list.filter(
			item => item.initiative === props.initiative
		);
	}

	return [...list].sort((a, b) =>
		b.date.localeCompare(a.date)
	);
});

function formatDate(input: string, locale = 'en-US'): string {
	let year: number;
	let month: number | undefined;

	const parts = input.split('-');

	year = Number(parts[0]);

	if (parts.length >= 2) {
		month = Number(parts[1]) - 1; // JS months are 0-based
	}

	// Year only
	if (month === undefined || isNaN(month)) {
		return year.toString();
	}

	const date = new Date(year, month, 1);

	return new Intl.DateTimeFormat(locale, {
		month: 'short',
		year: 'numeric'
	}).format(date);
}
</script>

<template>
	<div class="projects-list">
		<CdxCard
			v-for="item in filteredItems"
			:key="item.title"
			:clickable="Boolean(item.url)"
			:url="item.url"
		>
			<template #title>
				{{ item.title }}
			</template>

			<template #description>
				<time class="project-time" :datetime="item.date">{{ formatDate(item.date) }}</time>
				<p class="project-description">{{ item.description }}</p>
				<p class="project-lead">{{ item.lead }}</p>
			</template>
		</CdxCard>
	</div>
</template>

<style scoped lang="less">
.projects-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 16px;

}
/* @supports (display: masonry) { */
/* 	.projects-list { */
/* 		display: masonry; */
/* 		masonry-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
/* 	} */
/* } */

.project-time {
	color: var(--color-subtle);
	font-size: var(--font-size-small);
}

.cdx-card {
	transition: all 1s;
	/* transition: -webkit-line-clamp display 1s; */

	.project-description {
		font-size: var(--font-size-small);
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.project-lead {
		display: none;
		font-size: var(--font-size-small);
	}

	&:hover, &:focus-within {
		.project-description {
			-webkit-line-clamp: none;
		}

		.project-lead {
			display: inherit;
		}
	}
}
</style>
