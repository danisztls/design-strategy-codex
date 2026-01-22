<script setup lang="ts">
import type { PropType } from 'vue';
import { CdxCard, CdxIcon } from '@wikimedia/codex';
import { ICONS } from '../../utils/icons'

type CardItem = {
	title: string;
	description?: string;
	url?: string;
};

const props = defineProps({
	list: {
		type: Array as PropType<CardItem[]>,
		required: true
	}
});

function isExternalUrl(url?: string): boolean {
	if (!url) return false;
	return /^(https?:)?\/\//.test(url);
}

</script>

<template>
	<div class="cards-list">
		<CdxCard
			v-for="item in props.list"
			:key="item.title"
			:url="item.url"
			:target="isExternalUrl(item.url) ? '_blank' : undefined"
			:rel="isExternalUrl(item.url) ? 'noopener noreferrer' : undefined"
			clickable
		>
			<template #title>
				<span v-if="isExternalUrl(item.url)" class="card-title-with-icon">
					{{ item.title }}
					<CdxIcon :icon="ICONS['externalLink']" size="small" />
				</span>
				<span v-else>
					{{ item.title }}
				</span>
			</template>

			<template #description>
				{{ item.description }}
			</template>
		</CdxCard>
	</div>
</template>

<style scoped>
.cards-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: var(--spacing-100);
}

:deep(.cdx-card__text) {
	width: 100%
}

:deep(.card-title-with-icon) {
	display: inline-flex;
    justify-content: space-between;
	align-items: center;
	gap: 1em;
	width: 100%;
}

.cdx-card {
	transition: border 250ms ease;

	:deep(.cdx-icon) {
		color:	var(--color-disabled);
		transition: color 330ms ease;
	}

	&:hover, &:focus-within {
		:deep(.cdx-icon) {
			color:	var(--color-hover);
		}
	}
}
</style>
