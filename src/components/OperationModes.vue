<template>
  <div v-if="isLoading" class="flex items-center justify-center">
    <h1>Ładowanie...</h1>
  </div>
  <div v-else>
    <div class="flex items-center justify-center">
      <div
        class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        <a
          href="#"
          class="rounded-l px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          :class="{ 'bg-blue-900': isAutoMode }"
        >
          Pełna automatyka
        </a>
        <a
          href="#"
          class="rounded-r px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          :class="{ 'bg-blue-900': isHeaterMode }"
        >
          Tylko grzałka
        </a>
      </div>
    </div>
    <div class="m-2 flex items-center justify-center">
      <label class="flex items-center">
        <input
          disabled
          :checked="isLowCostHeater"
          type="checkbox"
          class="form-checkbox"
        />
        <span class="ml-2">Zwracaj uwagę na drugą taryfę</span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";

export default defineComponent({
  name: "OperationModes",
  setup() {
    const operationMode = ref("");
    const isLowCostHeater = ref(false);
    const isLoading = ref(true);
    const isAutoMode = ref(false);
    const isHeaterMode = ref(false);

    onMounted(() => {
      isLoading.value = true;
      fetch("http://192.168.1.25:5000/api/get_actual_mode")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          operationMode.value = data.operation_mode;
          isLowCostHeater.value = data.heater_on_lower_cost_only;
          isLoading.value = false;
          if (operationMode.value == "auto_mode") {
            isAutoMode.value = true;
            isHeaterMode.value = false;
          } else if (operationMode.value == "auto_mode_heater") {
            isAutoMode.value = false;
            isHeaterMode.value = true;
          }
        })
        .catch((err) => {
          console.error(err);
          isLoading.value = false;
        });
    });

    return {
      operationMode,
      isLowCostHeater,
      isLoading,
      isAutoMode,
      isHeaterMode,
    };
  },
});
</script>
