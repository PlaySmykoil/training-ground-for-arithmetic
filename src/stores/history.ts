import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Answer } from '@/models/Answer'

export const useHistoryStore = defineStore('history', () => {
  const history = ref<Answer[]>([])
  return { history }
})
