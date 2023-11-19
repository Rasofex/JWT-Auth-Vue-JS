<template>
  <div
    class="flex-shrink-0 border-2 dark:border-zinc-700 border-zinc-200 shadow-lg rounded-xl max-w-4xl w-full overflow-hidden">
    <div class="flex flex-col w-full flex-1">
      <div class="w-full overflow-hidden">
        <div class="md:aspect-[21/6] aspect-[9/3] object-cover w-full h-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
      </div>
      <div class="flex flex-col md:flex-row items-center pb-5 md:px-5 dark:bg-zinc-800 bg-white">
        <div
          class="md:w-48 md:h-48 w-32 h-32 md:-mt-24 -mt-[4.2rem] rounded-full overflow-hidden border-2 dark:border-zinc-700 border-zinc-300 shadow-lg">
          <div class="rounded-full object-cover dark:bg-zinc-800 w-full h-full bg-zinc-200 animate-pulse"></div>
        </div>
        <div class="flex flex-row md:pl-5 flex-1">
          <div>
            <div class="flex text-2xl font-bold mt-2 md:mt-3.5 justify-center md:justify-start">
              <div class="w-32 h-8 bg-zinc-200 dark:bg-zinc-700 animate-pulse rounded-lg"></div>
              <div class="w-24 h-8 bg-zinc-200 dark:bg-zinc-700 animate-pulse ml-2 rounded-lg"></div>
            </div>
            <div class="text-zinc-500 justify-self-center md:justify-self-start dark:text-zinc-300">
              <div class="w-64 h-4 bg-zinc-200 dark:bg-zinc-700 animate-pulse rounded-lg"></div>
              <div class="w-48 h-4 bg-zinc-200 dark:bg-zinc-700 animate-pulse mt-2 rounded-lg"></div>
            </div>
            <div class="flex justify-center md:justify-start md:space-x-3 mt-2">
              <div class="w-6 h-6 bg-zinc-200 dark:bg-zinc-700 animate-pulse rounded-full"></div>
              <div class="w-6 h-6 bg-zinc-200 dark:bg-zinc-700 animate-pulse rounded-full ml-3"></div>
            </div>
          </div>
        </div>
        <div class="justify-items-end justify-end">
          <div class="flex">
            <div class="icon">
              <div class="w-6 h-6 bg-zinc-200 dark:bg-zinc-700 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
