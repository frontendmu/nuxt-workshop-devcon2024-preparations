<template>
  <div class="font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none]">
      <Header />
      <div class="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]">
        <div class="relative mx-auto mt-20 w-full container px-4 sm:px-6 lg:px-8 max-w-5xl">
          <slot />
        </div>
      </div>
  </div>
</template>