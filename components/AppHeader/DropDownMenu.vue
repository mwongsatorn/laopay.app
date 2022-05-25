<template>
  <transition
    name="dropdown-menu"
    enter-active-class="transition-all duration-300"
    enter-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      class="absolute top-3/4 left-0 z-50 w-80 divide-y divide-solid rounded-lg border-2 bg-white shadow-md"
      @mouseover="$emit('showSubRoutes')"
      @mouseleave="$emit('hideSubRoutes')"
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
          <span :class="[isExactActive ? 'text-primary-red' : '']"
            >{{ menu.routeName }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </transition>
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
