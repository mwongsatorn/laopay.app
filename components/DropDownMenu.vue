<template>
  <div
    class="absolute top-3/4 left-0 z-50 w-80 divide-y divide-solid rounded-lg border-2 bg-white shadow-md"
  >
    <NuxtLink
      v-for="menu in subMenu"
      :key="menu.routePath"
      v-slot="{ navigate, isExactActive }"
      :to="menu.routePath"
      custom
    >
      <div
        class="cursor-pointer rounded-lg px-8 py-4 hover:bg-slate-100"
        @click="navigate"
      >
        <span
          :class="[isExactActive ? 'text-primary-red' : 'hover:text-slate-600']"
          >{{ menu.routeName }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    subMenu: {
      type: Array,
      default: () => {},
    },
  },
}
</script>
