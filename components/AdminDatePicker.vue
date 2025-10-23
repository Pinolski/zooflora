<template>
  <div class="vue-datepicker-wrapper datepicker-container">
    <VueDatePicker
      v-model="selectedDate"
      :dark="true"
      :teleport="true"
      :enable-time-picker="false"
      :format="'dd.MM.yyyy'"
      :locale="'de'"
      :placeholder="'Datum wählen...'"
      :prevent-min-max-navigation="false"
      :min-date="new Date()"
      :max-date="maxDate"
      :auto-apply="true"
      :close-on-auto-apply="true"
      :clearable="false"
      :disabled="false"
      :inline="false"
      :range="false"
      :multi-calendars="false"
      :multi-dates="false"
      :year-picker="false"
      :month-picker="false"
      :time-picker="false"
      :week-picker="false"
      :quarter-picker="false"
      :text-input="false"
      :utc="false"
      :vertical="false"
      :model-auto="false"
      :timezone="null"
      :flow="[]"
      :preview-format="'dd.MM.yyyy'"
      @update:model-value="handleDateChange"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
// Library CSS wird global in nuxt.config.ts geladen

const props = defineProps({
  modelValue: {
    type: [String, Date, null],
    default: null
  },
  placeholder: {
    type: String,
    default: 'Datum wählen...'
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedDate = ref(null)
const maxDate = computed(() => {
  const nextYear = new Date()
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  return nextYear
})

const handleDateChange = (date) => {
  selectedDate.value = date
  emit('update:modelValue', date)
}

onMounted(() => {
  if (props.modelValue) {
    selectedDate.value = new Date(props.modelValue)
  }
})
</script>

<style scoped>
.datepicker-container {
  width: 100%;
  position: relative;
}
</style>