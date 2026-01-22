<script setup lang="ts">
import { computed } from 'vue';
import { CdxInfoChip } from '@wikimedia/codex';

interface TimelineItem {
	title: string;
	description: string;
	url: string;
	date: string; // YYYY-MM
	lead: string;
	initiative: string;
}

const props = withDefaults(
	defineProps<{
		list: TimelineItem[];
		year: string;
	}>(),
	{
		list: () => []
	}
);

function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

/* Group items by year and sort descending */
const groupedByYear = computed<Record<string, TimelineItem[]>>(() => {
	const groups: Record<string, TimelineItem[]> = {};

	for (const item of props.list) {
		const itemYear = item.date?.slice(0, 4);
		if (!itemYear || itemYear.length !== 4) {
			continue;
		}

		(groups[itemYear] ??= []).push(item);
	}

	for (const year of Object.keys(groups)) {
		// Sort newest to oldest within the year
		groups[year].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
	}

	return groups;
});
</script>

<template>
	<ul
		class="timeline-list"
		:key="year"
	>
		<component
			:is="item.url ? 'a' : 'div'"
			:href="item.url || undefined"
			v-for="item in groupedByYear[year]"
			class="timeline-item"
		>
			<h3 class="timeline-item-title">{{ item.title }}</h3>
			<p class="timeline-item-description">{{ item.description }}</p>
			<p v-if="item.lead" class="timeline-item-lead">Lead: {{ item.lead }}</p>
			<div v-if="item.initiative" class="timeline-item-initiative" :data-initiative="slugify(item.initiative)"><CdxInfoChip>{{ item.initiative }}</CdxInfoChip></div>
		</component>
	</ul>
</template>

<style scoped>
.timeline-list {
	padding: 0;
	margin: 0;
	display: flex;
    flex-flow: column nowrap;
	gap: var(--spacing-150);
}

.timeline-item {
	display: flex;
	flex-flow: column nowrap;
	gap: var(--spacing-35);
	border-left: 5px solid transparent;
	padding-left: 15px;
	margin-left: -15px;

	p {
		line-height: var(--line-height-x-small);
		margin: 0;
	}

	&, &:hover {
		color: inherit;
		text-decoration: none;
	}

}
a.timeline-item:hover {
	border-color: var(--color-link--hover);

	.timeline-item-title {
		color: var(--color-link--hover);
	}
}

.timeline-item-title {
	margin: 0;
	font-size: var(--font-size-large);
}

.timeline-item-description {
}

.timeline-item-lead {
	margin: var(--spacing-35) 0;
	font-size: var(--font-size-small);
	color: var(--color-subtle);
}

.timeline-item-initiative {
	line-height: 1;

	&:deep(.cdx-info-chip) {
		border: none;
		background-color: var(--info-chip-background-color);

		:deep(.cdx-info-chip__text) {
			line-height: 1.5;
			color: #f8f9fa;
			padding: 0 var(--spacing-6);
			font-weight: 600;
			text-transform: uppercase;
			font-size: x-small;
		}
	}

	&[data-initiative="powered-by-people"] {
		--info-chip-background-color: #fd7865;
	}

	&[data-initiative="online-social-behavior"] {
		--info-chip-background-color: #8d7ebd;
	}

	&[data-initiative="machine-augmentation"] {
		--info-chip-background-color: #4b77d6;
	}

	&[data-initiative="sentiment--perception"] {
		--info-chip-background-color: #c690b4;
	}

	&[data-initiative="research--development"] {
		--info-chip-background-color: #259948;
	}

	&[data-initiative="numeric-exploration"] {
		--info-chip-background-color: #edb537;
	}
}
</style>
