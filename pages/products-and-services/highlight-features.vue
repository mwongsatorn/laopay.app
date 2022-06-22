<template>
  <div>
    <div
      :style="{
        'background-image': `url(${require('~/assets/images/products-and-services/banner-4-' +
          bannerSuffix +
          '.jpg')})`,
      }"
      class="-mt-20 h-screen min-h-[45rem] bg-cover bg-center md:-mt-24"
    >
      <div
        class="relative top-1/3 -translate-y-1/2 space-y-6 px-6 font-noto-sans-lao md:top-1/2 md:px-8 md:pt-0"
      >
        <p
          class="text-center text-3xl font-extrabold md:pr-8 md:text-right lg:text-5xl"
        >
          ຄຸນສົມບັດ ຂອງລາວເພ້
        </p>
        <p class="text-center text-xl md:pr-8 md:text-right lg:text-3xl">
          ແອັບພິເຄຊັ້ນທີ່ຕອບສະຫນອງທຸກການ <br />
          ໃຊ້ຈ່າຍ ໂອນເງິນ ຈ່າຍບິນ ຕື່ມເງິນມືຖື <br />
          ເຂົ້າກັບວິຖີຊີວິດຂອງຜູ້ໃຊ້ງານໃນຍຸກປັດຈຸບັນ
        </p>
      </div>
    </div>

    <div class="px-4 py-20">
      <h1 class="font-noto-sans-lao text-2xl font-bold sm:text-3xl lg:text-4xl">
        ຄຸນສົມບັດ ລາວເພ້
      </h1>
      <div class="flex flex-wrap gap-8 pt-8 font-noto-sans-lao">
        <div
          class="flex max-w-fit flex-[1_0_320px] flex-col justify-around space-y-8 sm:max-w-full"
        >
          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconQRPayment></IconQRPayment>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ຄິວອາ</span>
              <p>ສະແກນເພື່ອຮັບ ແລະ ສະແກນເພື່ອຈ່າຍເງິນ</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconWalletTopUp></IconWalletTopUp>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ຕື່ມເງິນເຂົ້າກະເປົາເງິນ</span>
              <p>
                ຕື່ມເງິນຜ່ານບັນຊີທະນາຄານ, ຕູ້ຕື່ມເງິນ,
                ແອັບຕົວແທນໂດຍຜ່ານຕົວແທນລາວເພ້
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconInternationalRemittance></IconInternationalRemittance>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ການໂອນເງິນລະຫວ່າງປະເທດ </span>
              <p>
                ສາມາດໂອນໄດ້ທັງພາຍໃນປະເທດ ແລະ ຕ່າງປະເທດໄດ້ທຸກທີ່ທົ່ວໂລກ ຫຼາຍກວ່າ
                150 ປະເທດ ຜ່ານທະນາຄານທີ່ເປັນພັນທະມິດ
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconMobileTopUp></IconMobileTopUp>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ຕື່ມເງິນມືຖື </span>
              <p>ຕື່ມເງິນມືຖືອອນລາຍ</p>
            </div>
          </div>
        </div>

        <div
          class="flex max-w-fit flex-[1_0_320px] flex-col justify-around space-y-8 sm:max-w-full"
        >
          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconPayBill></IconPayBill>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ຈ່າຍບິນ</span>
              <p>ຈ່າຍໃບບິນຕ່າງໆເຊັ່ນ: ຄ່ານຳ້, ຄ່າໄຟ, ອິນເຕີເນັດ ແລະ ອື່ນໆ</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconVirtualShoppingCard></IconVirtualShoppingCard>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ບັດຊ໊ອບປິ້ງສະເໜືອນ</span>
              <p>ເພື່ອທຳການຊື້-ຂາຍ ສິນຄ້າ ແລະ ບໍລິການອອນລາຍອື່ນໆທົ່ວໂລກ</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconInAppShopping></IconInAppShopping>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ຊ໊ອບປິ້ງ </span>
              <p>ແພັດຟອມຊື້ຂາຍອອນລາຍທີ່ຄົບຈົບໃນແອັບດຽວ</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconPromotionAndReward></IconPromotionAndReward>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">ໂປຣໂມຊັ້ນ & ຂອງລາງວັນ </span>
              <p>
                ຮັບຄະແນນເພື່ອຮັບສ່ວນຫຼຸດ ຫຼື ແລກຂອງລາງວັນຈາກຮ້ານຄ້າທີ່ມີສ່ວນຮ່ວມ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 px-4 py-20">
      <h1 class="font-roboto text-2xl font-bold sm:text-3xl lg:text-4xl">
        1 Click 2 Connect ™
      </h1>
      <h2
        class="pt-4 text-center font-noto-sans-lao text-lg sm:text-xl lg:text-2xl"
      >
        2 ຂັ້ນຕອນງ່າຍໆໃນການເຊື່ອມຕໍ່ ຟຣີ ວາຍຟາຍ ໃນແອັບ ລາວເພ້
      </h2>
      <div class="flex flex-wrap justify-around gap-8 pt-8">
        <div class="flex max-w-fit flex-[1_0_320px] flex-col space-y-4">
          <div class="flex space-x-4">
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-blue font-bold text-white"
            >
              1
            </span>
            <p class="text-center font-noto-sans-lao">
              ເປີດແອັບ “ລາວເພ້" ແລະ ກົດປຸ່ມ “ຟຣີ ວາຍຟາຍ"
            </p>
          </div>
          <div class="self-center">
            <img
              class="max-h-[400px]"
              src="~/assets/images/products-and-services/step1_connect-wifi.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex max-w-fit flex-[1_0_320px] flex-col space-y-4">
          <div class="flex space-x-4">
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-blue font-bold text-white"
            >
              2
            </span>
            <p class="text-center font-noto-sans-lao">
              ເບິ່ງໂຄສະນາ 7-15 ວິນາທີ ຟຣີ ວາຍຟາຍ ເຊື່ອມຕໍ່ສຳເລັດ
            </p>
          </div>
          <div class="self-center">
            <img
              class="max-h-[400px]"
              src="~/assets/images/products-and-services/step2_connect-wifi.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerSuffix: 'desktop',
    }
  },
  mounted() {
    this.changeBannerSuffix()
    window.addEventListener('resize', this.changeBannerSuffix)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeBannerSuffix)
  },
  methods: {
    changeBannerSuffix() {
      if (window.innerWidth >= 768) this.bannerSuffix = 'desktop'
      else this.bannerSuffix = 'mobile'
    },
  },
}
</script>
