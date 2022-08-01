<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
      {{ $t('title') }}
    </h1>
    <div class="flex flex-nowrap overflow-x-auto py-8">
      <div
        v-for="(guide, index) in payGuide"
        :key="guide.image"
        class="flex min-w-[280px] shrink-0 basis-full flex-col items-center space-y-8 px-4 sm:basis-1/2 lg:basis-1/3"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-red font-bold"
        >
          {{ index + 1 }}
        </div>
        <img
          :src="
            require(`~/assets/images/products-and-services/app-guide${guide.image}`)
          "
          alt=""
          class="max-h-[450px]"
        />
        <div>
          <p class="text-center">{{ $t(guide.description) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "title": "ຈ່າຍ",
    "step1": "ກົດເລືອກຄໍາສັ່ງ \"ຈ່າຍ (Pay)\" ໃນໜ້າເມນູ",
    "step2": "ກ້ອງໃນອຸປະກອນຂອງຜູ້ໃຊ້ບໍລິການຈະເປີດຂຶ້ນເພື່ອບັນທຶກຄິວອາໂຄ້ດຂອງຜູ້ຮັບ"
  },
  "en": {
    "title": "Pay",
    "step1": "Click \"Pay\" button on LaoPay Homepage",
    "step2": "Device camera will be opened and ready to scan"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      payGuide: [
        {
          image: '/homepage.jpg',
          description: 'step1',
        },
        {
          image: '/pay/pay-step-2.jpg',
          description: 'step2',
        },
      ],
    }
  },
}
</script>
