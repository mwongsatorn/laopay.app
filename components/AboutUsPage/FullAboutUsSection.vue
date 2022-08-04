<template>
  <div
    id="full-about-us-section"
    class="bg-[url('~/assets/images/index/sau-bg-mobile.jpg')] bg-cover bg-[position:0%_80%] sm:bg-[url('~/assets/images/index/sau-bg-tablet.jpg')] lg:bg-[url('~/assets/images/index/sau-bg-desktop.jpg')]"
  >
    <div
      class="mx-auto flex h-[calc(100vh-5rem)] max-h-[720px] min-h-[640px] max-w-7xl text-white sm:justify-center lg:items-center lg:justify-start"
    >
      <div
        class="flex h-3/4 flex-col space-y-8 py-12 px-6 sm:h-3/5 sm:max-w-3xl lg:h-full lg:max-w-[380px]"
      >
        <h1 class="text-3xl font-bold text-sky-200 sm:text-4xl lg:text-5xl">
          {{ $t('title') }}
        </h1>
        <h2 class="font-roboto text-lg font-bold sm:text-xl lg:text-2xl">
          LaoPay Vientiane Sole Co., Ltd.
        </h2>

        <div class="h-4/5 space-y-6 overflow-y-auto pr-6">
          <div class="flex space-x-8">
            <div class="w-1/4 rounded-full bg-blue-300 p-1.5 sm:w-1/6 lg:w-1/3">
              <img
                class="w-full"
                src="~/assets/images/mos-laos-logo.png"
                alt=""
              />
            </div>
            <div
              class="w-1/4 rounded-full bg-yellow-300 p-1.5 sm:w-1/6 lg:w-1/3"
            >
              <img
                class="w-full"
                src="~/assets/images/partner-logo/partner-7.png"
                alt=""
              />
            </div>
          </div>
          <p class="text-base lg:text-lg">
            {{ $t('description') }}
          </p>
          <div
            class="cursor-pointer text-base font-bold text-sky-200 underline lg:text-lg"
            @click="$emit('showBoard')"
          >
            Board of ShareHolders
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "title": "ກ່ຽວກັບພວກເຮົາ",
    "description": "ບໍລິສັດ ລາວເພ້ ວຽງຈັນ ຈຳກັດຜູ້ດຽວ ກໍ່ຕັ້ງຂຶ້ນໃນປີ 2019 ດຳເນີນທຸລະກິດ ອີວໍເລັດ ພັດທະນາແອັບພິເຄຊັ້ນໂດຍໃຊ້ຊື່ວ່າ: ລາເພ້ (LaoPay) ແລະ ເປັນຜູ້ໃຫ້ບໍລິການ ອອນລາຍເພເມັ້ນ ໂດຍເກີດຈາກຄວາມຮ່ວມມືກັນລະຫວ່າງ ບໍລິສັດ ເຣດດີ້ ທູ ຄອນເນັກ (ລາວ) ຈຳກັດ ດຳເນີນທຸລະກິດໃນຖານະຜູ້ໃຫ້ບໍລິການ ຟຣີວາຍຟາຍໃນສະໜາມບິນວັດໄຕ ແລະ ຫລວງພະບາງ ໂດຍທ່ານ ເຊນ ສຸວັນນະພັນ ໃນຖານະປະທານກຳມະການບໍລິຫານ ແລະ ບໍລິສັດ ເອກະໄຊໂຊກ ອະສັງຫາລິມະສັບ ຈຳກັດຜູ້ດຽວ ດຳເນີນທຸລະກິດອະສັງຫາລິມະສັບ ໂດຍທ່ານ ພູໄຊຊະນະ ໄຊສົມບັດ (ອ້າຍ ຫລ້ານ້ອຍ) 1 ໃນຂະນະບໍລິຫານທະນາຄານຮ່ວມພັດທະນາ (Joint Development Bank: JDB) ແລະ ໃນປີດຽວກັນ ທາງບໍລິສັດ ໄດ້ຮັບໃບອະນຸຍາດໃນການປະກອບທຸລະກິດ ອີວໍເລັດຊົ່ວຄາວ ຈາກກະຊວງ ວິທະຍາສາດ ແລະ ເຕັກໂນໂລຊີ ແລະ ຂະນະນີ້ທາງບໍລິສັດ ກຳລັງດຳເນີນເອກະສານເພື່ອຍື່ນຂໍໃບອະນຸຍາດປະກອບທຸລະກິດ ອີວໍເລັດຖາວອນກັບທາງທະນາຄານແຫ່ງຊາດລາວ  (Bank of the Lao P.D.R.) ຫຼື BOL"
  },
  "en": {
    "title": "About Us",
    "description": "LaoPay Vientiane Sole Co., Ltd. is established since 2019 as developing e-Wallet mobile application namely “LaoPay” and online payment service provider. Our company are in collaboration between Ready To Connect (Laos) Co., Ltd. or R2C (Laos) has operated Airport Free Wi-Fi service in Wattay and Luang Prabang leading by Mr. Shane Suwannaphan as managing director. And Akasaysok Real Estate Sole Co., Ltd. which has run in real estate business, leading by Phousaysana Saysombath, one of board of directors of Joint Development Bank or JDB. In 2019, our company recevied a temporary e-Wallet licence from Ministry of Science and Technology (MOST) and this year, we're preparing a documents to apply for a permanent e-Wallet license from the Bank of the Lao P.D.R. or BOL."
  }
}
</i18n>
