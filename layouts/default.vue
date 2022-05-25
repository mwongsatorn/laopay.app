<template>
  <div id="default-layout" class="">
    <AppHeader v-if="$route.path !== '/'"></AppHeader>
    <Nuxt></Nuxt>
  </div>
</template>
