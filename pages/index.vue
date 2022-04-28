<template>
  <div
    :style="{ 'background-image': `url(${heroBackground})` }"
    class="flex h-screen items-center justify-end bg-cover"
  >
    <div
      class="flex flex-col items-end space-y-4 border-2 bg-white/70 p-8 backdrop-blur-md sm:min-w-[40%]"
    >
      <img src="~/assets/images/laopay-logo.png" class="w-36 sm:w-48" alt="" />
      <div
        class="w-full text-right text-3xl font-bold text-primary-blue sm:text-5xl"
      >
        <div>SUPER.</div>
        <div><span class="text-primary-red">LIFESTYLE</span>.APP</div>
      </div>
      <div class="w-[70%] text-right text-base sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        sit!
      </div>
    </div>
    <div
      class="fixed bottom-4 right-4 flex items-center justify-center space-x-2"
    >
      <div>Scroll Down</div>
      <IconCircleArrowDown class="h-12 w-12 animate-bounce">
      </IconCircleArrowDown>
    </div>
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
