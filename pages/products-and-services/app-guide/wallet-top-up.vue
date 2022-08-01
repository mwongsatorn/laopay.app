<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
      {{ $t('title') }}
    </h1>
    <div class="flex flex-nowrap overflow-x-auto py-8">
      <div
        v-for="(guide, index) in walletTopUpGuide"
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
    "title": "ການຕື່ມເງິນເຂົ້າກະເປົາເງິນ",
    "step1": "ກົດເລືອກຄໍາວ່າ \"ຕື່ມເງິນກະເປົາເງິນ\" (Wallet Top-Up) ໃນໜ້າເມນູ",
    "step2": "ເຂົ້າສູ່ໜ້າ \"ຕື່ມເງິນກະເປົາເງິນ (Wallet Top-Up)\" ແລະ ສະແດງ QR Code ໃຫ້ເຈົ້າໜ້າທີ່ສະແກນ"
  },
  "en": {
    "title": "Wallet Top-Up",
    "step1": "Click \"Wallet Top-Up\" bottonon LaoPay Homepage",
    "step2": "Visit \"Wallet Top-Up\" page and show QR code to LaoPay agent to scan directly"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      walletTopUpGuide: [
        {
          image: '/homepage.jpg',
          description: 'step1',
        },
        {
          image: '/wallet-top-up/wallet-top-up-step-2.jpg',
          description: 'step2',
        },
      ],
    }
  },
}
</script>
