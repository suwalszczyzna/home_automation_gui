<template>
  <div
    class="p-2 m-2 rounded-xl border flex-auto flex justify-center items-center bg-gray-200 border-gray-300"
    v-bind:class="{
      'bg-green-100 border-green-300 text-lime-900': state,
    }"
  >
    <div class="p-1">
      <img
        class="w-10"
        :src="require(`../assets/icons/${iconName}`)"
        alt="{{ name }}"
      />
    </div>
    <div class="ml-2 mr-2">
      <h3 class="text-lg leading-5">{{ name }}</h3>
      <p class="co-temp text-xl leading-5">{{ statusText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    state: Boolean,
    iconName: String,
    name: String,
  },
  setup(props) {
    console.log(`${props.name} state: ${props.state}`)
    return {
      statusText: props.state ? "ON" : "OFF",
    };
  },
});
</script>
