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
<div class="initiatives-list">
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

<style scoped lang="less">
.initiatives-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 16px;
}
</style>
