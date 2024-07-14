<template>
  <div class="mt-10 space-y-24 pb-px">
    <Block title="Simple Card" category="card">
      <template #code>
        &lt;template&gt;
          &lt;CardOne /&gt;
        &lt;/template&gt;       
      </template>
      <template #preview>
        <CardOne />
      </template>
    </Block>
    <Block title="Extended Card" category="card">
      <template #code>
        &lt;template&gt;
          &lt;CardOne /&gt;
        &lt;/template&gt;       
      </template>
      <template #preview>
        <CardOne />
      </template>
    </Block>
  </div>
</template>