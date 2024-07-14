<template>
  <div class="font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none]" scroll-region="">
      <Header />
      <div class="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]">
        <div class="relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </div>
  </div>
</template>