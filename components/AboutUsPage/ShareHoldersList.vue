<template>
  <div id="share-holders-member" class="bg-gray-200">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <h1 class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <span class="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Shareholders
        </span>
        <span
          class="cursor-pointer text-base font-bold text-primary-blue underline hover:text-primary-blue/50 lg:text-lg"
          @click="$emit('showBoard')"
        >
          Board of ShareHolders
        </span>
      </h1>
      <div class="flex flex-wrap justify-center gap-12 pt-12">
        <div
          v-for="shareholder in shareholdersList"
          :key="shareholder.firstName"
          class="relative rounded-xl border-2 bg-gray-100 p-4 shadow-xl"
        >
          <img
            class="h-[200px] w-[200px]"
            :src="
              require(`~/assets/images/about-us/shareholders-list/${shareholder.image}.png`)
            "
            alt=""
          />
          <div class="relative flex flex-col items-end">
            <div
              :class="[shareholder.barColor]"
              class="absolute left-0 h-full w-1.5"
            ></div>
            <span>{{ shareholder.firstName }}</span>
            <span>{{ shareholder.lastName }}</span>
            <span class="mt-4 text-sm font-bold tracking-widest">
              {{ shareholder.position }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shareholdersList: [
        {
          image: 'shareholders-1',
          firstName: 'Mr. Phousaysana',
          lastName: 'Saysombath',
          position: 'Chairman',
          barColor: 'bg-red-600',
        },
        {
          image: 'shareholders-2',
          firstName: 'Mr. Shane',
          lastName: 'Suwannaphan',
          position: 'Vice Chairman',
          barColor: 'bg-green-600',
        },
        {
          image: 'shareholders-3',
          firstName: 'Mr. Akaxid',
          lastName: 'Saysombath',
          position: 'General Manager',
          barColor: 'bg-blue-600',
        },
        {
          image: 'shareholders-4',
          firstName: 'Ms. Yao',
          lastName: 'Minhua',
          position: 'Accounting & Finance',
          barColor: 'bg-blue-300',
        },
        {
          image: 'shareholders-5',
          firstName: 'Ms. Souknanta',
          lastName: 'Chandeng',
          position: 'Administrative',
          barColor: 'bg-blue-300',
        },
        {
          image: 'shareholders-6',
          firstName: 'Mr. Bounphanith',
          lastName: 'Phomathi',
          position: 'Project Management',
          barColor: 'bg-blue-300',
        },
        {
          image: 'shareholders-7',
          firstName: 'Mr. Phetphasith',
          lastName: 'Silawong',
          position: 'Marketing',
          barColor: 'bg-blue-300',
        },
        {
          image: 'shareholders-8',
          firstName: 'Mr. Vatthana',
          lastName: 'Onkhamtay',
          position: 'Sale',
          barColor: 'bg-blue-300',
        },
        {
          image: 'shareholders-9',
          firstName: 'Mr. Thanomsak',
          lastName: 'Kerdtho',
          position: 'IT & Engineering',
          barColor: 'bg-blue-300',
        },
      ],
    }
  },
}
</script>
