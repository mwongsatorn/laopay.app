<template>
  <div class="flex min-h-screen bg-stone-400">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 place-content-center gap-x-8 px-6 py-20 md:grid-cols-9"
    >
      <div class="md:col-span-5">
        <img
          class="max-h-full rounded-xl shadow-2xl shadow-stone-700"
          src="~/assets/images/office.jpg"
          alt=""
        />
      </div>
      <div
        class="flex h-full flex-col justify-between font-noto-sans-lao md:col-span-4"
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
          <NuxtLink v-slot="{ navigate }" to="/about-us" custom class="">
            <button
              class="ease focus:shadow-outline rounded-md border border-gray-200 bg-gray-200 px-4 py-2 text-gray-700 transition duration-500 hover:bg-gray-300"
              @click="navigate"
            >
              <span class="font-roboto font-bold uppercase">Read More</span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
