<template>
  <div class="relative flex bg-gray-200 font-roboto text-sm font-medium">
    <div
      :class="[currentLocale === 'lo' ? 'left-0' : 'right-0']"
      class="absolute h-8 w-8 bg-primary-red"
    ></div>
    <NuxtLink
      :to="switchLocalePath('lo')"
      :class="[currentLocale === 'lo' ? 'text-white' : 'text-black']"
      class="relative flex h-8 w-8 items-center justify-center"
    >
      LO
    </NuxtLink>
    <NuxtLink
      :to="switchLocalePath('en')"
      :class="[currentLocale === 'en' ? 'text-white' : 'text-black']"
      class="relative flex h-8 w-8 items-center justify-center"
    >
      EN
    </NuxtLink>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
  },
}
</script>
