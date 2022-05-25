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
      class="absolute top-full right-0 z-50 divide-y divide-solid rounded-lg border-2 bg-white shadow-md"
      @mouseover="$emit('showLanguageList')"
      @mouseleave="$emit('hideLanguageList')"
    >
      <div
        class="cursor-pointer rounded-lg px-8 py-2 text-center hover:bg-slate-100"
      >
        <span>Lao</span>
      </div>
      <div
        class="cursor-pointer rounded-lg px-8 py-2 text-center hover:bg-slate-100"
      >
        <span>Thai</span>
      </div>
      <div
        class="cursor-pointer rounded-lg px-8 py-2 text-center hover:bg-slate-100"
      >
        <span>English</span>
      </div>
    </div>
  </transition>
</template>

<script></script>
