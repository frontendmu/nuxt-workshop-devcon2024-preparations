<template>
  <div class="candle">
    <div class="flame">
      <div class="shadows"></div>
      <div class="top"></div>
      <div class="middle"></div>
      <div class="bottom"></div>
    </div>
    <div class="wick"></div>
    <div class="wax"></div>
  </div>
</template>

<style>
/* body {
  background: #111;
  display: flex;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
} */

.candle {
  --flame-height: 150px;
  --wick-height: 50px;
  --orange: #ff6a00;
  --orange-yellow: #ff9224;
  --dark: #2c2b39;
  --blue-dark: #30537d;
  --blue-light: #76daff;
  --yellow: #fbf348;
  --yellow-grey: #58523a;

  width: 34px;
  margin: 30px auto 0 auto;
  position: relative;
  height: 80%;
  align-self: flex-end;
  animation: blink 0.1s infinite;
  transform: scale(0.2);
  transform-origin: center top;
}
.wick {
  position: absolute;
  width: 6px;
  height: var(--wick-height);
  background: #23161a;
  top: var(--flame-height) - 0.8 * var(--wick-height);
  left: 50%;
  transform: translateX(-50%) skewX(2deg);
  border-radius: 10%;
  box-shadow: 0 0 2px 0px black;
}
.wick:before {
  content: "";
  position: absolute;
  width: 0;
  left: 50%;
  height: 10px;
  box-shadow: 0 -14px 10px 8px white, 0 -10px 10px 8px rgba(255, 215, 0, 0.7),
    /* //gold */ 0 -3px 10px 8px rgba(255, 106, 0, 0.7),
    /* //orange */ 0 6px 3px 4px black;
}
.wick :after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0px;
  height: 0px;
  box-shadow: 0 5px 2px 3px gold, 0 20px 2px 14px gold,
    0 -6px 4px 5px rgba(98, 33, 27, 0.8),
    /* //dark orange */ 0 0px 1px 4px rgba(255, 106, 0, 0.7),
    /* //orange */ 0 0px 3px 4px var(--orange), 0 5px 3px 4px gold;
}

.flame {
  width: 20px;
  height: var(--flame-height);
  margin: 0px auto;
  position: relative;
  animation: move 3s infinite, move-left 3s infinite;
  transform-origin: 50% 90%;
}
.flame .top {
  width: 20px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  border-top-left-radius: 500%;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 500%;
  border-bottom-right-radius: 50px;
  transform: skewY(-10deg);
  box-shadow: 0 0px 0px 3px white, 0 -20px 1px 4px white, 0 -25px 2px 3px gold,
    0 -30px 5px 4px var(--orange), /* //top */ 0 0px 150px 10px var(--orange),
    /* //global */ 0 -10px 2px 4px white, 0 -5px 3px 3px white;
  animation: flame-up 4s infinite;
}
.flame .shadows {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 5px 20px 15px gold, 0 0px 100px 20px var(--orange),
    0 15px 50px 15px var(--orange), 5px 30px 5px 13px var(--orange),
    5px 50px 5px 13px var(--orange), 0 75px 50px 30px black;
}
.flame .bottom {
  transform: scale(0.9);
  position: absolute;
  bottom: 6px;
  left: 9px;
  width: 1px;
  height: 8px;
  border-radius: 1%;
  background: var(--dark);
  box-shadow: 0 6px 10px 12px rgba(60, 76, 125, 0.3),
    /* //dark blue */ 0 0px 4px 8px var(--dark),
    0 -12px 10px 8px rgba(255, 106, 0, 0.5),
    /* //orange */ 0 5px 7px 12px var(--dark), 0 -3px 10px 12px var(--dark),
    5px -10px 10px 5px red, 0 -15px 10px 10px gold, 5px -25px 10px 5px gold,
    0 2px 5px 10px var(--blue-dark), 0 -2px 2px 14px var(--blue-light),
    0 2px 10px 12px var(--blue-light);
}

.wax {
  position: relative;
  top: 15px;
  width: 100%;
  height: 100%;
  background: var(--orange-yellow);
  background: -moz-linear-gradient(
    top,
    var(--orange-yellow) 0px,
    var(--orange-yellow) 20px,
    var(--yellow-grey) 50px
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    var(--orange-yellow) 0px,
    var(--orange-yellow) 20px,
    var(--yellow-grey) 50px
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    var(--orange-yellow) 0px,
    var(--orange-yellow) 20px,
    var(--yellow-grey) 50px
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9224', endColorstr='#58523a',GradientType=0 ); /* IE6-9 */

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: inset 0 7px 12px -2px var(--yellow),
    inset 0 9px 57px -3px rgba(255, 0, 0, 0.4), inset 0 -5px 8px 2px black,
    0 0 3px 0px var(--orange);
}

@keyframes move {
  0% {
    transform: skewX(2deg) skewY(5deg);
  }
  50% {
    transform: skewX(-2deg) skewY(-0deg);
  }
  100% {
    transform: skewX(2deg) skewY(5deg);
  }
}
@keyframes move-left {
  50% {
    transform: skewX(3deg);
  }
}
@keyframes flame-up {
  50% {
    box-shadow: 0 0px 0px 3px white, 0 -38px 1px 2px white, 0 -41px 2px 3px gold,
      0 -50px 5px 4px var(--orange),
      /* //orange top */ 0 0px 150px 10px var(--orange),
      /* //orange global */ 0 -10px 2px 4px white, 0 -5px 3px 3px white;
  }
}
@keyframes blink {
  50% {
    opacity: 0.95;
  }
}
</style>