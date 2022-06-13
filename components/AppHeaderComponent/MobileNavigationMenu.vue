<template>
  <nav class="m-4 flex flex-col font-noto-sans-lao">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        class="flex cursor-pointer items-center justify-center rounded-xl px-2 py-6 font-extrabold"
        :class="[isActive ? 'bg-neutral-900 text-white' : '']"
        @click="navigate"
      >
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
