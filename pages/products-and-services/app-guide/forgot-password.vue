<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">ລືມລະຫັດຜ່ານ</h1>
    <div class="flex flex-nowrap overflow-x-auto py-8">
      <div
        v-for="(guide, index) in forgotPasswordGuide"
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
      forgotPasswordGuide: [
        {
          image: '/welcome-page.jpg',
          description: 'ເລືອກປຸ່ມ “ເຂົ້າສູ່ລະບົບ (Log in)”',
        },
        {
          image: '/forgot-password/forgot-password-step-2.jpg',
          description: 'ກົດເລືອກປຸ່ມ “ລືມລະຫັດຜ່ານ? (Forgot Password?)',
        },
        {
          image: '/forgot-password/forgot-password-step-3.jpg',
          description: 'ໃສ່ເບີໂທລະສັບ (Mobile  Number)',
        },
        {
          image: '/forgot-password/forgot-password-step-4.jpg',
          description:
            'ລະຫັດຢືນຢັນຕົວຕົນ (One Time Password: OTP) ຈະຖືກສົ່ງໄປທີ່ເບີໂທລະສັບຂອງຜູ້ໃຊ້ບໍລິການທີ່ໄດ້ຂຽນໄວ້',
        },
        {
          image: '/forgot-password/forgot-password-step-5.jpg',
          description: 'ຫ້ຜູ້ໃຊ້ບໍລິການໃສ່ໂຕເລກດັ່ງກ່າວລົງໃນຊ່ອງທີ່ກໍານົດ',
        },
        {
          image: '/forgot-password/forgot-password-step-6.jpg',
          description: 'ຕັ້ງລະຫັດຜ່ານໃໝ່ ໃນປ່ອງລະຫັດຜ່ານ (Password)',
        },
        {
          image: '/forgot-password/forgot-password-step-7.jpg',
          description: 'ຢືນຢັນ ລະຫັດຜ່ານອີກຄັ້ງ',
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
