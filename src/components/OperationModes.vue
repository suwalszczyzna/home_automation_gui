<template>
  <div v-if="isLoading" class="flex items-center justify-center">
    <h1>Ładowanie...</h1>
  </div>
  <div v-else class="p-2 mt-2">
    <div class="flex items-center" :key="key">
      <div
        class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        <a
          @click="changeOperationMode('auto_mode')"
          class="cursor-pointer rounded-l px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          :class="{ 'bg-blue-900': isAutoMode }"
        >
          Pełna automatyka
        </a>
        <a
          @click="changeOperationMode('auto_mode_heater')"
          class="cursor-pointer rounded-r px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          :class="{ 'bg-blue-900': isHeaterMode }"
        >
          Tylko grzałka
        </a>
      </div>
    </div>
    <div class="mt-3 flex items-center">
      <label class="flex items-center cursor-pointer">
        <input
          @change="lowCostChecking()"
          :checked="isLowCostHeater"
          v-model="isLowCostHeater"
          type="checkbox"
          class="form-checkbox"
        />
        <span class="ml-2">Zwracaj uwagę na drugą taryfę</span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "OperationModes",
  setup() {
    const key = ref(0);
    const operationMode = ref("");
    const isLowCostHeater = ref(false);
    const isLoading = ref(true);
    const isAutoMode = ref(false);
    const isHeaterMode = ref(false);

    function lowCostChecking() {
      isLoading.value = true;
      const uri = `http://192.168.1.25:5000/api/set_checking_low_cost?operation=${operationMode.value}&value=${isLowCostHeater.value}`;
      fetch(uri)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          isLoading.value = false;
        });
    }

    function changeLowCostChecking(operation: string) {
      const uri = `http://192.168.1.25:5000/api/set_operation_mode?operation=${operation}`;
      isLoading.value = true;
      fetch(uri)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          isLoading.value = false;
        });
    }

    function getMode() {
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
    }

    function changeOperationMode(newMode: string) {
      if (newMode == "auto_mode") {
        isAutoMode.value = true;
        isHeaterMode.value = false;
        operationMode.value = newMode;
      } else if (newMode == "auto_mode_heater") {
        isAutoMode.value = false;
        isHeaterMode.value = true;
        operationMode.value = newMode;
      }
      changeLowCostChecking(operationMode.value);
      setTimeout(() => getMode(), 500);
    }

    onMounted(() => {
      getMode();
    });

    return {
      key,
      operationMode,
      isLowCostHeater,
      isLoading,
      isAutoMode,
      isHeaterMode,
      lowCostChecking,
      changeOperationMode,
    };
  },
});
</script>
