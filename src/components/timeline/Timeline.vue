<script setup lang="ts">
import { computed } from 'vue';
import { CdxCard, CdxInfoChip } from '@wikimedia/codex';

interface TimelineItem {
	title: string;
	description: string;
	url: string;
	date: string; // YYYY-MM
	lead: string;
	initiative: string;
}

const props = defineProps<{
	list: TimelineItem[];
	year?: string;
}>();

function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

/**
 * Group items by year and sort descending
 */
const groupedByYear = computed(() => {
	const map: Record<string, TimelineItem[]> = {};

	(props.list as TimelineItem[]).forEach(item => {
		const itemYear = item.date.split('-')[0];

		if (!map[itemYear]) {
			map[itemYear] = [];
		}

		map[itemYear].push(item);
	});

	// Sort items within each year by date (newest first)
	for (const year in map) {
		map[year].sort((a, b) => b.date.localeCompare(a.date));
	}

	return map;
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
			<div v-if="item.initiative" class="timeline-item-initiative"><CdxInfoChip :data-initiative="slugify(item.initiative)">{{ item.initiative }}</CdxInfoChip></div>
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
}

.timeline-item-initiative :deep(.cdx-info-chip) {
	border: none;

	:deep(.cdx-info-chip__text) {
		line-height: 1.5;
		color: #f8f9fa;
		/* font-size: var(--font-size-x-small); */
		padding: 0 var(--spacing-6);
		font-weight: 600;
		text-transform: uppercase;
		font-size: x-small;
	}
}

:deep(.cdx-info-chip[data-initiative="powered-by-people"]) {
	background-color: #f54739;
}

:deep(.cdx-info-chip[data-initiative="online-social-behavior"]) {
	background-color: #8d7ebd;
}

:deep(.cdx-info-chip[data-initiative="machine-augmentation"]) {
	background-color: #6485d1;
}

:deep(.cdx-info-chip[data-initiative="sentiment--perception"]) {
	background-color: #b5739e;
}

:deep(.cdx-info-chip[data-initiative="research--development"]) {
	background-color: #259948;
}

:deep(.cdx-info-chip[data-initiative="numeric-exploration"]) {
	background-color: #d46926;
}
</style>
