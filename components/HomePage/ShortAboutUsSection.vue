<template>
  <div id="short-about-us-section" class="h-screen min-h-[45rem] bg-stone-400">
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
      <div class="flex flex-col justify-between md:col-span-4">
        <div class="space-y-4">
          <h1 class="mt-8 text-2xl font-bold md:mt-0 lg:text-4xl">
            ກ່ຽວກັບພວກເຮົາ
          </h1>
          <h2 class="text-xl font-bold lg:text-2xl">
            LaoPay Vientiane Sole Co., Ltd.
          </h2>
          <p class="lg:text-xl">
            ບໍລິສັດ ລາວເພ້ ວຽງຈັນ ຈຳກັດຜູ້ດຽວ ກໍ່ຕັ້ງຂຶ້ນໃນປີ 2019
            ໂດຍເກີດຈາກຄວາມຮ່ວມມືກັນລະຫວ່າງ ບໍລິສັດ ເຣດດີ້ ທູ ຄອນເນັກ (ລາວ) ຈຳກັດ
            ແລະ ບໍລິສັດ ເອກະໄຊໂຊກ ອະສັງຫາລິມະສັບ ຈຳກັດຜູ້ດຽວ ດຳເນີນທຸລະກິດ
            ອີວໍເລັດ ພັດທະນາແອັບພິເຄຊັ້ນໂດຍໃຊ້ຊື່ວ່າ: ລາເພ້ (LaoPay) ແລະ
            ເປັນຜູ້ໃຫ້ບໍລິການ ອອນລາຍເພເມັ້ນ
          </p>
        </div>
        <div class="mt-8">
          <LinkButton to="/about-us">Read Me</LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>
