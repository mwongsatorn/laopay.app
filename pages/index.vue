<template>
  <div class="font-opensans">
    <div
      :style="{ 'background-image': `url(${heroBackground})` }"
      class="relative flex h-screen items-center justify-end bg-cover"
    >
      <div
        class="flex w-fit flex-col items-end space-y-4 border-2 bg-white/70 p-8 backdrop-blur-md"
      >
        <img
          src="~/assets/images/laopay-logo.png"
          class="w-36 sm:w-48"
          alt=""
        />
        <div
          class="w-full text-right text-3xl font-bold text-primary-blue sm:text-5xl"
        >
          <div>SMART LIFE</div>
          <div><span class="text-primary-red">SUPER LIFESTYLE</span> APP</div>
        </div>
        <div class="text-right text-base sm:w-[70%] sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          sit!
        </div>
      </div>
      <div
        class="absolute bottom-4 right-4 flex items-center justify-center space-x-2"
      >
        <span class="text-xs font-bold uppercase">Scroll Down</span>
        <span>
          <IconCircleArrowDown class="h-8 w-8 animate-bounce">
          </IconCircleArrowDown>
        </span>
      </div>
    </div>
    <HeaderMenu></HeaderMenu>
    <div class="h-screen bg-primary-blue"></div>
    <div class="h-screen bg-stone-400"></div>
  </div>
</template>

<script>
import heroBackground from '~/assets/images/hero-section-bg.jpg'

export default {
  name: 'IndexPage',
  data() {
    return {
      heroBackground,
    }
  },
}
</script>
