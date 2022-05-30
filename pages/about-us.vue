<template>
  <div class="mx-auto max-w-7xl px-4 py-12">
    <h1 class="font-noto-sans-lao text-2xl font-bold sm:text-3xl lg:text-4xl">
      ກ່ຽວກັບພວກເຮົາ
    </h1>
    <div
      class="mt-8 grid grid-cols-1 rounded-tl-3xl rounded-br-3xl border-2 shadow-lg md:grid-cols-2"
    >
      <div
        class="h-64 rounded-tl-3xl bg-cover bg-right sm:h-[25rem] md:h-auto"
        :style="{
          'background-image': `url(${require('~/assets/images/office.jpg')})`,
        }"
      ></div>
      <div class="rounded-br-3xl">
        <div class="flex h-24 items-center bg-gray-200 p-4">
          <img src="~/assets/images/r2c-logo.png" class="h-12" alt="" />
        </div>

        <p class="p-4 font-noto-sans-lao">
          R2C, ສປປ.ລາວ ໄດ້ເປີດໂຕແພັດຟອມໃນຖານະຜູ້ຖືສັນຍາສຳປະທານບໍລິການຟຣີວາຍຟາຍ
          ແລະ ບໍລິການຈຸດສາກມືຖືໃຫ້ແກ່ສະໜາມບິນ.
          ເຊິ່ງໄດ້ເຂົ້າຕິດຕັ້ງລົງສະໜາມບິນສາກົນຫຼັກ 4 ແຫ່ງ ແລະ ສະໜາມບິນພາຍໃນອີກ
          10 ແຫ່ງເຊັ່ນ: ນະຄອນຫຼວງວຽງຈັນ, ຫຼວງພະບາງ, ສະຫວັນນະເຂດ ແລະ ປາກເຊ R2C
          ໄດ້ຮ່ວມມືກັບ ບໍລິສັດ ລາວເພ້ ວຽງຈັນ ຈຳກັດຜູ້ດຽວ
          ເຊິ່ງພວມໄດ້ໜັງສືອະນຸມັດຈາກກະຊວງ ວິທະຍາສາດ ແລະ ເຕັກໂນໂລຊີ,
          ໃຫ້ເປີດໂຕແອັບພິເຄຊັ້ນ ກະເປົາເງິນເອເລັກໂຕນິກບົນມືຖື (e-Wallet) ແລະ
          ເພື່ອດຳເນີນການການໃຫ້ບໍລິການ ອອນລາຍເພເມັ້ນ
          ທົ່ວປະເທດຈາກທະນາຄານແຫ່ງຊາດລາວ (BOL) ໂດຍທົ່ວໄປແລ້ວຕົວແອັບມີນາມວ່າ
          “ລາວເພ້ (LaoPay)” ໂດຍຮ່ວມມືກັບ ທະນາຄານຮ່ວມພັດທະນາ (JDB) ແລະ
          ທະນາຄານອື່ນໆໃນສປປ.ລາວ ແລະ ມີແຜນທີ່ຈະຂະຫຍາຍຮູບແບບທຸລະກິດ
          ກະເປົາເງິນເອເລັກໂຕນິກ (e-Wallet), ໄມໂຄຼໄຟແນັ້ນຊິ້ງ (Micro-Financing)
          ແລະ ອີຄອມເມີດສ (e-Commerce) ໃນຮູບແບບທຸລະກິດບໍລິການຮາດແວ (hardware) ແລະ
          ຊ໊ອບແວ (software) ເພື່ອສະໜັບສະໜຸນການພັດທະນາເຕັກໂນໂລຊີ 5G
          ໂດຍຮ່ວມມືກັບພັນທະມິດ ເທວໂຄ (telco)
        </p>
      </div>
    </div>
  </div>
</template>
