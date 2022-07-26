<template>
  <div id="short-about-us-section" class="relative bg-stone-400">
    <div
      class="mx-auto grid min-h-[640px] max-w-xl grid-cols-1 place-content-center gap-8 px-4 py-20 md:max-w-7xl md:grid-cols-2"
    >
      <div
        class="h-[280px] w-full bg-[url('~/assets/images/office.jpg')] bg-cover bg-center sm:h-[360px]"
      />

      <div class="flex flex-col justify-between space-y-8 py-8">
        <div class="space-y-4">
          <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
            {{ $t('title') }}
          </h1>
          <h2 class="font-roboto text-lg font-bold sm:text-xl lg:text-2xl">
            LaoPay Vientiane Sole Co., Ltd.
          </h2>
          <p class="">
            {{ $t('description') }}
          </p>
        </div>

        <div class="flex">
          <LinkButton :to="localePath('/about-us')">
            {{ $t('button_text') }}
          </LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "title": "ກ່ຽວກັບພວກເຮົາ",
    "description": "ບໍລິສັດ ລາວເພ້ ວຽງຈັນ ຈຳກັດຜູ້ດຽວ ກໍ່ຕັ້ງຂຶ້ນໃນປີ 2019 ໂດຍເກີດຈາກຄວາມຮ່ວມມືກັນລະຫວ່າງ ບໍລິສັດ ເຣດດີ້ ທູ ຄອນເນັກ (ລາວ) ຈຳກັດ ແລະ ບໍລິສັດ ເອກະໄຊໂຊກ ອະສັງຫາລິມະສັບ ຈຳກັດຜູ້ດຽວ ດຳເນີນທຸລະກິດອີວໍເລັດ ພັດທະນາແອັບພິເຄຊັ້ນໂດຍໃຊ້ຊື່ວ່າ: ລາເພ້ (LaoPay) ແລະເປັນຜູ້ໃຫ້ບໍລິການ ອອນລາຍເພເມັ້ນ",
    "button_text": "ອ່ານເພີ່ມຕື່ມ"
  },
  "en": {
    "title": "About Us",
    "description": "LaoPay Vientiane Sole Co., Ltd. is established since 2019 which is in collaboration between Ready To Connect (Laos) Co., Ltd. and Akasaysok Real Estate Sole Co., Ltd. To develop e-Wallet mobile application nationwide namely “LaoPay” and online payment service provider.",
    "button_text": "Read More"
  }
}
</i18n>

<script></script>
