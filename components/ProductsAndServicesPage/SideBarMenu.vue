<template>
  <div
    class="fixed top-20 bottom-0 z-10 whitespace-nowrap bg-white transition-all duration-300 md:top-24"
    :class="[showSideBar ? 'w-[280px]' : 'w-0']"
  >
    <div class="h-full overflow-y-auto">
      <nav class="flex flex-col px-4 py-4">
        <ul>
          <NuxtLink
            v-for="menu in menuList"
            :key="menu.routePath"
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="menu.routePath"
            custom
          >
            <li v-if="!menu.subMenu" @click="$emit('onClickMenu')">
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
                  <li @click="$emit('onClickMenu')">
                    <a
                      class="block border-l-[3px] py-1.5 pl-4"
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

    <button
      class="absolute top-1/2 left-full flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-r-3xl bg-white"
      @click="$emit('toggleSideBar')"
    >
      <IconArrowCollapse
        :class="[showSideBar ? 'rotate-180' : '']"
        class="h-5 w-5"
      >
      </IconArrowCollapse>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    showSideBar: {
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
          routePath: '/products-and-services/app-guide',
          routeName: 'ວິທີການໃຊ້ງານ',
          subMenu: [
            {
              routePath: '/products-and-services/app-guide/sign-up',
              routeName: 'ລົງທະບຽນ',
            },
            {
              routePath: '/products-and-services/app-guide/log-in',
              routeName: 'ເຂົ້າສູ່ລະບົບ',
            },
            {
              routePath: '/products-and-services/app-guide/forgot-password',
              routeName: 'ລືມລະຫັດຜ່ານ',
            },
            {
              routePath: '/products-and-services/app-guide/pay',
              routeName: 'ຈ່າຍ',
            },
            {
              routePath: '/products-and-services/app-guide/collect',
              routeName: 'ຮັບເງິນ',
            },
            {
              routePath: '/products-and-services/app-guide/wallet-top-up',
              routeName: 'ການຕື່ມເງິນເຂົ້າກະເປົາເງິນ',
            },
          ],
        },
      ],
    }
  },
}
</script>
