
import BlockHeader from './BlockHeader.vue'<template>
    <div class="font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none]" scroll-region="">
  <div id="app">
    <header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav aria-label="Global" class="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center py-[2.125rem]">
          <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div><a class="flex-none text-slate-900"
            href="/"><span>Workshop frontend.mu</span></a>
          
        </div>
      </nav>
    </header>
    <div class="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]">
      <div class="relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
        <BlockHeader />
        <div class="mt-10 space-y-24 pb-px">
          <Block title="Simple Card">
            <template #code>
                &lt;div
        class=&quot;flex flex-col justify-between bg-blue-950 text-white p-4 rounded-md w-full&quot;
      &gt;
        &lt;div class=&quot;flex justify-between w-full&quot;&gt;
          &lt;div class=&quot;text-xl font-bold&quot;&gt;Flic en Flac&lt;/div&gt;
          &lt;div class=&quot;w-6&quot;&gt;
            &lt;IconCandle /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex justify-between items-end&quot;&gt;
          &lt;div class=&quot;space-y-2&quot;&gt;
            &lt;p class=&quot;font-light max-w-3xl&quot;&gt;
              Poste De Police, Loday Lane, Flic En Flac Road, Residence Des
              Peupliers Et Residence Gold Coast
            &lt;/p&gt;
            &lt;div class=&quot;text-sm&quot;&gt;8 HOURS AGO FROM 08:30 TO 15:30&lt;/div&gt;
          &lt;/div&gt;
          &lt;p class=&quot;max-w-[150px] text-right&quot;&gt;Power will resume in 34m 6s&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
              
            </template>
            <template #preview>
              <BlocksCardOne />
            </template>
          </Block>
        </div>
      </div>
    </div>
  </div>
</div>
</template>