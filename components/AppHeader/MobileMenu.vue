<template>
  <transition
    name="overlay-menu"
    enter-active-class="transition-all "
    enter-class="opacity-0 "
    enter-to-class="opacity-100"
    leave-active-class="transition-all"
    leave-to-class="opacity-0"
    @after-enter="showMenuList = true"
  >
    <div
      class="fixed top-0 h-screen w-full overflow-x-hidden overflow-y-scroll bg-white/50 backdrop-blur-sm"
      @click="showMenuList = false"
    >
      <transition
        name="menu"
        enter-active-class="transition-all duration-300"
        enter-class="translate-x-[100%]"
        enter-to-class="translate-x-0 "
        leave-active-class="transition-all duration-300"
        leave-to-class="translate-x-[100%]"
        @after-leave="$emit('toggleMobileMenu')"
      >
        <div
          v-show="showMenuList"
          class="relative h-screen w-full border-2 bg-white sm:ml-auto sm:w-7/12"
          @click.stop
        >
          <NavigationMobileMenu></NavigationMobileMenu>
          <button class="absolute top-2 right-2" @click="showMenuList = false">
            <IconCross class="h-8 w-8"></IconCross>
          </button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showMenuList: null,
    }
  },
}
</script>

<style scoped></style>
