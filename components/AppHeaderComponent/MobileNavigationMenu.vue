<template>
  <nav>
    <ul class="m-4 mt-8 flex flex-col space-y-4">
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
            class="flex cursor-pointer items-center space-x-8 rounded-xl px-2 py-4 font-extrabold"
            :class="[isActive ? activeClass : '']"
            @click="navigate"
          >
            <span>
              <component :is="menu.icon" class="h-8 w-8"></component>
            </span>
            <span>{{ menu.routeName }}</span>
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
      activeClass: 'bg-neutral-900 text-white',
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
