<template>
  <NuxtLink
    :to="to"
    class="rounded-md border border-gray-200 bg-gray-200 px-4 py-2 font-bold uppercase transition duration-500 hover:bg-gray-300"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>
