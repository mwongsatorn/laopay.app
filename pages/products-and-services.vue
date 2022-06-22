<template>
  <div class="mx-auto max-w-7xl overflow-hidden">
    <SideBarMenu
      :show-side-bar="showSideBar"
      @toggleSideBar="toggleSideBar"
      @closeSideBar="showSideBar = false"
    >
    </SideBarMenu>
    <NuxtChild
      class="transition-all duration-300"
      :class="[
        showSideBar ? 'md:ml-[300px] md:w-[calc(100%-300px)]' : 'w-full',
      ]"
    >
    </NuxtChild>
    <button
      :class="[showSideBar ? 'hidden' : '']"
      class="fixed top-24 ml-4 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white shadow-md md:top-28"
      @click="showSideBar = true"
    >
      <IconArrowCollapse class="h-6 w-6"> </IconArrowCollapse>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideBar: true,
    }
  },
  mounted() {
    this.toggleSideBar()
  },
  methods: {
    toggleSideBar() {
      if (window.innerWidth <= 1024) this.showSideBar = false
      else this.showSideBar = true
    },
  },
}
</script>
