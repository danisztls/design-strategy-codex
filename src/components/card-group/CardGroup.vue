<script setup lang="ts">
import { CdxCard } from '@wikimedia/codex';

const props = defineProps({
  group: {
    type: Array,
    required: true
  }
})
</script>

<template>
<div class="card-group">
	<cdx-card
		v-for="card in group"
		:key="card.title"
		:url="`${card.url}`"
		clickable
	>
		<template #title>
			{{ card.title }}
		</template>

		<template #description>
			{{ card.description }}
		</template>
	</cdx-card>
</div>
</template>

<style scoped lang="less">
.card-group {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 16px;
}
</style>
