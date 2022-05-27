<template>
  <nav class="ml-auto hidden space-x-8 font-noto-sans-lao text-sm md:flex">
    <NuxtLink
      v-for="menu in menuList"
      :key="menu.routePath"
      v-slot="{ isActive, isExactActive, navigate }"
      :to="menu.routePath"
      custom
    >
      <div
        v-if="!menu.subRoutes && menu.routePath === '/'"
        class="flex h-24 items-center border-b-4"
        :class="[isExactActive ? 'border-primary-red ' : 'border-transparent ']"
      >
        <span
          class="cursor-pointer"
          :class="[
            isExactActive ? 'text-primary-red' : 'hover:text-slate-600 ',
          ]"
          @click="navigate"
          >{{ menu.routeName }}
        </span>
      </div>

      <div
        v-else
        class="flex h-24 items-center border-b-4"
        :class="[isActive ? 'border-primary-red ' : 'border-transparent ']"
      >
        <span
          class="cursor-pointer"
          :class="[isActive ? 'text-primary-red' : 'hover:text-slate-600 ']"
          @click="navigate"
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
