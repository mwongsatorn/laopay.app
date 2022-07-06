<template>
  <div
    id="quote-section"
    class="relative -mt-20 h-screen min-h-[45rem] bg-cover bg-[position:50%_70%] md:-mt-24 md:bg-right"
    :style="{
      'background-image': `url(${require('~/assets/images/index/banner-2-' +
        bannerSuffix +
        '.jpg')})`,
    }"
  >
    <div class="relative top-[15%] mx-auto max-w-xl space-y-6 px-4">
      <h1
        class="text-center text-2xl font-extrabold uppercase text-white sm:text-3xl md:text-4xl"
      >
        Super Lifestyle App
      </h1>
      <p
        class="text-center text-lg font-light tracking-wider text-white sm:text-xl md:text-2xl"
      >
        {{ $t('quote') }}
      </p>

      <div
        class="mx-auto flex max-w-lg flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12"
      >
        <div v-for="n in 8" :key="n">
          <img
            class="h-6 md:h-7"
            :src="require(`~/assets/images/partner-logo/partner-${n}.png`)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "quote": "ທີ່ສຸດຂອງແອັບພິເຄຊັ້ນທີ່ຕອບສະໜອງ ທຸກຮູບແບບຂອງທ່ານສະດວກກວ່າ ງ່າຍກວ່າ ປະຫຍັດກວ່າ"
  },
  "en": {
    "quote": "The top e-Wallet application which match with your lifestyle to be more convenient, easier, and save more"
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
