<template>
  <div>
    <div
      class="relative flex h-[640px] flex-col bg-primary-blue py-12 text-white"
    >
      <div class="relative mx-auto max-w-xl space-y-6 px-6">
        <p class="text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          {{ $t('first_section.title') }}
        </p>
        <p class="text-center text-lg sm:text-xl lg:text-2xl">
          {{ $t('first_section.description') }}
        </p>
      </div>

      <div class="relative my-auto flex w-full justify-center px-4">
        <div class="absolute h-full w-full max-w-lg">
          <div
            class="custom-blur absolute top-8 left-0 h-52 w-52 animate-blob rounded-full bg-amber-600 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
          />
          <div
            class="animation-delay-2000 custom-blur absolute top-8 right-0 h-52 w-52 animate-blob rounded-full bg-purple-600 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
          />
          <div
            class="animation-delay-4000 custom-blur absolute -bottom-8 left-20 h-52 w-52 animate-blob rounded-full bg-primary-red sm:h-60 sm:w-60 lg:h-72 lg:w-72"
          />
        </div>
        <div class="relative">
          <img
            src="~/assets/images/products-and-services/highlight-features/app-showcase.png"
            alt=""
            class="max-h-[320px]"
          />
        </div>
      </div>
    </div>

    <div class="px-6 py-12">
      <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
        {{ $t('laopay_features.title') }}
      </h1>
      <div class="flex flex-wrap gap-8 pt-8">
        <div
          class="flex max-w-fit flex-[1_0_320px] flex-col justify-around space-y-8 sm:max-w-full"
        >
          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconQRPayment></IconQRPayment>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{
                $t('laopay_features.qr_payment.title')
              }}</span>
              <p>{{ $t('laopay_features.qr_payment.description') }}</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconWalletTopUp></IconWalletTopUp>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{
                $t('laopay_features.wallet_topup.title')
              }}</span>
              <p>
                {{ $t('laopay_features.wallet_topup.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconInternationalRemittance></IconInternationalRemittance>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold"
                >{{ $t('laopay_features.international_remittance.title') }}
              </span>
              <p>
                {{ $t('laopay_features.international_remittance.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconMobileTopUp></IconMobileTopUp>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold"
                >{{ $t('laopay_features.mobile_topup.title') }}
              </span>
              <p>{{ $t('laopay_features.mobile_topup.description') }}</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconTicket></IconTicket>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold"
                >{{ $t('laopay_features.travel.title') }}
              </span>
              <p>
                {{ $t('laopay_features.travel.description') }}
              </p>
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
              <span class="text-xl font-bold">{{
                $t('laopay_features.pay_bill.title')
              }}</span>
              <p>{{ $t('laopay_features.pay_bill.title') }}</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconVirtualShoppingCard></IconVirtualShoppingCard>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{
                $t('laopay_features.virtual_shopping_card.title')
              }}</span>
              <p>
                {{ $t('laopay_features.virtual_shopping_card.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconInAppShopping></IconInAppShopping>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{
                $t('laopay_features.inapp_shopping.title')
              }}</span>
              <p>{{ $t('laopay_features.inapp_shopping.description') }}</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconPromotionAndReward></IconPromotionAndReward>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{
                $t('laopay_features.promotion_and_reward.title')
              }}</span>
              <p>
                {{ $t('laopay_features.promotion_and_reward.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="shrink-0">
              <IconDelivery></IconDelivery>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{
                $t('laopay_features.delivery.title')
              }}</span>
              <p>
                {{ $t('laopay_features.delivery.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 px-6 py-12">
      <h1 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
        1 Click 2 Connect ™
      </h1>
      <h2 class="pt-4 text-center text-lg sm:text-xl lg:text-2xl">
        {{ $t('one_click_to_connect.header') }}
      </h2>
      <div class="flex flex-wrap justify-around gap-8 pt-8">
        <div class="flex max-w-fit flex-[1_0_320px] flex-col space-y-4">
          <div class="flex space-x-4">
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-blue font-bold text-white"
            >
              1
            </span>
            <p class="text-center">
              {{ $t('one_click_to_connect.step_1') }}
            </p>
          </div>
          <div class="self-center">
            <img
              class="max-h-[400px]"
              src="~/assets/images/products-and-services/highlight-features/step1_connect-wifi.png"
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
            <p class="text-center">
              {{ $t('one_click_to_connect.step_2') }}
            </p>
          </div>
          <div class="self-center">
            <img
              class="max-h-[400px]"
              src="~/assets/images/products-and-services/highlight-features/step2_connect-wifi.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
   "lo":{
      "first_section":{
         "title":"ຄຸນສົມບັດຂອງລາວເພ້",
         "description":"ແອັບພິເຄຊັ້ນທີ່ຕອບສະຫນອງທຸກການ ໃຊ້ຈ່າຍ ໂອນເງິນ ຈ່າຍບິນ ຕື່ມເງິນມືຖື ເຂົ້າກັບວິຖີຊີວິດຂອງຜູ້ໃຊ້ງານໃນຍຸກປັດຈຸບັນ"
      },
      "laopay_features":{
         "title":"ຄຸນສົມບັດ ລາວເພ້",
         "qr_payment":{
            "title":"ຄິວອາ",
            "description":"ສະແກນເພື່ອຮັບ ແລະ ສະແກນເພື່ອຈ່າຍເງິນ"
         },
         "wallet_topup":{
            "title":"ຕື່ມເງິນເຂົ້າກະເປົາເງິນ",
            "description":"ຕື່ມເງິນຜ່ານບັນຊີທະນາຄານ, ຕູ້ຕື່ມເງິນ, ແອັບຕົວແທນໂດຍຜ່ານຕົວແທນລາວເພ້"
         },
         "international_remittance":{
            "title":"ການໂອນເງິນລະຫວ່າງປະເທດ ",
            "description":"ສາມາດໂອນໄດ້ທັງພາຍໃນປະເທດ ແລະ ຕ່າງປະເທດໄດ້ທຸກທີ່ທົ່ວໂລກ ຫຼາຍກວ່າ 150 ປະເທດ ຜ່ານທະນາຄານທີ່ເປັນພັນທະມິດ"
         },
         "mobile_topup":{
            "title":"ຕື່ມເງິນມືຖື",
            "description":"ຕື່ມເງິນມືຖືອອນລາຍ"
         },
         "pay_bill":{
            "title":"ຈ່າຍບິນ",
            "description":"ຈຄ່ານຳ້, ຄ່າໄຟ, ອິນເຕີເນັດ ແລະ ອື່ນໆ"
         },
         "virtual_shopping_card":{
            "title":"ບັດຊ໊ອບປິ້ງສະເໜືອນ",
            "description":"ເພື່ອທຳການຊື້-ຂາຍ ສິນຄ້າ ແລະ ບໍລິການອອນລາຍອື່ນໆທົ່ວໂລກ"
         },
         "inapp_shopping":{
            "title":"ແອັບຊ໊ອບປິ້ງ",
            "description":"ແພັດຟອມຊື້ຂາຍອອນລາຍທີ່ຄົບຈົບໃນແອັບດຽວ"
         },
         "promotion_and_reward":{
            "title":"ໂປຣໂມຊັ້ນ & ຂອງລາງວັນ",
            "description":"ຮັບຄະແນນເພື່ອຮັບສ່ວນຫຼຸດ ຫຼື ແລກຂອງລາງວັນຈາກຮ້ານຄ້າທີ່ມີສ່ວນຮ່ວມ"
         },
         "travel":{
            "title":"ຊື້ປີ້",
            "description":"ຊຳລະຄ່າປີ້ ເຊັ່ນ: ປີ້ລົດໄຟ, ປີ້ຍົນ ຫຼື ຂົນສົ່ງສາທາລະນະອື່ນໆ ບໍ່ຕ້ອງເສຍເວລາໄປເຂົ້າຄິວຍາວເພື່ອຊື້ປີ້"
         },
         "delivery":{
            "title":"ເດລິເວີ່ລີ້",
            "description":"ເຊື່ອມລາວເພ້ ກັບ ແອັບພິເຄຊັ້ນສົ່ງອາຫານ ເຊັ່ນ: Food Panda ເພື່ອເພີ່ມຄວາມສະດວກໃນການຈ່າຍເງິນ ຊຳລະຄ່າອາຫານໄດ້ທັນທີທີ່ສັ່ງ"
         }
      },
      "one_click_to_connect":{
         "header":"2 ຂັ້ນຕອນງ່າຍໆໃນການເຊື່ອມຕໍ່ ຟຣີ ວາຍຟາຍ ໃນແອັບ ລາວເພ້",
         "step_1":"ເປີດແອັບ \"ລາວເພ້\" ແລະ ກົດປຸ່ມ \"ຟຣີ ວາຍຟາຍ\"",
         "step_2":"ເບິ່ງໂຄສະນາ 7-15 ວິນາທີ ຟຣີ ວາຍຟາຍ ເຊື່ອມຕໍ່ສຳເລັດ"
      }
   },
   "en":{
      "first_section":{
         "title":"LaoPay Features",
         "description":"E-Wallet application for all spending e.g. Transfer, Pay Bill, Mobile Top Up Matching with people lifestyle nowadays"
      },
      "laopay_features":{
         "title":"LaoPay Features",
         "qr_payment":{
            "title":"QR Payment",
            "description":"Scan for receiving money or making payment."
         },
         "wallet_topup":{
            "title":"Wallet Top-Up",
            "description":"Top-up thru bank account, kiosk, Agent app by LaoPay agent."
         },
         "international_remittance":{
            "title":"International Remittance",
            "description":"Transfer anywhere globally with over 150 currencies via partner banks."
         },
         "mobile_topup":{
            "title":"Mobile Top-Up",
            "description":"Online mobile top-up."
         },
         "pay_bill":{
            "title":"Pay Bill",
            "description":"Pay utility bills, such as water, electricity, Internet and etc."
         },
         "virtual_shopping_card":{
            "title":"Virtual Shopping Card",
            "description":"For purchasing products and online services worldwide."
         },
         "inapp_shopping":{
            "title":"In-App Shopping",
            "description":"To put shopping online platform in one application."
         },
         "promotion_and_reward":{
            "title":"Promotion & Reward",
            "description":"For every transaction, users will receive point for getting a discounts or rewards from participating stores."
         },
         "travel":{
            "title":"Travel",
            "description":"Convenient option for purchasing travel tickets, such as train, plane, or other public transports."
         },
         "delivery":{
            "title":"Delivery",
            "description":"Connect LaoPay account with food delivery application (i.e. Food Panda) to pay for services immediately."
         }
      },
      "one_click_to_connect":{
         "header":"2 EASY STEPS TO CONNECT FREE WI-FI BY USING LAOPAY APPLICATION",
         "step_1":"Open \"LaoPay\" Application and click \"Free Wi-Fi\" button",
         "step_2":"Watch 7-15 seconds ads and Free Wi-Fi is connected"
      }
   }
}
</i18n>

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
