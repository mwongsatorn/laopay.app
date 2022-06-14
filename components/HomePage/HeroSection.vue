<template>
  <div
    id="hero-section"
    :style="{
      'background-image': `url(${require('~/assets/images/index/banner-1-' +
        bannerSuffix +
        '.jpg')})`,
    }"
    class="relative h-screen min-h-[45rem] bg-cover bg-center md:bg-right"
  >
    <div class="relative px-6 pt-16 md:top-1/2 md:-translate-y-1/2 md:pt-0">
      <img
        class="mx-auto w-32 sm:w-36 md:mx-0 md:ml-auto md:w-40"
        src="~/assets/images/laopay-logo.png"
        alt=""
      />
      <h1
        class="pt-4 text-center text-2xl font-extrabold text-primary-blue sm:text-4xl md:text-right md:text-5xl"
      >
        SMART LIFE
      </h1>
      <h1
        class="text-center text-2xl font-extrabold sm:text-4xl md:text-right md:text-5xl"
      >
        SUPER <span class="text-primary-red">LIFESTYLE</span> APP
      </h1>
      <p
        class="pt-4 text-center font-noto-sans-lao text-lg font-bold tracking-[0.3rem] sm:text-2xl md:text-right"
      >
        ໃຫ້ທຸກຮູບແບບຂອງທ່ານ <br />
        ເປັນເລື່ອງພິເສດ
      </p>
    </div>

    <div
      class="absolute bottom-1/2 right-1/2 flex translate-x-1/2 translate-y-12 flex-col items-center space-y-4 md:bottom-4 md:right-4 md:translate-x-0 md:translate-y-0 md:flex-row md:space-x-4"
    >
      <span class="font-bold uppercase">Scroll Down</span>
      <span>
        <IconCircleArrowDown
          class="h-8 w-8 animate-bounce"
        ></IconCircleArrowDown>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerSuffix: {
      type: String,
      default: '',
    },
  },
}
</script>
