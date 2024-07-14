<template>
  <div class="mt-10 space-y-24 pb-px">
    <Block title="Card One" category="card">
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
        <CardOne />
      </template>
    </Block>
    <Block title="Card two" category="card">
      <template #code>
        &lt;div class=&quot;bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md&quot;&gt;
        &lt;div class=&quot;flex justify-between text-black&quot;&gt;
          &lt;div class=&quot;flex space-x-3&quot;&gt;
            &lt;div class=&quot;flex items-center justify-center w-6&quot;&gt;
              &lt;IconBulb /&gt;
            &lt;/div&gt;
            &lt;div class=&quot;min-w-0 flex-1&quot;&gt;
              &lt;p class=&quot;text-sm font-semibold text-gray-900&quot;&gt;Flic en Flacq&lt;/p&gt;
              &lt;p class=&quot;text-sm text-gray-500&quot;&gt;
                8 hours ago, From 08:30 to 15:30
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;p&gt;Power will resume in 34m 6s&lt;/p&gt;
        &lt;/div&gt;
        &lt;p class=&quot;text-gray-500&quot;&gt;
          Le Village De Caroline Dans Le P&eacute;rim&egrave;tre De La Route Royale, Avenue
          Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit
          Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe,
          Morc. Sohawon, Morc.
        &lt;/p&gt;
      &lt;/div&gt;
      </template>
      <template #preview>
        <CardTwo />
      </template>
    </Block>
    <Block title="Card three" category="card">
      <template #code>
        &lt;div class=&quot;bg-white px-4 py-5 sm:px-6 space-y-4 rounded-md&quot;&gt;
        &lt;div class=&quot;flex justify-between text-black&quot;&gt;
          &lt;div class=&quot;flex space-x-3&quot;&gt;
            &lt;div class=&quot;flex items-center justify-center w-6&quot;&gt;
              &lt;IconBulb /&gt;
            &lt;/div&gt;
            &lt;div class=&quot;min-w-0 flex-1&quot;&gt;
              &lt;p class=&quot;text-sm font-semibold text-gray-900&quot;&gt;Flic en Flacq&lt;/p&gt;
              &lt;p class=&quot;text-sm text-gray-500&quot;&gt;
                8 hours ago, From 08:30 to 15:30
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;p&gt;Power will resume in 34m 6s&lt;/p&gt;
        &lt;/div&gt;
        &lt;p class=&quot;text-gray-500&quot;&gt;
          Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue
          Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit
          Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe,
          Morc. Sohawon, Morc.
        &lt;/p&gt;
      &lt;/div&gt;    
      </template>
      <template #preview>
        <CardThree />
      </template>
    </Block>
    <Block title="Card four" category="card">
      <template #code>
        &lt;div
        class=&quot;bg-gray-700 border-[1px] border-gray-400 px-4 py-5 sm:px-6 space-y-4 rounded-md&quot;
      &gt;
        &lt;div class=&quot;flex justify-between&quot;&gt;
          &lt;div class=&quot;flex justify-between w-full&quot;&gt;
            &lt;div class=&quot;min-w-0 flex-1&quot;&gt;
              &lt;p class=&quot;text-lg font-semibold text-white&quot;&gt;Flic en Flacq&lt;/p&gt;
              &lt;p class=&quot;text-sm text-gray-400&quot;&gt;
                8 hours ago, From 08:30 to 15:30
              &lt;/p&gt;
              &lt;p class=&quot;text-white text-sm&quot;&gt;Power will resume in 34m 6s&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex items-center justify-center w-6&quot;&gt;
              &lt;IconBulb /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;p class=&quot;text-gray-300 font-light&quot;&gt;
          Le Village De Caroline Dans Le Périmètre De La Route Royale, Avenue
          Descombe, Avenue Gandhi, Avenue Allaman, Filling Engen Et Shell, Petit
          Bois, Chemin Balance, Morc. Caunhye, Residence EDC, Chemin La Pompe,
          Morc. Sohawon, Morc.
        &lt;/p&gt;
      &lt;/div&gt;     
      </template>
      <template #preview>
        <CardFour />
      </template>
    </Block>
  </div>
</template>