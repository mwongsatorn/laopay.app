<template>
  <div id="short-about-us-section" class="h-screen min-h-[40rem] bg-stone-400">
    <div
      class="mx-auto grid h-full max-w-7xl grid-cols-1 place-content-center gap-x-8 px-6 py-20 md:grid-cols-9"
    >
      <div class="md:col-span-5">
        <img
          class="rounded-xl shadow-2xl shadow-stone-700"
          src="~/assets/images/office.jpg"
          alt=""
        />
      </div>
      <div
        class="flex flex-col justify-between font-noto-sans-lao md:col-span-4"
      >
        <div class="space-y-4">
          <h1 class="mt-8 text-2xl font-bold md:mt-0 lg:text-4xl">
            ກ່ຽວກັບພວກເຮົາ
          </h1>
          <h2 class="text-xl font-bold lg:text-2xl">
            ບໍລິສັດ ເຣດດີ້ ທູ ຄອນເນັກ ລາວ ຈຳກັດ
          </h2>
          <p class="lg:text-xl">
            ໄດ້ມີການຮ່ວມມືກັບ ບໍລິສັດ ລາວເພ້ ວຽງຈັນ ຈຳກັດຜູ້ດຽວ ແລະ
            ທະນາຄານຮ່ວມພັດທະນາ (JDB) ເພື່ອນຳສະເໜີ ແອັບພິເຄຊັ້ນ
            ກະເປົາເງິນເອເລັກໂຕນິກບົນມືຖື ແລະ ບລິການການຊຳລະອອນລາຍທົ່ວປະເທດໃນນາມ:
            “ລາວເພ້” ແລະ ຕາມການນຳຂອງ ຟິນເທັກ (FinTech)
            ໃນລາວເພື່ອມຸ້ງໄປສູ່ທົ່ວໂລກດ້ວຍມາດຕະຖານສາກົນ.
          </p>
        </div>
        <div class="mt-8">
          <LinkButton to="/about-us">Read Me</LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>
