<template>
  <div id="temp" class="container mx-auto min-h-screen font-light p-2">
    <h1
      class="m-6 p-2 text-3xl text-center tracking-wider uppercase font-medium text-gray-600"
    >
      Home automation
    </h1>

    <h2 class="p-2 mt-4 text-xl">Stan urządzeń</h2>
    <div class="flex flex-row justify-center text-4xl">
      <DeviceIndicator v-bind:state="false" iconName="valve.png" name="Zawór" />
      <DeviceIndicator v-bind:state="true" iconName="heater.png" name="Grzałka" />
    </div>
    <h2 class="p-2 mt-4 text-xl">Temperatury</h2>
    <div class="flex flex-row justify-center text-4xl">
      <div
        class="grow p-3 m-2 bg-white rounded-xl border border-gray-300 flex items-center"
      >
        <div class="p-2">
          <img class="w-10" src="@/assets/icons/flame.png" alt="Piec" />
        </div>
        <div class="pl-3 flex flex-col justify-center">
          <h3 class="text-lg leading-5">Piec</h3>
          <p class="co-temp text-2xl leading-6">{{ coTemp }}°C</p>
        </div>
      </div>
      <div
        class="grow p-3 m-2 bg-white rounded-xl border border-gray-300 flex items-center"
      >
        <div class="p-2">
          <img class="w-10" src="@/assets/icons/water.png" alt="Piec" />
        </div>
        <div class="pl-3 flex flex-col justify-center">
          <h3 class="text-lg leading-5">Bojler</h3>
          <p class="co-temp text-2xl leading-6">{{ waterTemp }}°C</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeviceIndicator from "@/components/DeviceIndicator.vue";

export default defineComponent({
  name: "Home",
  components: {
    DeviceIndicator,
  },
});
</script>
