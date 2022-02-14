<template>
  <div>
    <AppLayoutNavbar />
    <slot />
  </div>
</template>
<script>
import AppLayoutNavbar from "@/layouts/AppLayoutNavbar";

export default {
  name: "AppLayoutHome",
  components: {
    AppLayoutNavbar,
  },
};
</script>
