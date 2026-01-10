<script setup lang="ts">
import { computed } from 'vue';
import { CdxCard, CdxInfoChip } from '@wikimedia/codex';

interface TimelineItem {
	title: string;
	description: string;
	url: string;
	date: string; // YYYY-MM
	lead: string;
	category: string;
}

const props = defineProps<{
	items: TimelineItem[];
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

	(props.items as TimelineItem[]).forEach(item => {
		const year = item.date.split('-')[0];

		if (!map[year]) {
			map[year] = [];
		}

		map[year].push(item);
	});

	// Sort items within each year by date (newest first)
	for (const year in map) {
		map[year].sort((a, b) => b.date.localeCompare(a.date));
	}

	return map;
});

/**
 * Years sorted descending
 */
const sortedYears = computed(() =>
	Object.keys(groupedByYear.value).sort((a, b) => b.localeCompare(a))
);
</script>

<template>
	<section class="timeline-section">
		<div
			v-for="year in sortedYears"
			:key="year"
			class="timeline-year-section"
		>
			<h2>{{ year }}</h2>

			<ul class="timeline-list">
				<component
					:is="item.url ? 'a' : 'div'"
					:href="item.url || undefined"
					v-for="item in groupedByYear[year]"
					class="timeline-item"
				>
					<h3 class="timeline-item-title">{{ item.title }}</h3>
					<p class="timeline-item-description">{{ item.description }}</p>
					<p v-if="item.lead" class="timeline-item-lead">Lead: {{ item.lead }}</p>
					<div v-if="item.category" class="timeline-item-category"><CdxInfoChip :data-category="slugify(item.category)">{{ item.category }}</CdxInfoChip></div>
				</component>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.timeline-section {
	display: flex;
	flex-flow: column nowrap;
	gap: var(--spacing-75);
}

.timeline-list {
	padding: 0;
	margin: 0;
	display: flex;
    flex-flow: column nowrap;
	gap: var(--spacing-75);
}

.timeline-item {
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: column nowrap;
	gap: var(--spacing-35);

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
	.timeline-item-title {
		color: var(--color-link--hover);
	}
}

.timeline-item-title {
	margin: var(--spacing-75) 0 0 0;
	font-size: var(--font-size-large);
}

.timeline-item-description {
}

.timeline-item-lead {
	margin: var(--spacing-35) 0;
	font-size: var(--font-size-small);
	color: var(--color-subtle);
}

.timeline-item-category :deep(.cdx-info-chip) {
	line-height: 1.5;

	:deep(.cdx-info-chip__text) {
		font-size: var(--font-size-x-small);
	}
}
</style>
