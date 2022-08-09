<template>
  <div
    id="share-holders-board"
    class="hide-scrollbar fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-sm"
  >
    <div class="absolute top-4 right-4">
      <button @click="$emit('closeBoard')">
        <IconCross class="h-8 w-8 text-white"></IconCross>
      </button>
    </div>

    <div
      class="flex h-screen min-h-[640px] items-center justify-center"
      @click.self="$emit('closeBoard')"
    >
      <img
        class="w-[90%] rounded-2xl sm:w-4/5 lg:w-1/2"
        src="~/assets/images/about-us/share-holders-board-lg.jpg"
        alt=""
      />
    </div>
  </div>
</template>
