<template>
  <nav class="ml-auto hidden space-x-8 lg:flex">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        v-if="!menu.subRoutes"
        class="relative flex h-24 items-center border-b-4"
        :class="[isActive ? 'border-primary-red ' : 'border-transparent ']"
      >
        <span
          class="cursor-pointer"
          :class="[isActive ? 'text-primary-red' : 'hover:text-slate-600 ']"
          @click="navigate"
          >{{ menu.routeName }}
        </span>
      </div>

      <div
        v-else
        class="relative flex h-24 items-center border-b-4"
        :class="[isActive ? 'border-primary-red ' : 'border-transparent ']"
      >
        <div
          class="flex items-center py-4"
          :class="[isActive ? 'text-primary-red' : '']"
          @mouseover="menu.showSubRoutes = true"
          @mouseleave="menu.showSubRoutes = false"
        >
          <span class="cursor-default">{{ menu.routeName }} </span>
          <span>
            <IconDropDownArrow class="h-6 w-6"></IconDropDownArrow>
          </span>
        </div>

        <DropDownMenu
          v-show="menu.showSubRoutes"
          :sub-menu="menu.subRoutes"
          @showSubRoutes="menu.showSubRoutes = true"
          @hideSubRoutes="menu.showSubRoutes = false"
        />
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
