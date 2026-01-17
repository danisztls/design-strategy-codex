<script setup lang="ts">
import { computed } from 'vue';
import { CdxCard, CdxIcon } from '@wikimedia/codex';
import { ICONS } from '../../utils/icons'

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
			>

				<template #title>
					<span class="project-title">{{ item.title }}</span>
					<a v-if="item.url" :href="item.url" class="project-link" target="_blank">
						<cdx-icon :icon="ICONS['externalLink']" size="small" />
					</a>
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
	gap: var(--spacing-75);

	@media (max-width: 640px - 1px) {
		display: flex;
		flex-flow: column nowrap;
	}

	@media (min-width: 640px) {
		display: grid;
		grid-auto-rows: 1fr;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

		:deep(.cdx-card) {
			@supports (height: -webkit-fill-available) {
				height: -webkit-fill-available;
			}

			@supports (height: stretch) {
				height: stretch;
			}
		}
	}
}

.project-card-wrapper {
	position: relative;
	z-index: 0;
	overflow: hidden;
}

:deep(.cdx-card) {
	transition: transform 800ms cubic-bezier(.2, .8, .2, 1);

	p {
		margin: 0;
	}

	.cdx-card__text {
		width: 100%;
	}

	.cdx-card__text__title {
		display: grid;
		grid: auto / auto minmax(20px, auto);
		justify-content: space-between;
		gap: 1em;
		font-size: var(--font-size-large);
	}

	.project-link {
		display: none;

		.cdx-icon {
			vertical-align: middle;
			text-align: end;

			&:hover {
				color: var(--color-link-hover);
			}
		}
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
	}

	.project-description {
		overflow: hidden;
		font-size: var(--font-size-normal);
		line-height: var(--line-height-small);
	}

	.project-lead {
		font-size: var(--font-size-normal);
		font-style: italic;
		line-height: var(--line-height-small);
	}

	.project-icon, .project-description, .project-lead {
		display: none;
	}
}

.project-card-wrapper {
	&:hover, &:focus-within {
		z-index: 10;
		overflow: visible;

		@media (min-width: 640px) {
			transform: scale(1.05);
		}

		:deep(.cdx-card) {
			overflow: visible;
			position: absolute;
			height: max-content;
			border-width: 2px;
		}

		.project-link, .project-description, .project-lead {
			display: block;
		}
	}
}
</style>
