<template>
  <div
    class="relative h-screen min-h-[45rem] bg-primary-blue bg-cover bg-[position:50%_70%] md:bg-right"
    :style="{
      'background-image': `url(${require('~/assets/images/index/banner-2-' +
        bannerSuffix +
        '.jpg')})`,
    }"
  >
    <div class="relative top-[12%] mx-auto max-w-2xl space-y-6 px-4">
      <h1
        class="text-center text-2xl font-extrabold uppercase text-white sm:text-3xl md:text-4xl"
      >
        Super Lifestyle App
      </h1>
      <p
        class="text-center font-noto-sans-lao text-lg font-light tracking-widest text-white sm:text-xl md:text-2xl"
      >
        ທີ່ສຸດຂອງແອັບພິເຄຊັ້ນທີ່ຕອບສະໜອງ <br />
        ທຸກຮູບແບບຂອງທ່ານ ສະດວກກວ່າ ງ່າຍກວ່າ ປະຫຍັດກວ່າ
      </p>
      <div>
        <div
          class="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-6"
        >
          <div v-for="n in 10" :key="n">
            <img
              class="h-6"
              :src="require(`~/assets/images/partner-logo/partner-${n}.png`)"
              alt=""
            />
          </div>
        </div>
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
