<template>
  <div id="about-us">
    <FullAboutUsSection> </FullAboutUsSection>
    <ShareHoldersList @showBoard="showBoard = true"></ShareHoldersList>
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
