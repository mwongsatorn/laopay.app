<template>
  <nav class="flex flex-col divide-y-2 font-noto-sans-lao text-sm">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        v-if="!menu.subRoutes"
        class="flex w-full cursor-pointer items-center justify-center py-6"
        :class="[isActive ? 'bg-primary-red' : 'hover:bg-blue-900']"
        @click="navigate"
      >
        <span>{{ menu.routeName }}</span>
      </div>

      <div
        v-else
        class="flex w-full items-center justify-center py-6 hover:bg-slate-100"
        @click="menu.showSubRoutes = !menu.showSubRoutes"
      >
        <div>
          <div class="flex w-full items-center justify-between">
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
          routePath: '/about-us',
          routeName: 'ກ່ຽວກັບພວກເຮົາ',
        },
        {
          routePath: '/product-and-service',
          routeName: 'ຜະລິດຕະພັນ ແລະ ບໍລິການ',
        },
        {
          routePath: '/investor-relation',
          routeName: 'ກ່ຽວກັບການລົງທຶນ',
        },
        {
          routePath: '/contact-us',
          routeName: 'ຕິດຕໍ່ພວກເຮົາ',
        },
      ],
    }
  },
}
</script>
