<template>
  <div>
    <h1
      class="m-6 p-2 text-3xl text-center tracking-wider uppercase font-medium text-gray-600"
    >
      Ustawienia
    </h1>
    <div>
      <OperationModes />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OperationModes from "@/components/OperationModes.vue";

export default defineComponent({
  name: "Settings",
  components: {
    OperationModes,
  },
});
</script>
