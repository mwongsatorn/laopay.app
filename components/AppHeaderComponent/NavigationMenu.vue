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
        class="flex h-24 cursor-pointer items-center border-b-4"
        :class="[
          isActive
            ? 'border-primary-red '
            : 'border-transparent hover:border-primary-blue',
        ]"
        @click="navigate"
      >
        <span :class="[isActive ? 'text-primary-red' : '']"
          >{{ menu.routeName }}
        </span>
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
