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
      <DeviceIndicator
        :state="dryerStatus"
        iconName="dryer.png"
        name="Suszarka"
        :customStatusText="dryerPowerText"
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
import { storeToRefs } from "pinia";
import DeviceIndicator from "@/components/DeviceIndicator.vue";
import TempIndicator from "@/components/TempIndicator.vue";
import { useInfoStore } from "../store/index";

export default defineComponent({
  name: "HomeView",
  components: {
    DeviceIndicator,
    TempIndicator,
  },
  setup() {
    const infoStore = useInfoStore();
    const {
      coTemp,
      waterTemp,
      heaterStatus,
      valveStatus,
      washerStatus,
      washerPower,
      dryerStatus,
      dryerPower
    } = storeToRefs(infoStore);

    const washerPowerText: ComputedRef<string> = computed(
      (): string => `${washerPower.value} W`
    );

    const dryerPowerText: ComputedRef<string> = computed(
      (): string => `${dryerPower.value} W`
    );

    onMounted(() => {
      infoStore.updateStore();

      fetch("http://192.168.1.25:5000/api/invoke")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    });

    return {
      coTemp,
      waterTemp,
      heaterStatus,
      valveStatus,
      washerStatus,
      washerPowerText,
      dryerPowerText,
      dryerStatus
    };
  },
});
</script>
