<template>
  <div class="mx-auto max-w-7xl overflow-hidden">
    <SideBarMenu
      :show-side-bar="showSideBar"
      @toggleSideBar="showSideBar = !showSideBar"
      @onClickMenu="onClickMenu"
    >
    </SideBarMenu>
    <NuxtChild
      class="transition-all duration-300"
      :class="[
        showSideBar ? 'md:ml-[280px] md:w-[calc(100%-280px)]' : 'w-full',
      ]"
    >
    </NuxtChild>
  </div>
</template>

<script>
export default {
  middleware({ app, redirect, route }) {
    if (route.name.includes('products-and-services___')) {
      const currentLocale = app.i18n.locale
      redirect({
        name: `products-and-services-highlight-features___${currentLocale}`,
      })
    }
  },
  scrollToTop: true,
  data() {
    return {
      showSideBar: null,
    }
  },
  mounted() {
    if (window.innerWidth <= 1024) this.showSideBar = false
    else this.showSideBar = true
  },
  methods: {
    onClickMenu() {
      if (window.innerWidth <= 1024) this.showSideBar = false
      else this.showSideBar = true
    },
  },
}
</script>
