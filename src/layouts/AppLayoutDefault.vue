<template>
  <div class="container mx-auto min-h-screen font-light p-2">
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
