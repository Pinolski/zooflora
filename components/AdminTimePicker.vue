<template>
  <div class="vue-datepicker-wrapper timepicker-container">
    <VueDatePicker
      v-model="selectedTime"
      :dark="true"
      :teleport="true"
      :enable-time-picker="true"
      :enable-date-picker="false"
      :format="'HH:mm'"
      :locale="'de'"
      :placeholder="'Uhrzeit wählen...'"
      :prevent-min-max-navigation="false"
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
      :time-picker="true"
      :week-picker="false"
      :quarter-picker="false"
      :text-input="false"
      :utc="false"
      :vertical="false"
      :model-auto="false"
      :timezone="null"
      :flow="[]"
      :preview-format="'HH:mm'"
      :minutes-increment="15"
      :time-picker-options="{
        hours: { step: 1 },
        minutes: { step: 15 }
      }"
      @update:model-value="handleTimeChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
// Library CSS wird global in nuxt.config.ts geladen

const props = defineProps({
  modelValue: {
    type: [String, Date, null],
    default: null
  },
  placeholder: {
    type: String,
    default: 'Uhrzeit wählen...'
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedTime = ref(null)

const handleTimeChange = (time) => {
  selectedTime.value = time
  emit('update:modelValue', time)
}

onMounted(() => {
  if (props.modelValue) {
    selectedTime.value = new Date(`1970-01-01T${props.modelValue}`)
  }
})
</script>

<style scoped>
.timepicker-container {
  width: 100%;
  position: relative;
}
</style>