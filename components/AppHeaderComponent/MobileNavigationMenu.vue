<template>
  <nav>
    <ul class="m-4 mt-8 flex flex-col space-y-4">
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
            class="flex cursor-pointer items-center space-x-8 rounded-xl px-2 py-4 font-extrabold"
            :class="[isActive ? activeClass : '']"
            @click="navigate"
          >
            <span>
              <component :is="menu.icon" class="h-8 w-8"></component>
            </span>
            <span>{{ menu.routeName }}</span>
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
      activeClass: 'bg-neutral-900 text-white',
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
