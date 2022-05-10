<template>
  <div id="default-layout">
    <HeaderMenu v-if="$route.path !== '/'"></HeaderMenu>
    <Nuxt></Nuxt>
  </div>
</template>
