<template>
  <header
    class="sticky top-0 left-0 z-10 w-full bg-white font-opensans text-xs font-bold uppercase shadow-md"
  >
    <div class="mx-auto flex h-24 max-w-7xl items-center px-4">
      <div class="">
        <img src="~/assets/images/laopay-logo.png" alt="" class="w-28" />
      </div>

      <nav class="ml-auto">
        <div class="hidden space-x-8 lg:flex">
          <NuxtLink
            v-for="menu in menuList"
            :key="menu.routePath"
            v-slot="{ isActive, isExactActive, navigate }"
            :to="menu.routePath"
            custom
          >
            <div class="relative flex items-center space-x-1">
              <div
                v-if="!menu.subRoutes && menu.routePath === '/'"
                class="flex h-24 items-center border-b-4"
                :class="[
                  isExactActive ? 'border-primary-red ' : 'border-transparent ',
                ]"
                @click="navigate"
              >
                <span
                  class="cursor-pointer"
                  :class="[
                    isExactActive
                      ? 'text-primary-red'
                      : 'hover:text-slate-600 ',
                  ]"
                  >{{ menu.routeName }}</span
                >
              </div>

              <div
                v-else-if="!menu.subRoutes"
                class="flex h-24 items-center border-b-4"
                :class="[
                  isActive ? 'border-primary-red ' : 'border-transparent ',
                ]"
                @click="navigate"
              >
                <span
                  class="cursor-pointer"
                  :class="[
                    isActive ? 'text-primary-red' : 'hover:text-slate-600 ',
                  ]"
                  >{{ menu.routeName }}</span
                >
              </div>

              <div
                v-else
                class="flex h-24 items-center border-b-4"
                :class="[
                  isActive ? 'border-primary-red ' : 'border-transparent ',
                ]"
                @mouseover="menu.showSubRoutes = true"
                @mouseleave="menu.showSubRoutes = false"
              >
                <div
                  class="flex items-center"
                  :class="[
                    isActive ? 'text-primary-red' : 'hover:text-slate-600 ',
                  ]"
                >
                  <span class="cursor-default">{{ menu.routeName }} </span>
                  <span>
                    <IconArrowDropDown class="h-6 w-6"></IconArrowDropDown>
                  </span>
                </div>
                <transition name="dropdown">
                  <DropDownMenu
                    v-show="menu.showSubRoutes"
                    :sub-menu="menu.subRoutes"
                  />
                </transition>
              </div>
            </div>
          </NuxtLink>
        </div>
      </nav>
      <div
        class="relative flex h-24 cursor-pointer items-center"
        @mouseover="showLanguageList = true"
        @mouseleave="showLanguageList = false"
      >
        <IconGlobe class="h-8 w-8 lg:ml-8"></IconGlobe>
        <IconArrowDropDown class="h-6 w-6"></IconArrowDropDown>
        <transition name="dropdown">
          <DropDownLanguage v-show="showLanguageList"></DropDownLanguage>
        </transition>
      </div>
      <div class="ml-4 flex h-24 items-center">
        <IconHamburgerMenu
          class="inline h-8 w-8 cursor-pointer transition-all lg:hidden"
          @click.native="toggleMobileMenu"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: null,
      showLanguageList: null,
      menuList: [
        {
          routePath: '/',
          routeName: 'Home',
        },
        {
          routePath: '/about-app',
          routeName: 'About App',
          subRoutes: [
            {
              routePath: '/about-app/laopay-features',
              routeName: 'Laopay Features',
            },
            {
              routePath: '/about-app/how-to-register-laopay',
              routeName: 'How to Register Laopay',
            },
            {
              routePath: '/about-app/how-to-verify',
              routeName: 'How to Verify',
            },
            {
              routePath: '/about-app/faqs',
              routeName: 'FAQs',
            },
            {
              routePath: '/about-app/transaction-fees',
              routeName: 'Transaction Fees',
            },
          ],
          showSubRoutes: false,
        },
        {
          routePath: '/financial-service',
          routeName: 'Financial Service',
          subRoutes: [
            {
              routePath: '/financial-service/international-remittance',
              routeName: 'Micro Financial',
            },
            {
              routePath: '/financial-service/faqs',
              routeName: 'FAQs',
            },
          ],
          showSubRoutes: false,
        },
        {
          routePath: '/promotion',
          routeName: 'Promotion',
        },
        {
          routePath: '/laopay-shop',
          routeName: 'LaoPay Shop',
          subRoutes: [
            {
              routePath: '/laopay-shop/become-laopay-shop',
              routeName: 'Become LaoPay Shop',
            },
            {
              routePath: '/laopay-shop/our-partnership',
              routeName: 'Our Partnership',
            },
          ],
          showSubRoutes: false,
        },
        {
          routePath: '/about-us',
          routeName: 'About Us',
          subRoutes: [
            {
              routePath: '/about-us/faqs',
              routeName: 'FAQs',
            },
          ],
          showSubRoutes: false,
        },
        {
          routePath: '/contact-us',
          routeName: 'Contact Us',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 1024) {
        this.showMobileMenu = false
      }
    },
    toggleMobileMenu() {},
  },
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: 0.5s ease all;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.dropdown-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
