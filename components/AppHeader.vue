<template>
  <header
    class="sticky top-0 left-0 z-[9999] w-full bg-white font-medium capitalize shadow-md"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center px-4">
      <div>
        <NuxtLink :to="localePath('/')">
          <img src="~/assets/images/laopay-logo.png" alt="" class="w-24" />
        </NuxtLink>
      </div>

      <div class="ml-auto flex items-center">
        <NavigationMenu></NavigationMenu>
        <LanguageSwitch class="md:ml-8"></LanguageSwitch>
        <IconHamburgerMenu
          class="ml-4 inline h-6 w-6 cursor-pointer transition-all md:hidden"
          @click.native="toggleOverlay"
        />
      </div>
    </div>

    <MobileMenuOverlay
      v-if="showMobileOverlay"
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
      overflowClass: '',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.bodyClass,
      },
    }
  },
  computed: {
    fontFamilyClass() {
      return this.currentLocale === 'lo' ? 'font-noto-sans-lao' : 'font-roboto'
    },
    bodyClass() {
      return [this.fontFamilyClass, this.overflowClass]
    },
    currentLocale() {
      return this.$i18n.locale
    },
  },
  methods: {
    toggleOverlay() {
      this.showMobileOverlay = !this.showMobileOverlay
      if (this.showMobileOverlay === false) this.overflowClass = ''
      else this.overflowClass = 'overflow-hidden'
    },
  },
}
</script>

<style scoped></style>
