<template>
  <div
    id="hero-section"
    class="h-screen max-h-[720px] min-h-[640px] bg-[url('~/assets/images/index/hero-bg-mobile.jpg')] bg-cover bg-center sm:bg-[url('~/assets/images/index/hero-bg-tablet.jpg')] lg:bg-[url('~/assets/images/index/hero-bg-desktop.jpg')]"
  >
    <div
      class="flex h-full flex-col justify-start space-y-4 px-6 py-12 text-primary-blue lg:justify-center lg:pt-0"
    >
      <img
        class="mx-auto w-32 sm:w-36 lg:mx-0 lg:mr-auto lg:w-40"
        src="~/assets/images/laopay-logo.png"
        alt=""
      />
      <h1
        class="text-center font-roboto text-2xl font-extrabold sm:text-4xl lg:text-left lg:text-5xl"
      >
        SMART LIFE <br />
        SUPER <span class="text-primary-red">LIFESTYLE</span> APP
      </h1>
      <p
        class="text-center text-lg font-bold tracking-[0.3rem] sm:text-2xl lg:text-left"
      >
        {{ $t('text_1') }} <br />
        {{ $t('text_2') }}
      </p>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "text_1": "ໃຫ້ທຸກຮູບແບບຂອງທ່ານ",
    "text_2": "ເປັນເລື່ອງພິເສດ"
  },
  "en": {
    "text_1": "MAKE EVERY OF YOUR",
    "text_2": "LIFESTYLE SPEACIAL"
  }
}
</i18n>

<script></script>
