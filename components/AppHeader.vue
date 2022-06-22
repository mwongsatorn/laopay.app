<template>
  <header
    class="sticky top-0 left-0 z-[9999] w-full bg-white font-bold uppercase shadow-md"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center px-4 md:h-24">
      <div>
        <NuxtLink to="/">
          <img
            src="~/assets/images/laopay-logo.png"
            alt=""
            class="w-20 md:w-28"
          />
        </NuxtLink>
      </div>

      <NavigationMenu></NavigationMenu>

      <div
        class="relative ml-auto flex cursor-pointer items-center md:ml-8"
        @click="showLanguageList = !showLanguageList"
      >
        <IconGlobe class="h-6 w-6"></IconGlobe>
        <IconDropDownArrow class="h-6 w-6"></IconDropDownArrow>

        <DropDownLanguage v-show="showLanguageList"></DropDownLanguage>
      </div>

      <div class="ml-4 flex items-center md:hidden">
        <IconHamburgerMenu
          class="inline h-6 w-6 cursor-pointer transition-all"
          @click.native="toggleOverlay"
        />
      </div>
    </div>
    <MobileMenuOverlay
      v-if="showMobileOverlay"
      :show-mobile-nav="showMobileNav"
      @toggleNav="showMobileNav = !showMobileNav"
      @toggleOverlay="toggleOverlay"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileOverlay: null,
      showMobileNav: null,
      showLanguageList: null,
      fontFamilyClass: 'font-noto-sans-lao',
      overflowClass: '',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: [this.fontFamilyClass, this.overflowClass],
      },
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
    toggleOverlay() {
      this.showMobileOverlay = !this.showMobileOverlay
      if (this.showMobileOverlay === false) this.overflowClass = ''
      else this.overflowClass = 'overflow-hidden'
    },
  },
}
</script>

<style scoped></style>
