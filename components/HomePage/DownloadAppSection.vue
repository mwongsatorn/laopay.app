<template>
  <div
    id="download-app-section"
    class="relative h-screen min-h-[640px] bg-[#F9E4D3]"
  >
    <div class="absolute inset-0">
      <img
        class="absolute bottom-0 right-1/2 h-[50%] translate-x-1/2 md:right-0 md:h-[80%] md:translate-x-0 lg:right-[10%] lg:h-[90%]"
        src="~/assets/images/index/hand.png"
        alt=""
      />
    </div>

    <div
      class="relative mx-auto max-w-7xl px-4 pt-16 md:top-1/2 md:-translate-y-1/2 md:pt-0"
    >
      <div class="mx-auto max-w-xs space-y-6 sm:max-w-sm md:mx-0 lg:max-w-md">
        <p class="text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          {{ $t('text_1') }}
        </p>
        <div
          class="relative mx-auto flex items-center justify-center gap-x-4 rounded-3xl bg-gray-100 py-3 md:mx-0"
        >
          <span class="text-lg font-bold sm:text-xl lg:text-2xl">LaoPay</span>
          <span class="absolute right-2">
            <IconSearch class="h-6 w-6"></IconSearch>
          </span>
        </div>
        <p class="text-center text-xl sm:text-2xl lg:text-3xl">
          {{ $t('text_2') }}
        </p>
        <div class="flex items-center justify-center space-x-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.laopay&hl=en&gl=US"
            target="_blank"
          >
            <img
              class="w-36 sm:w-44 lg:w-52"
              src="~/assets/images/index/google-play.png"
              alt="google-play"
            />
          </a>
          <a
            href="https://apps.apple.com/th/app/laopay/id1577068598"
            target="_blank"
          >
            <img
              class="w-36 sm:w-44 lg:w-52"
              src="~/assets/images/index/appstore.png"
              alt="appstore"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "text_1": "ມີໃຫ້ບໍລິການແລ້ວ",
    "text_2": "ດາວໂຫຼດໄດ້ແລ້ວເທິງ iOS ແລະ Android"
  },
  "en": {
    "text_1": "Now Available!",
    "text_2": "Download on iOS and Android"
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
