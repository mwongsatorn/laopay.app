<template>
  <div id="default-layout" class="flex min-h-screen flex-col">
    <transition
      name="hero-section"
      enter-active-class="transition-all duration-300 delay-300"
      enter-class="opacity-0 "
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300"
      leave-to-class="opacity-0"
    >
      <HeroSection v-if="isHomePage"></HeroSection>
    </transition>
    <AppHeader @toggleOverlay="toggleOverlay"></AppHeader>
    <MobileMenuOverlay
      v-if="showMobileMenuOverlay"
      @toggleOverlay="toggleOverlay"
    />
    <Nuxt></Nuxt>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenuOverlay: null,
      overflowClass: '',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: [this.overflowClass],
      },
    }
  },
  computed: {
    isHomePage() {
      return this.$route.name.includes('index')
    },
  },
  methods: {
    toggleOverlay() {
      this.showMobileMenuOverlay = !this.showMobileMenuOverlay
      if (this.showMobileMenuOverlay === false) this.overflowClass = ''
      else this.overflowClass = 'overflow-hidden'
    },
  },
}
</script>
