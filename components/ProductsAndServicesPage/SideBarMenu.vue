<template>
  <div
    class="fixed top-20 bottom-0 z-10 overflow-y-scroll whitespace-nowrap bg-white font-noto-sans-lao transition-all duration-300 md:top-24"
    :class="[showSideBar ? 'w-[300px]' : 'w-0']"
  >
    <div
      class="flex items-center justify-between bg-neutral-900 px-4 py-4 font-bold text-white"
    >
      <span>ເມນູ</span>
      <button @click="$emit('toggleSideBar')">
        <IconArrowCollapse class="h-6 w-6 rotate-180"> </IconArrowCollapse>
      </button>
    </div>

    <nav class="flex flex-col px-4 py-4">
      <ul>
        <NuxtLink
          v-for="menu in menuList"
          :key="menu.routePath"
          v-slot="{ href, navigate, isActive, isExactActive }"
          :to="menu.routePath"
          custom
        >
          <li v-if="!menu.subMenu">
            <a
              class="block py-2"
              :class="[isExactActive ? 'font-bold text-primary-red' : '']"
              :href="href"
              @click="navigate"
              >{{ menu.routeName }}</a
            >
          </li>

          <li v-else class="py-2">
            <span :class="[isActive ? 'font-bold text-primary-red' : '']">
              {{ menu.routeName }}
            </span>
            <ul class="mt-4 text-sm">
              <NuxtLink
                v-for="subMenu in menu.subMenu"
                :key="subMenu.routePath"
                v-slot="{ href, navigate, isExactActive }"
                :to="subMenu.routePath"
                custom
              >
                <li>
                  <a
                    class="block border-l-2 py-1.5 pl-4"
                    :class="[
                      isExactActive
                        ? 'border-primary-red font-bold text-primary-red'
                        : 'hover:border-primary-blue hover:text-primary-blue',
                    ]"
                    :href="href"
                    @click="navigate"
                    >{{ subMenu.routeName }}</a
                  >
                </li>
              </NuxtLink>
            </ul>
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    showSideBar: {
      default: null,
      type: Boolean,
    },
  },
  data() {
    return {
      menuList: [
        {
          routePath: '/products-and-services/highlight-features',
          routeName: 'ບໍລິການຍອດນິຍົມ',
        },
        {
          routePath: '/products-and-services/how-to-use',
          routeName: 'ວິທີການໃຊ້ງານ',
          subMenu: [
            {
              routePath: '/products-and-services/how-to-use/sign-up',
              routeName: 'ລົງທະບຽນ',
            },
            {
              routePath: '/products-and-services/how-to-use/login',
              routeName: 'ເຂົ້າສູ່ລະບົບ',
            },
            {
              routePath: '/products-and-services/how-to-use/forget-password',
              routeName: 'ລືມລະຫັດຜ່ານ',
            },
            {
              routePath: '/products-and-services/how-to-use/pay',
              routeName: 'ຈ່າຍ',
            },
            {
              routePath: '/products-and-services/how-to-use/wallet-top-up',
              routeName: 'ການຕື່ມເງິນເຂົ້າກະເປົາເງິນ',
            },
          ],
        },
      ],
    }
  },
}
</script>
