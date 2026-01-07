<script setup lang="ts">
import { CdxImage, CdxIcon } from '@wikimedia/codex';
import type { IconDefinition } from '@wikimedia/codex'
import {
  cdxIconLogoWikimedia,
  cdxIconMessage
} from '@wikimedia/codex-icons'

const ICONS: Record<string, IconDefinition> = {
  wikimedia: cdxIconLogoWikimedia,
  message: cdxIconMessage
}

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="team-grid">
    <div
      v-for="member in props.data"
      :key="member.name"
      class="team-card"
    >
      <cdx-image
        class="team-avatar"
        :src="`/team/${member.avatar}`"
        :alt="member.name"
        loading="lazy"
        width="200"
        height="200"
      />

      <h3 class="team-name">{{ member.name }}</h3>
      <p class="team-role">{{ member.title }}</p>

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
