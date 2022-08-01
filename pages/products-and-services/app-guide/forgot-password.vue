<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
      {{ $t('title') }}
    </h1>
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
          <p class="text-center">{{ $t(guide.description) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "lo": {
    "title": "ລືມລະຫັດຜ່ານ",
    "step1": "ເລືອກປຸ່ມ \"ເຂົ້າສູ່ລະບົບ\" (Log in)",
    "step2": "ກົດເລືອກປຸ່ມ \"ລືມລະຫັດຜ່ານ ?\" (Forgot Password ?)",
    "step3": "ໃສ່ເບີໂທລະສັບ (Mobile  Number)",
    "step4": "ລະຫັດຢືນຢັນຕົວຕົນ (One Time Password: OTP) ຈະຖືກສົ່ງໄປທີ່ເບີໂທລະສັບຂອງຜູ້ໃຊ້ບໍລິການທີ່ໄດ້ຂຽນໄວ້",
    "step5": "ຫ້ຜູ້ໃຊ້ບໍລິການໃສ່ໂຕເລກດັ່ງກ່າວລົງໃນຊ່ອງທີ່ກໍານົດ",
    "step6": "ຕັ້ງລະຫັດຜ່ານໃໝ່ ໃນປ່ອງລະຫັດຜ່ານ (Password)",
    "step7": "ຢືນຢັນ ລະຫັດຜ່ານອີກຄັ້ງ",
    "step8": "ເຂົ້າສູ່ໜ້າຈໍຫລັກຂອງແອັບພິເຄຊັ້ນ LaoPay"
  },
  "en": {
    "title": "Forgot Password",
    "step1": "Click \"Login\" botton",
    "step2": "Click \"Forget Password\" button",
    "step3": "Fill in registered mobile number",
    "step4": "OTP code (One Time Password) will send to registered mobile number",
    "step5": "Input OTP code",
    "step6": "Set new password",
    "step7": "Confirm new password",
    "step8": "Visit LaoPay Homepage"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      forgotPasswordGuide: [
        {
          image: '/welcome-page.jpg',
          description: 'step1',
        },
        {
          image: '/forgot-password/forgot-password-step-2.jpg',
          description: 'step2',
        },
        {
          image: '/forgot-password/forgot-password-step-3.jpg',
          description: 'step3',
        },
        {
          image: '/forgot-password/forgot-password-step-4.jpg',
          description: 'step4',
        },
        {
          image: '/forgot-password/forgot-password-step-5.jpg',
          description: 'step5',
        },
        {
          image: '/forgot-password/forgot-password-step-6.jpg',
          description: 'step6',
        },
        {
          image: '/forgot-password/forgot-password-step-7.jpg',
          description: 'step7',
        },
        {
          image: '/homepage.jpg',
          description: 'step8',
        },
      ],
    }
  },
}
</script>
