<template>
  <div class="container mx-auto min-h-screen">
    <AppTopNavbar />
    <AppLayoutNavbar />
    <div class="p-4 container mx-auto max-w-screen-sm">
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
