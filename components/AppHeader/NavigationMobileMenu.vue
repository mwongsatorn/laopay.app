<template>
  <nav class="flex flex-col px-2 pt-12">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, isExactActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        v-if="!menu.subRoutes && menu.routePath === '/'"
        class="flex w-full items-center rounded-lg py-4 px-2 hover:bg-slate-100"
        @click="navigate"
      >
        <span
          class="cursor-pointer"
          :class="[isExactActive ? 'text-primary-red' : '']"
          >{{ menu.routeName }}</span
        >
      </div>

      <div
        v-else-if="!menu.subRoutes"
        class="flex w-full items-center rounded-lg py-4 px-2 hover:bg-slate-100"
        @click="navigate"
      >
        <span
          class="cursor-pointer"
          :class="[isActive ? 'text-primary-red' : '']"
          >{{ menu.routeName }}</span
        >
      </div>

      <div
        v-else
        class="flex w-full items-center rounded-lg py-4 px-2 hover:bg-slate-100"
        @click="menu.showSubRoutes = !menu.showSubRoutes"
      >
        <div>
          <div
            class="flex w-full items-center justify-between"
            :class="[isActive ? 'text-primary-red' : '']"
          >
            <span class="cursor-default">{{ menu.routeName }} </span>
            <span>
              <IconDropDownArrow class="h-6 w-6"></IconDropDownArrow>
            </span>
          </div>

          <DropDownMobileMenu
            v-show="menu.showSubRoutes"
            :sub-menu="menu.subRoutes"
          />
        </div>
      </div>
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>
