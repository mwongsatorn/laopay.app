<template>
  <transition
    name="dropdown-mobile-menu"
    enter-active-class="transition-all overflow-hidden duration-500"
    enter-class="max-h-0"
    enter-to-class="h-auto"
    leave-active-class="transition-all overflow-hidden duration-500"
    leave-to-class="h-0 "
  >
    <div
      class="h-0 divide-y divide-solid rounded-lg border-2 bg-white shadow-md"
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
