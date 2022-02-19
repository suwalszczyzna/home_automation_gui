<template>
  <nav
    class="fixed bottom-0 inset-x-0 bg-gray-200 flex justify-between text-sm text-gray-900 uppercase font-mono"
  >
    <router-link
      to="/"
      class="w-full block py-3 px-3 text-center hover:bg-gray-200 hover:text-gray-800 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mb-2 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      Home
    </router-link>

    <router-link
      to="/settings"
      class="w-full block py-3 px-3 text-center hover:bg-gray-200 hover:text-gray-800"
    >
      <svg
        class="w-6 h-6 mb-2 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
      Ustawienia
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "AppLayoutNavbar",
};
</script>
