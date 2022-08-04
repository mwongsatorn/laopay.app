<template>
  <div
    id="short-about-us-section"
    class="bg-[url('~/assets/images/index/sau-bg-mobile.jpg')] bg-cover bg-[position:0%_85%] sm:bg-[url('~/assets/images/index/sau-bg-tablet.jpg')] lg:bg-[url('~/assets/images/index/sau-bg-desktop.jpg')]"
  >
    <div
      class="mx-auto flex max-w-7xl text-white sm:justify-center lg:justify-start"
    >
      <div
        class="flex h-screen max-h-[720px] min-h-[640px] flex-col space-y-8 py-12 px-6 sm:max-w-xl lg:max-w-[380px] lg:justify-center"
      >
        <h1 class="text-3xl font-bold text-sky-200 sm:text-4xl lg:text-5xl">
          {{ $t('title') }}
        </h1>
        <h2 class="font-roboto text-lg font-bold sm:text-xl lg:text-2xl">
          LaoPay Vientiane Sole Co., Ltd.
        </h2>

        <p class="text-base lg:text-lg">{{ $t('description') }}</p>
        <LinkButton to="/about-us" class="w-fit text-black">{{
          $t('buttonText')
        }}</LinkButton>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "title": "ກ່ຽວກັບພວກເຮົາ",
    "description": "ບໍລິສັດ ລາວເພ້ ວຽງຈັນ ຈຳກັດຜູ້ດຽວ ກໍ່ຕັ້ງຂຶ້ນໃນປີ 2019 ໂດຍເກີດຈາກຄວາມຮ່ວມມືກັນລະຫວ່າງ ບໍລິສັດ ເຣດດີ້ ທູ ຄອນເນັກ (ລາວ) ຈຳກັດ ແລະ ບໍລິສັດ ເອກະໄຊໂຊກ ອະສັງຫາລິມະສັບ ຈຳກັດຜູ້ດຽວ ດຳເນີນທຸລະກິດອີວໍເລັດ ພັດທະນາແອັບພິເຄຊັ້ນໂດຍໃຊ້ຊື່ວ່າ: ລາເພ້ (LaoPay) ແລະເປັນຜູ້ໃຫ້ບໍລິການ ອອນລາຍເພເມັ້ນ",
    "buttonText": "ອ່ານເພີ່ມຕື່ມ"
  },
  "en": {
    "title": "About Us",
    "description": "LaoPay Vientiane Sole Co., Ltd. is established since 2019 which is in collaboration between Ready To Connect (Laos) Co., Ltd. and Akasaysok Real Estate Sole Co., Ltd. To develop e-Wallet mobile application nationwide namely “LaoPay” and online payment service provider.",
    "buttonText": "Read More"
  }
}
</i18n>

<script></script>
