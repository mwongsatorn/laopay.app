<template>
  <div
    class="h-screen min-h-[45rem] bg-cover bg-center md:bg-[position:10%_40%]"
    :style="{
      'background-image': `url(${require('~/assets/images/index/banner-3-' +
        bannerSuffix +
        '.jpg')})`,
    }"
  >
    <div
      class="relative mx-auto max-w-7xl space-y-6 px-6 pt-20 font-noto-sans-lao md:top-1/2 md:-translate-y-1/2 md:px-8"
    >
      <p class="text-center text-3xl font-extrabold md:text-left lg:text-5xl">
        ມີໃຫ້ບໍລິການແລ້ວ
      </p>
      <div
        class="relative mx-auto flex w-[275px] items-center justify-center gap-x-4 rounded-3xl bg-gray-100 py-3 md:mx-0 lg:w-80"
      >
        <span class="text-lg font-bold lg:text-2xl">LaoPay</span>
        <span class="absolute right-2">
          <IconSearch class="h-6 w-6"></IconSearch>
        </span>
      </div>
      <p class="text-center text-xl md:text-left lg:text-3xl">
        ດາວໂຫຼດໄດ້ແລ້ວເທິງ iOS ແລະ Android
      </p>
      <div class="flex items-center justify-center space-x-4 md:justify-start">
        <img
          class="w-36 lg:w-52"
          src="~/assets/images/google-play.png"
          alt="google-play"
        />
        <img
          class="w-36 lg:w-52"
          src="~/assets/images/appstore.png"
          alt="appstore"
        />
      </div>
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
