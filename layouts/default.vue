<template>
  <div id="default-layout" class="">
    <transition
      name="hero-section"
      enter-active-class="transition-all duration-300 delay-300"
      enter-class="opacity-0 "
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300"
      leave-to-class="opacity-0"
    >
      <HeroSection v-if="$route.path === '/'"></HeroSection>
    </transition>
    <AppHeader></AppHeader>
    <Nuxt></Nuxt>
  </div>
</template>
