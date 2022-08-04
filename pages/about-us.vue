<template>
  <div id="about-us">
    <FullAboutUsSection @showBoard="showBoard = true"> </FullAboutUsSection>
    <ShareHoldersBoard v-show="showBoard" @closeBoard="showBoard = false">
    </ShareHoldersBoard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBoard: false,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: [this.overflowClass],
      },
    }
  },
  computed: {
    overflowClass() {
      return this.showBoard === true ? 'overflow-hidden' : ''
    },
  },
}
</script>
