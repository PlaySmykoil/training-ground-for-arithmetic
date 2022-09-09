<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import { useHistoryStore } from '@/stores/history';

const historyStore = useHistoryStore()
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="bg-neutral-900 text-white">
      <nav class="flex gap-4 px-8 py-4 font-mono">
        <AppLink to="/">Home</AppLink>
        <AppLink to="/addition">Addition</AppLink>
        <AppLink to="/multiplication">Multiplication</AppLink>
      </nav>
    </header>

    <div class="h-full bg-neutral-800 text-neutral-200 px-8 py-6">
      <RouterView />
    </div>

    <div class="fixed bottom-0 w-screen">
      <div class="flex gap-2 mb-6 px-8">
        <span class="text-green-500">{{ historyStore.history.filter(v => v.success).length }}</span>
        <span class="text-red-500">{{ historyStore.history.filter(v => !v.success).length }}</span>
      </div>
      <div class="flex flex-wrap bg-neutral-900 gap-px">
        <div v-for="(answer, index) in historyStore.history" :key="index" class="h-6 font-mono text-white text-sm font-bold" :class="[
          answer.success ? 'bg-green-600' : 'bg-red-600', 
          index === historyStore.history.length - 1 ? 'px-2' : 'w-px'
        ]">
          <span v-if="index === historyStore.history.length - 1">{{ `${answer.firstNumber} ${answer.action} ${answer.secondNumber} = ${answer.decision}` }}</span>
          <span v-if="index === historyStore.history.length - 1 && !answer.success" class="ml-1 text-neutral-900">({{ answer.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>