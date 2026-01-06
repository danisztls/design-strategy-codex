<script setup lang="ts">
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
      <img
        :src="`/team/${member.avatar}`"
        :alt="member.name"
        class="team-avatar"
      />

      <h3>{{ member.name }}</h3>
      <p class="team-role">{{ member.title }}</p>

      <div class="team-links">
        <CdxButton
          v-for="item in member.links"
          :key="item.link"
          size="small"
          weight="quiet"
          :href="item.link"
          target="_blank"
          :aria-label="`${member.name} external link`"
        >
          <CdxIcon :icon="item.icon" />
        </CdxButton>
      </div>
    </div>
  </div>
</template>
