<template>
  <transition
    name="dropdown-mobile-menu"
    enter-active-class="transition-all duration-300"
    enter-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-all duration-300"
    leave-to-class="-translate-y-full "
  >
    <div class="pb-2 text-xs">
      <NuxtLink
        v-for="menu in subMenu"
        :key="menu.routePath"
        v-slot="{ navigate, isExactActive }"
        :to="menu.routePath"
        custom
      >
        <div
          :class="[isExactActive ? 'bg-primary-red' : '']"
          class="cursor-pointer py-2 px-4"
          @click.stop="navigate"
        >
          <span>{{ menu.routeName }} </span>
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
