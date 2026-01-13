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
		<div
			v-for="item in filteredItems"
			class="project-card-wrapper"
		>
			<CdxCard
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
					<p v-if="item.lead" class="project-lead">Lead: {{ item.lead }}</p>
				</template>
			</CdxCard>
		</div>
	</div>
</template>

<style scoped lang="less">
.projects-list {
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: 1fr;
	gap: var(--spacing-75);
	--card-height: 200px;
}

.project-card-wrapper {
	position: relative;
	height: var(--card-height);
	z-index: 0;
	overflow: hidden;
}

:deep(.cdx-card) {
	height: var(--card-height);
	min-height: var(--card-height);
	transition: transform 800ms cubic-bezier(.2, .8, .2, 1);

	p {
		margin: 0;
	}

	.cdx-card__text__title {
		font-size: var(--font-size-large);
	}

	.cdx-card__text__description {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--spacing-50);
		margin: var(--spacing-25) 0 0 0;
	}

	.project-time {
		color: var(--color-subtle);
		font-size: var(--font-size-small);
		/* text-transform: uppercase; */
	}

	.project-description {
		overflow: hidden;
		font-size: var(--font-size-normal);
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		line-height: var(--line-height-small);
	}

	.project-lead {
		display: none;
		font-size: var(--font-size-normal);
		font-style: italic;
		line-height: var(--line-height-small);
	}
}

.project-card-wrapper {
	&:hover, &:focus-within {
		z-index: 10;
		transform: scale(1.05);
		overflow: visible;

		:deep(.cdx-card) {
			overflow: visible;
			position: absolute;
			height: max-content;
			border-width: 2px;
		}

		.project-description {
			-webkit-line-clamp: none;
		}

		.project-lead {
			display: inherit;
		}
	}
}
</style>
