<template>
  <div
    class="flex-auto p-3 m-2 bg-white rounded-xl border border-gray-300 flex items-center"
  >
    <div class="p-2">
      <img
        class="w-10"
        :src="require(`../assets/icons/${iconName}`)"
        alt="Piec"
      />
    </div>
    <div class="pl-3 flex flex-col justify-center">
      <h3 class="text-lg leading-5">{{ name }}</h3>
      <p class="co-temp text-2xl leading-6">{{ value }}°C</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TempIndicator",
  props: {
    iconName: String,
    value: Number,
    name: String,
  },
});
</script>
