<script setup lang="ts">
import { CdxImage, CdxIcon } from '@wikimedia/codex';
import type { IconDefinition } from '@wikimedia/codex'
import {
  cdxIconLogoWikimedia,
  cdxIconMessage
} from '@wikimedia/codex-icons'
import { githubIcon } from '../../utils/custom-icons'

const ICONS: Record<string, IconDefinition> = {
  wikimedia: cdxIconLogoWikimedia,
  message: cdxIconMessage,
  github: githubIcon,
}

const props = defineProps({
  team: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="team-grid">
    <div
      v-for="member in props.team"
      :key="member.name"
      class="team-card"
    >
      <cdx-image
        class="team-avatar"
        :src="member.avatar"
        :alt="member.name"
        loading="lazy"
        width="200"
        height="200"
      />

      <h3 class="team-name">{{ member.name }}</h3>
      <p :v-if="member.what" class="team-what">{{ member.what }}</p>
      <p :v-if="member.where" class="team-where">{{ member.where }}</p>

      <div class="team-links">
		<a
			v-for="(href, key) in member.links"
			class="cdx-docs-link"
			:key="key"
			size="small"
			weight="quiet"
			:href="href"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="`${member.name} external link`"
		>
			<cdx-icon :icon="ICONS[key]" />
		</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
	.team-grid {
		display: grid;
		gap: var(--spacing-100);
		margin: var(--spacing-200) 0;
		grid-template-columns: repeat(auto-fill, calc(100% / var(--n-cards) - (var(--n-cards) - 1) * var(--spacing-100)));
		--n-cards: 1;

		@media (min-width: 640px) {
			--n-cards: 2;
		}

		@media (min-width: 1120px) {
			--n-cards: 3;
		}
	}

	.team-card {
		display: grid;
		grid-auto-columns: auto;
		padding: var(--spacing-100);
		text-align: center;
		border: var(--border-width-base) solid var(--border-color-subtle);
		border-radius: 8px;
	}

	.team-avatar {
		margin: 0 auto var(--spacing-75);
		border-radius: 50%;
		overflow: hidden;

		:deep(img) {
			aspect-ratio: 1/1;
			object-fit: cover;
			margin-top: 0;
		}
	}

	.team-name {
		margin: var(--spacing-35) 0;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-large);
	}

	.team-what, .team-where {
		color: var(--color-subtle);
		font-size: var(--font-size-small);
	}

	.team-links {
		display: inline-flex;
		align-self: end;
		justify-content: center;
		gap: var(--spacing-75);
		margin: var(--spacing-35) 0;
	}

	a:hover {
		color: var( --color-progressive--hover );
		fill: var( --color-progressive--hover );
	}

	.vp-doc p {
		margin: 0
	}
</style>
