<template>
  <transition
    name="dropdown-lang"
    enter-active-class="transition-all duration-300"
    enter-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      class="absolute top-3/4 right-0 w-60 divide-y divide-solid rounded-lg border-2 bg-white text-sm shadow-md"
    >
      <NuxtLink
        :to="switchLocalePath('lo')"
        class="block rounded-lg px-8 py-2 text-center font-noto-sans-lao hover:bg-slate-100"
      >
        ພາສາລາວ
      </NuxtLink>
      <NuxtLink
        :to="switchLocalePath('en')"
        class="block rounded-lg px-8 py-2 text-center font-roboto hover:bg-slate-100"
      >
        English
      </NuxtLink>
    </div>
  </transition>
</template>

<script></script>
