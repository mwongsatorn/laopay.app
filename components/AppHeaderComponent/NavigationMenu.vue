<template>
  <nav class="ml-auto hidden space-x-8 font-noto-sans-lao text-sm md:flex">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        class="flex h-24 cursor-pointer items-center justify-center border-y-[6px] border-transparent md:flex-col md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4"
        :class="[
          isActive
            ? 'border-b-primary-red text-primary-red '
            : 'hover:border-b-primary-blue hover:text-primary-blue',
        ]"
        @click="navigate"
      >
        <span>
          <conponent :is="menu.icon" class="h-6 w-6"></conponent>
        </span>
        <span>{{ menu.routeName }} </span>
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
          routePath: '/products-and-services/highlight-features',
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
