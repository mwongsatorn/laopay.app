<template>
  <nav class="m-4 mt-8 flex flex-col space-y-4 font-noto-sans-lao">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        class="flex cursor-pointer items-center space-x-8 rounded-xl px-2 py-4 font-extrabold"
        :class="[isActive ? 'bg-neutral-900 text-white' : '']"
        @click="navigate"
      >
        <span>
          <component :is="menu.icon" class="h-8 w-8"></component>
        </span>
        <span>{{ menu.routeName }}</span>
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
}
</script>
