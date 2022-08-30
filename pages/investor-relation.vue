<template>
  <div id="investor-relation">
    <ShortInvestmentProfile
      @showFullPage="showFullPage = true"
    ></ShortInvestmentProfile>
    <FullInvestmentProfile
      v-show="showFullPage"
      @closeFullPage="showFullPage = false"
    ></FullInvestmentProfile>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFullPage: null,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: [this.bodyClass],
      },
    }
  },
  computed: {
    bodyClass() {
      return this.showFullPage ? 'overflow-hidden' : ''
    },
  },
}
</script>
