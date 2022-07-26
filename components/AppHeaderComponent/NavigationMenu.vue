<template>
  <nav class="hidden md:block">
    <ul class="flex space-x-8 md:text-sm lg:text-base">
      <NuxtLink
        v-for="menu in menuList"
        :key="menu.routePath"
        v-slot="{ isActive, navigate, href }"
        :to="localePath(menu.routePath)"
        custom
      >
        <li>
          <a
            :href="href"
            class="flex h-20 items-center justify-center border-y-[4px] border-transparent md:flex-col md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4"
            :class="[isActive ? activeClass : inActiveClass]"
            @click="navigate"
          >
            <span>
              <conponent
                :is="menu.icon"
                class="h-5 w-5 lg:h-6 lg:w-6"
              ></conponent>
            </span>
            <span>{{ menu.routeName }} </span>
          </a>
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<i18n>
{
  "lo": {
    "menu": {
      "aboutUs": "ກ່ຽວກັບພວກເຮົາ",
      "productsAndServices": "ຜະລິດຕະພັນ ແລະ ບໍລິການ",
      "investorRelation": "ກ່ຽວກັບການລົງທຶນ",
      "contactUs": "ຕິດຕໍ່ພວກເຮົາ"
    }
  },
  "en": {
    "menu": {
      "aboutUs": "about us",
      "productsAndServices": "products and services",
      "investorRelation": "investor relation",
      "contactUs": "contact us"
    }
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      activeClass: 'border-b-primary-red text-primary-red',
      inActiveClass: 'hover:border-b-primary-blue hover:text-primary-blue',
    }
  },
  computed: {
    menuList() {
      return [
        {
          routePath: '/about-us',
          routeName: this.$t('menu.aboutUs'),
          icon: 'IconAboutUs',
        },
        {
          routePath: '/products-and-services',
          routeName: this.$t('menu.productsAndServices'),
          icon: 'IconProductAndService',
        },
        {
          routePath: '/investor-relation',
          routeName: this.$t('menu.investorRelation'),
          icon: 'IconInvestorRelation',
        },
        {
          routePath: '/contact-us',
          routeName: this.$t('menu.contactUs'),
          icon: 'IconContactUs',
        },
      ]
    },
  },
}
</script>
