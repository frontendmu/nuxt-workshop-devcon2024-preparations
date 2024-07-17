<template>
  <div class="wrapper">
    <div id="wrapper">
      <div id="bulb">
        <div id="bulb-top"></div>
        <div id="bulb-middle"></div>
        <div id="bulb-bottom"></div>
      </div>
      <div id="bulb-base">
        <div id="bulb-base-top"></div>
        <div id="bulb-base-middle">
          <div class="rivet rivet-short"></div>
          <div class="rivet rivet-long"></div>
          <div class="rivet rivet-short"></div>
          <div class="rivet rivet-long"></div>
          <div class="rivet rivet-short"></div>
        </div>
        <div id="bulb-base-bottom"></div>
      </div>
    </div>

  </div>
</template>

<style lang="postcss" scoped>

.wrapper {
  --size: 100px;
  --bulb: #f59e0b;
  --base: #999999;
}

.wrapper {
  position: relative;
}

#wrapper {

  color: var(--bulb);
  position: absolute;
  left: calc(50% - var(--size) * .5);
  top: calc(50% - var(--size) * 1.3 * .5);
  height: var(--size) * 1.3;
  width: var(--size);
}

#bulb {
  position: relative;
  width: inherit;
  height: inherit;
  transition: color 400ms linear;
  filter: drop-shadow(0 0 20px currentColor);
  z-index: 1;
}

#bulb-top {
  border-radius: 50%;
  background: radial-gradient(circle at var(--size)/2 var(--size)/2, lighten(var(--bulb), 30%) 0%, currentColor 40%, currentColor 80%, transparent 100%);
  //filter: drop-shadow(0 0 20px currentColor);
  width: var(--size);
  height: var(--size);
}

#bulb-middle {
  border-top: var(--size)/2 solid currentColor;
  border-left: var(--size)/4 solid transparent;
  border-right: var(--size)/4 solid transparent;
  position: absolute;
  height: 0;
  bottom: 2px;
  width: var(--size)/1.2;
  left: calc(50% - var(--size)/2.4);
  //filter: drop-shadow(0 0 20px currentColor);
}

#bulb-bottom {
  background-color: currentColor;
  border-radius: 50%;
  position: absolute;
  height: var(--size)/3;
  width: var(--size)/2;
  left: calc(50% - var(--size)/4);
  bottom: 0;
  //filter: drop-shadow(0 0 20px currentColor);
}

#bulb-base {
  color: var(--base);
  position: absolute;
  height: var(--size)/3;
  width: var(--size);
  bottom: -1 * (var(--size)/3.7);
  z-index: 2;
  overflow: hidden;
}

#bulb-base-top {
  background: linear-gradient(to bottom, #bbb 20%, #555 100%);
  border-radius: 0 0 3px 3px;
  position: relative;
  height: var(--size)/16;
  width: var(--size)/2.5;
  left: calc(50% - var(--size)/5);
}

.rivet {
  position: relative;
}

.rivet-short {
  background-color: hsl(100, 0%, 40%);
  border-top: 3px solid hsl(100, 0%, 20%);
  height: var(--size)/48;
  width: var(--size)/3;
  left: calc(50% - var(--size)/6);
}

.rivet-long {
  background: linear-gradient(to bottom, #aaa 20%, #555 100%);
  border-radius: 3px;
  height: var(--size)/32;
  width: var(--size)/2.5;
  left: calc(50% - var(--size)/5);
}

#bulb-base-bottom {
  border-top: var(--size)/8 solid var(--base);
  border-left: var(--size)/7 solid transparent;
  border-right: var(--size)/7 solid transparent;

  position: relative;
  width: var(--size)/8;
  left: calc(50% - var(--size)/7);
}
</style>