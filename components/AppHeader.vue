<template>
  <header
    class="sticky top-0 left-0 z-50 w-full bg-white font-roboto text-sm font-bold uppercase shadow-md"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center px-4 sm:h-24">
      <NuxtLink v-slot="{ navigate }" custom to="/">
        <div class="cursor-pointer" @click="navigate">
          <img
            src="~/assets/images/laopay-logo.png"
            alt=""
            class="w-20 sm:w-28"
          />
        </div>
      </NuxtLink>

      <NavigationMenu2></NavigationMenu2>

      <div
        class="relative ml-auto flex cursor-pointer items-center py-4 md:ml-4"
        @mouseover="showLanguageList = true"
        @mouseleave="showLanguageList = false"
      >
        <IconGlobe class="h-6 w-6 lg:ml-8"></IconGlobe>
        <IconDropDownArrow class="h-6 w-6"></IconDropDownArrow>

        <DropDownLanguage
          v-show="showLanguageList"
          @showLanguageList="showLanguageList = true"
          @hideLanguageList="showLanguageList = false"
        ></DropDownLanguage>
      </div>

      <div class="ml-4 flex h-full items-center md:hidden">
        <IconHamburgerMenu
          class="inline h-6 w-6 cursor-pointer transition-all"
          @click.native="toggleMobileMenu"
        />
      </div>
    </div>
    <MobileMenu v-show="showMobileMenu" @toggleMobileMenu="toggleMobileMenu" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: null,
      showLanguageList: null,
      bodyClass: [],
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.bodyClass,
      },
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(window.innerWidth)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 1024) {
        this.showMobileMenu = false
        this.bodyClass.splice(this.bodyClass.indexOf('overflow-hidden', 1))
      }
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      if (this.showMobileMenu === false)
        this.bodyClass.splice(this.bodyClass.indexOf('overflow-hidden', 1))
      else this.bodyClass.push('overflow-hidden')
    },
  },
}
</script>

<style scoped></style>
