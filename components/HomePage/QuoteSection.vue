<template>
  <div
    id="quote-section"
    class="relative h-[calc(100vh-5rem)] max-h-[720px] min-h-[640px] bg-gradient-to-b from-slate-500 to-yellow-50"
  >
    <div class="absolute inset-0">
      <img
        class="absolute bottom-0 left-0 h-[45%] object-cover object-left sm:h-auto sm:w-[60%]"
        src="~/assets/images/index/shopping-girl.png"
        alt=""
      />
    </div>

    <div class="mx-auto max-w-lg space-y-6 px-6 py-12 sm:max-w-xl sm:space-y-8">
      <h1
        class="text-center text-2xl font-extrabold uppercase text-white sm:text-3xl lg:text-4xl"
      >
        Super Lifestyle App
      </h1>
      <p
        class="text-center text-lg font-light tracking-wider text-white sm:text-xl lg:text-2xl"
      >
        {{ $t('quote') }}
      </p>

      <div class="flex flex-wrap justify-center gap-y-4 gap-x-8">
        <div v-for="n in 8" :key="n">
          <img
            class="h-6 sm:h-7 lg:h-8"
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

<script></script>
