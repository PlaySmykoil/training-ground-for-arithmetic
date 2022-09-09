<script setup lang="ts">
import type { RouterLinkProps } from "vue-router"

export interface Props extends RouterLinkProps {}

const props = defineProps<Props>()
const activeClass = 'text-green-500'
const inactiveClass = 'text-neutral-200 hover:underline'
const staticClass = ''
</script>

<template>
  <RouterLink
    v-slot="{ isActive, href, navigate }"
    v-bind="props"
    custom
  >
    <a
      :class="[isActive ? activeClass : inactiveClass, staticClass]"
      :href="href"
      @click="navigate"
    ><slot /></a>
  </RouterLink>
</template>