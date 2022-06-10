<template>
  <div class="h-screen min-h-[45rem] snap-y snap-mandatory overflow-y-scroll">
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
  head() {
    return {
      bodyAttrs: {
        class: [''],
      },
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
      // eslint-disable-next-line no-console
      console.log(this.bannerSuffix)
      if (window.innerWidth >= 768) this.bannerSuffix = 'desktop'
      else this.bannerSuffix = 'mobile'
    },
  },
}
</script>
