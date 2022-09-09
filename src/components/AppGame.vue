<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import type Ref from 'vue'
import { Answer } from '@/models/Answer'
import type { Question } from '@/models/Question'
import { useHistoryStore } from '@/stores/history';
import type { Store } from 'pinia';

const props = defineProps<{action: '*' | '+'}>()
const question = ref<Question>([0,0])
const answer = ref<number | null>()
const historyStore = useHistoryStore()

const onSubmit = () => {
  historyStore.history.push(new Answer({
    firstNumber: question.value[0], 
    secondNumber: question.value[1],
    value: answer.value || 0, 
    action: props.action
  }))

  answer.value = null
  regenerateQuestion()
}

const regenerateQuestion = () => question.value = question.value.map(() => Math.floor(Math.random() * 100))
regenerateQuestion()

const lastAnswerIsSuccess = computed<boolean | null>(() => {
  return historyStore.history.length !== 0 
    ? historyStore.history[historyStore.history.length - 1].success
    : null
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="overflow-hidden rounded-xl">
    <div class="flex gap-2 mb-2 font-mono font-bold text-lg">
      <div class="w-16 h-16 flex items-center justify-center bg-green-700">{{ question[0] }}</div>
      <div class="w-16 h-16 flex items-center justify-center bg-neutral-700">{{ props.action }}</div>
      <div class="w-16 h-16 flex items-center justify-center bg-green-700">{{ question[1] }}</div>
    </div>
    <input 
      class="bg-neutral-700 w-full h-8 text-center focus:outline-none focus:bg-neutral-900 NUMBER max-w-full border-b-4 border-transparent transition" 
      :class="{
        'border-green-500': lastAnswerIsSuccess,
        'border-red-500': lastAnswerIsSuccess === false,
        'border-transparent': lastAnswerIsSuccess === null,
      }"
      v-model.number="answer" type="number"
      required
    >
  </form>
</template>

<style scoped>
  .NUMBER::-webkit-outer-spin-button,
  .NUMBER::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
</style>
