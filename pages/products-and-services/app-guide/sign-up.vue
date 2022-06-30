<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">ລົງທະບຽນ</h1>
    <div class="flex flex-nowrap overflow-x-auto py-8">
      <div
        v-for="(guide, index) in signUpGuide"
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
          <p class="text-center">{{ guide.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signUpGuide: [
        {
          image: '/welcome-page.jpg',
          description: 'ກົດປຸ່ມ “ລົງທະບຽນ (Sign up)” ',
        },
        {
          image: '/sign-up/signup-step-2.jpg',
          description: 'ໃສ່ເບີໂທລະສັບຂອງຜູ້ໃຊ້ບໍລິການ ກົດປຸ່ມ “ຖັດໄປ (Next)” ',
        },
        {
          image: '/sign-up/signup-step-3.jpg',
          description:
            'ລະຫັດຢືນຢັນຕົວຕົນ (One Time Password: OTP) ຈະຖືກສົ່ງໄປທີ່ເບີໂທລະສັບຂອງຜູ້ໃຊ້ບໍລິການທີ່ໄດ້ຂຽນໄວ້',
        },
        {
          image: '/sign-up/signup-step-4.jpg',
          description: 'ໃຫ້ຜູ້ໃຊ້ບໍລິການໃສ່ໂຕເລກດັ່ງກ່າວລົງໃນຊ່ອງທີ່ກໍານົດ',
        },
        {
          image: '/sign-up/signup-step-5.jpg',
          description:
            'ຜູ້ໃຊ້ບໍລິການສາມາດກົດປຸ່ມ “Privacy policy” ໃນໜ້ານີ້ເພື່ອຮັບຊາບເງື່ອນໄຂດັ່ງກ່າວໄດ້ ກ່ອນກົດປຸ່ມ “Register” ເພື່ອດໍາເນີນການລົງທະບຽນຕໍ່ໄປ',
        },
        {
          image: '/sign-up/signup-step-6.jpg',
          description:
            'ເຂົ້າສູ່ຂັ້ນຕອນການຕັ້ງລະຫັດຜ່ານ (Password) ແລະ ລະຫັດຜ່ານເພື່ອການຢືນຢັນການເຮັດທຸລະກໍາ (Payment PIN) ',
        },
        {
          image: '/sign-up/signup-step-7.jpg',
          description:
            'ຜູ້ໃຊ້ບໍລິການສາມາດເພີ່ມບັນຊີທະນາຄານ ຫລື ເພີ່ມບັດເຄຣດິດລົງໃນບັນຊີ LaoPay ຂອງຜູ້ໃຊ້ບໍລິການ ຫຼື ບໍ່ກໍ່ໄດ້, ຖ້າ “ບໍ່” ໃຫ້ຜູ້ໃຊ້ບໍລິການກົດປຸ່ມ “Skip to Main Page” ເພື່ອສໍາເລັດການລົງທະບຽນ ',
        },
        {
          image: '/homepage.jpg',
          description: 'ເຂົ້າສູ່ໜ້າຈໍຫລັກຂອງແອັບພິເຄຊັ້ນ LaoPay',
        },
      ],
    }
  },
}
</script>
