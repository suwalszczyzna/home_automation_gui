<template>
  <div id="temp" class="mx-auto max-w-screen-sm">
    <h2 class="p-2 text-xl">Stan urządzeń</h2>
    <div class="flex flex-row justify-center text-4xl">
      <DeviceIndicator :state="valveStatus" iconName="valve.png" name="Zawór" />
      <DeviceIndicator
        :state="heaterStatus"
        iconName="heater.png"
        name="Grzałka"
      />
    </div>
    <div class="flex flex-row justify-center text-4xl">
      <DeviceIndicator
        :state="washerStatus"
        iconName="washer.png"
        name="Pralka"
        :customStatusText="washerPowerText"
      />
    </div>
    <h2 class="p-2 mt-4 text-xl">Temperatury</h2>
    <div class="flex flex-row justify-center text-4xl">
      <TempIndicator :value="coTemp" name="Piec" iconName="flame.png" />
      <TempIndicator :value="waterTemp" name="Bojler" iconName="water.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, ComputedRef } from "vue";
import DeviceIndicator from "@/components/DeviceIndicator.vue";
import TempIndicator from "@/components/TempIndicator.vue";

export default defineComponent({
  name: "Home",
  components: {
    DeviceIndicator,
    TempIndicator,
  },
  setup() {
    const coTemp = ref(0);
    const waterTemp = ref(0);
    const heaterStatus = ref(false);
    const valveStatus = ref(false);
    const washerStatus = ref(false);
    const washerPower = ref(0);

    const washerPowerText: ComputedRef<string> = computed(
      (): string => `${washerPower.value} W`
    );

    onMounted(() => {
      fetch("http://192.168.1.25:5000/api/temperature")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          coTemp.value = data.co_temp;
          waterTemp.value = data.water_temp;
        })
        .catch((err) => {
          console.error(err);
          coTemp.value = -1;
          waterTemp.value = -1;
        });
      fetch("http://192.168.1.25:5000/api/smart_device_statuses")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          heaterStatus.value = data.heater;
          valveStatus.value = data.valve;
          washerStatus.value = data.washer.status;
          washerPower.value = data.washer.power;
        })
        .catch((err) => {
          console.error(err);
        });
    });
    return {
      coTemp,
      waterTemp,
      heaterStatus,
      valveStatus,
      washerStatus,
      washerPowerText,
    };
  },
});
</script>
