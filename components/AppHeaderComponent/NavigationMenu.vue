<template>
  <nav>
    <ul class="hidden space-x-8 text-sm md:flex">
      <NuxtLink
        v-for="menu in menuList"
        :key="menu.routePath"
        v-slot="{ isActive, navigate, href }"
        :to="menu.routePath"
        custom
      >
        <li>
          <a
            :href="href"
            class="flex h-24 items-center justify-center border-y-[6px] border-transparent md:flex-col md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4"
            :class="[isActive ? activeClass : inActiveClass]"
            @click="navigate"
          >
            <span>
              <conponent :is="menu.icon" class="h-6 w-6"></conponent>
            </span>
            <span>{{ menu.routeName }} </span>
          </a>
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'border-b-primary-red text-primary-red ',
      inActiveClass: 'hover:border-b-primary-blue hover:text-primary-blue',
      menuList: [
        {
          routePath: '/about-us',
          routeName: 'ກ່ຽວກັບພວກເຮົາ',
          icon: 'IconAboutUs',
        },
        {
          routePath: '/products-and-services',
          routeName: 'ຜະລິດຕະພັນ ແລະ ບໍລິການ',
          icon: 'IconProductAndService',
        },
        {
          routePath: '/investor-relation',
          routeName: 'ກ່ຽວກັບການລົງທຶນ',
          icon: 'IconInvestorRelation',
        },
        {
          routePath: '/contact-us',
          routeName: 'ຕິດຕໍ່ພວກເຮົາ',
          icon: 'IconContactUs',
        },
      ],
    }
  },
  watch: {
    $route() {
      if (this.$route.path === '/products-and-services')
        this.$router.replace('/products-and-services/highlight-features')
    },
  },
  mounted() {
    if (this.$route.path === '/products-and-services')
      this.$router.replace('/products-and-services/highlight-features')
  },
}
</script>
