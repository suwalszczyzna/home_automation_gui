<template>
  <div>
    <AppLayoutNavbar />
    <slot />
  </div>
</template>
<script>
import AppLayoutNavbar from "@/layouts/AppLayoutNavbar";

export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutNavbar,
  },
};
</script>
