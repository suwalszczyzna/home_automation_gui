<template>
  <div class="container mx-auto min-h-screen">
    <AppTopNavbar />
    <AppLayoutNavbar />
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
<script>
import AppLayoutNavbar from "@/layouts/AppLayoutNavbar";
import AppTopNavbar from "@/layouts/AppTopNavbar";

export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutNavbar,
    AppTopNavbar,
  },
};
</script>
