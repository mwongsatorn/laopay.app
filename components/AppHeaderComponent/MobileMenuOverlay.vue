<template>
  <transition
    name="overlay-menu"
    enter-active-class="transition-all "
    enter-class="opacity-0 "
    enter-to-class="opacity-100"
    leave-active-class="transition-all"
    leave-to-class="opacity-0"
    appear
    @after-enter="showMobileNav = !showMobileNav"
  >
    <div
      class="fixed inset-0 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-primary-blue/50 to-primary-red/50 backdrop-blur-sm"
      @click="showMobileNav = !showMobileNav"
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
          class="absolute right-0 min-h-full w-[320px] bg-white"
          @click.stop
        >
          <div class="flex justify-end bg-gray-900 py-4 px-2 text-white">
            <button @click="showMobileNav = !showMobileNav">
              <IconCross class="h-8 w-8"></IconCross>
            </button>
          </div>
          <MobileNavigationMenu></MobileNavigationMenu>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    }
  },
  watch: {
    $route() {
      this.showMobileNav = false
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 768 && this.showMobileNav === true)
        this.showMobileNav = false
    },
  },
}
</script>

<style scoped></style>
