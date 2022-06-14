<template>
  <div id="homepage">
    <HeroSection :banner-suffix="bannerSuffix"></HeroSection>
    <AppHeader></AppHeader>
    <QuoteSection :banner-suffix="bannerSuffix"></QuoteSection>
    <ShortAboutUsSection></ShortAboutUsSection>
    <DownloadAppSection :banner-suffix="bannerSuffix"></DownloadAppSection>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      bannerSuffix: 'desktop',
    }
  },
  mounted() {
    this.changeBannerSuffix()
    window.addEventListener('resize', this.changeBannerSuffix)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeBannerSuffix)
  },
  methods: {
    changeBannerSuffix() {
      if (window.innerWidth >= 768) this.bannerSuffix = 'desktop'
      else this.bannerSuffix = 'mobile'
    },
  },
}
</script>
