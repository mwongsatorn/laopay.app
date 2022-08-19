<template>
  <header class="sticky top-0 left-0 z-[9999] w-full bg-white shadow-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center px-6">
      <div>
        <NuxtLink :to="localePath('/')">
          <img src="~/assets/images/laopay-logo.png" alt="" class="w-24" />
        </NuxtLink>
      </div>

      <div class="ml-auto flex items-center font-medium capitalize">
        <NavigationMenu></NavigationMenu>
        <LanguageSwitch class="ml-8 hidden md:flex"></LanguageSwitch>
        <IconHamburgerMenu
          class="ml-4 inline h-6 w-6 cursor-pointer transition-all md:hidden"
          @click.native="$emit('toggleOverlay')"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: [this.fontFamilyClass],
      },
    }
  },
  computed: {
    fontFamilyClass() {
      return this.currentLocale === 'lo' ? 'font-noto-sans-lao' : 'font-roboto'
    },
    currentLocale() {
      return this.$i18n.locale
    },
  },
}
</script>

<style scoped></style>
