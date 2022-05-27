<template>
  <transition
    name="overlay-menu"
    enter-active-class="transition-all "
    enter-class="opacity-0 "
    enter-to-class="opacity-100"
    leave-active-class="transition-all"
    leave-to-class="opacity-0"
    appear
    @after-enter="$emit('toggleNav')"
  >
    <div
      class="fixed inset-0 overflow-x-hidden overflow-y-scroll bg-white/50 backdrop-blur-sm"
      @click="$emit('toggleNav')"
    >
      <transition
        name="menu"
        enter-active-class="transition-all duration-300"
        enter-class="translate-x-[100%]"
        enter-to-class="translate-x-0 "
        leave-active-class="transition-all duration-300"
        leave-to-class="translate-x-[100%]"
        @after-leave="$emit('toggleOverlay')"
      >
        <div
          v-show="showMobileNav"
          class="absolute right-0 min-h-full w-[320px] border-2 bg-primary-blue text-white"
          @click.stop
        >
          <div class="flex justify-end py-2 px-2">
            <button @click="$emit('toggleNav')">
              <IconCross class="h-8 w-8"></IconCross>
            </button>
          </div>
          <MobileNavigationMenu2></MobileNavigationMenu2>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showMobileNav: {
      type: Boolean,
    },
  },
}
</script>

<style scoped></style>
