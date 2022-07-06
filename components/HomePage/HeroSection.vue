<template>
  <div
    id="hero-section"
    class="relative h-screen min-h-[45rem] bg-[url('~/assets/images/index/hero-bg-mobile.jpg')] bg-cover bg-center sm:bg-[url('~/assets/images/index/hero-bg-tablet.jpg')] lg:bg-[url('~/assets/images/index/hero-bg-desktop.jpg')]"
  >
    <div
      class="relative px-6 pt-16 text-primary-blue lg:top-1/2 lg:-translate-y-1/2 lg:pt-0"
    >
      <img
        class="mx-auto w-32 sm:w-36 lg:mx-0 lg:mr-auto lg:w-40"
        src="~/assets/images/laopay-logo.png"
        alt=""
      />
      <h1
        class="pt-4 text-center text-2xl font-extrabold sm:text-4xl lg:text-left lg:text-5xl"
      >
        SMART LIFE
      </h1>
      <h1
        class="text-center text-2xl font-extrabold sm:text-4xl lg:text-left lg:text-5xl"
      >
        SUPER <span class="text-primary-red">LIFESTYLE</span> APP
      </h1>
      <p
        class="pt-4 text-center text-lg font-bold tracking-[0.3rem] sm:text-2xl lg:text-left"
      >
        {{ $t('text') }}
      </p>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "text": "ໃຫ້ທຸກຮູບແບບຂອງທ່ານ ເປັນເລື່ອງພິເສດ"
  },
  "en": {
    "text": "MAKE EVERY OF YOUR LIFESTYLE SPEACIAL"
  }
}
</i18n>

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
