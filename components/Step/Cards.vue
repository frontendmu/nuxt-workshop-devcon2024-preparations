<template>
    <Block title="Card One" category="card" :content="codeCardOne">
      <template #preview>
        <CardOne />
      </template>
    </Block>
    
    <Block title="Card two" category="card" :content="codeCardTwo">
      <template #preview>
        <CardTwo />
      </template>
    </Block>

    <Block title="Card three" category="card" :content="codeCardThree">
      <template #preview>
        <CardThree />
      </template>
    </Block>

    <Block title="Card four" category="card" :content="codeCardFour">
      <template #preview>
        <CardFour />
      </template>
    </Block>
</template>

<script setup lang="ts">

const codeCardOne = ref<string>(
`<div class="flex flex-col justify-between bg-blue-950 text-white p-4 rounded-md w-full">
  <div class="flex justify-between w-full">
    <div class="text-xl font-bold">Flic en Flac</div>
    <div class="w-6 h-6 relative">
      <div class="absolute inset-0">
        <div class="sr-only">indicator here</div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-end">
    <div class="space-y-2">
      <p class="font-light max-w-3xl">
        Poste De Police, Loday Lane, Flic En Flac Road, Residence Des
        Peupliers Et Residence Gold Coast
      </p>
      <div class="text-sm">8 HOURS AGO FROM 08:30 TO 15:30</div>
    </div>
    <p class="max-w-[150px] text-right">Power will resume in 34m 6s</p>
  </div>
</div>`
);

const codeCardTwo = ref<string>(
`<div
      class="flex justify-between space-y-2 border-[1px] border-white bg-sky-950 text-white p-4 rounded-md w-full"
    >
      <div class="flex flex-col justify-between gap-2">
        <div class="flex items-center gap-2 w-full">
          <div class="text-xl font-bold">Flic en Flac</div>
          <div class="w-6 h-6 relative">
            <div class="absolute inset-0">
              <div class="sr-only">indicator here</div>
            </div>
          </div>
        </div>
        <p class="font-light max-w-xl">
          Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue
          Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell,
          Petit Bois, Chemin Balance, Morc. Caunhye
        </p>
      </div>
      <div class="flex flex-col justify-between gap-2">
        <p class="text-right">Power will resume in 34m 6s</p>
        <div class="flex flex-col items-end">
          <div class="text-sm">8 HOURS AGO</div>
          <div class="text-sm font-light text-right">FROM 08:30 TO 15:30</div>
        </div>
      </div>
    </div>`)

const codeCardThree = ref<string>(
`  <div class="bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md">
    <div class="flex justify-between text-black">
      <div class="flex space-x-3">
        <div class="flex items-center justify-center w-6">
          <div class="sr-only">indicator here</div>
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-900">Flic en Flacq</p>
          <p class="text-sm text-gray-500">
            8 hours ago, From 08:30 to 15:30
          </p>
        </div>
      </div>
      <p>Power will resume in 34m 6s</p>
    </div>
    <p class="text-gray-500">
      Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue
      Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit
      Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe,
      Morc. Sohawon, Morc.
    </p>
  </div>`)

const codeCardFour = ref<string>(
`<div
      class="bg-gray-700 border-[1px] border-gray-400 px-4 py-5 sm:px-6 space-y-4 rounded-md"
    >
      <div class="flex justify-between">
        <div class="flex justify-between w-full">
          <div class="min-w-0 flex-1">
            <p class="text-lg font-semibold text-white">Flic en Flacq</p>
            <p class="text-sm text-gray-400">
              8 hours ago, From 08:30 to 15:30
            </p>
            <p class="text-white text-sm">Power will resume in 34m 6s</p>
          </div>
          <div class="flex items-center justify-center w-6">
            <div class="sr-only">indicator here</div>
          </div>
        </div>
      </div>
      <p class="text-gray-300 font-light">
        Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue
        Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit
        Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe,
        Morc. Sohawon, Morc.
      </p>
    </div>`)
</script>