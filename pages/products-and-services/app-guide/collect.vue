<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
      {{ $t('title') }}
    </h1>
    <div class="flex flex-nowrap overflow-x-auto py-8">
      <div
        v-for="(guide, index) in collectGuide"
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
    "title": "ຮັບເງິນ",
    "step1": "ກົດເລືອກຄໍາສັ່ງ \"ຮັບເງິນ\" (Collect) ໃນໜ້າເມນູ",
    "step2": "ຂົ້າສູ່ໜ້າ \"ຮັບເງິນ\" (Collect) ແລະຜູ້ໃຊ້ບໍລິການສາມາດນໍາຄິວອາໂຄ້ດທີ່ໄດ້ຮັບ ໃຫ້ຜູ້ຈ່າຍສະແກນ ໄດ້ໂດຍກົງ ຫລື ສາມາດແຊຮູບພາບຄິວອາໂຄ້ດ ສົ່ງໄປໃຫ້ຜູ້ຈ່າຍອີກຝ່າຍໜຶ່ງໄດ້"
  },
  "en": {
    "title": "Collect",
    "step1": "Click \"Collect\" button on LaoPay Homepage",
    "step2": "Visit \"Collect\" page and show QR code to scan directly or share QR Code picture to payer"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      collectGuide: [
        {
          image: '/homepage.jpg',
          description: 'step1',
        },
        {
          image: '/collect/collect-step-2.jpg',
          description: 'step2',
        },
      ],
    }
  },
}
</script>
