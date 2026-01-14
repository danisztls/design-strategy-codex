<script setup lang="ts">
import { CdxCard } from '@wikimedia/codex';

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>

<template>
<div class="initiatives-list cards-list">
	<cdx-card
		v-for="item in list"
		:key="item.title"
		:url="`${item.url}`"
		clickable
	>
		<template #title>
			{{ item.title }}
		</template>

		<template #description>
			{{ item.description }}
		</template>
	</cdx-card>
</div>
</template>
