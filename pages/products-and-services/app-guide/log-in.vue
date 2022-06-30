<template>
  <div class="bg-primary-blue py-12 px-4 text-white sm:px-8 lg:px-12">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">ເຂົ້າສູ່ລະບົບ</h1>
    <div class="flex flex-nowrap overflow-x-auto py-8">
      <div
        v-for="(guide, index) in logInGuide"
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
      logInGuide: [
        {
          image: '/welcome-page.jpg',
          description: 'ກົດປຸ່ມ “ເຂົ້າສູ່ລະບົບ (Log in)',
        },
        {
          image: '/log-in/login-step-2.jpg',
          description:
            'ໃສ່ເບີໂທລະສັບໃນຊ່ອງຊື່ຜູ້ໃຊ້ (Usename) ແລະ ລະຫັດຜ່ານ (Passsword)',
        },
        {
          image: '/homepage.jpg',
          description: 'ເຂົ້າສູ່ໜ້າຈໍຫລັກຂອງແອັບພິເຄຊັ້ນ LaoPay ',
        },
      ],
    }
  },
}
</script>
