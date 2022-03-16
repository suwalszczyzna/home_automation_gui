<template>
  <div>
    <h2 class="text-xl">Ustawienia</h2>
    <div>
      <OperationModes />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OperationModes from "@/components/OperationModes.vue";

export default defineComponent({
  name: "SettingsView",
  components: {
    OperationModes,
  },
});
</script>
