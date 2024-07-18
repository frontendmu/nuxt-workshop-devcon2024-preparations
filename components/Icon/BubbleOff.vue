<template>
    <label><input value="on" name="dummy" type="checkbox" class="bubble"></label>
</template>

<style scoped>
label,
.bubble {
    display: block;
    -webkit-tap-highlight-color: transparent;
}

label {
    animation: float74 4s ease-in-out infinite;
}

.bubble,
.bubble:before,
.bubble:after {
    transition-duration: 0.2s;
}

.bubble,
.bubble:after {
    border-radius: 50%;
}

.bubble {
    box-shadow: 0 -0.06em 0.1em hsl(0, 95%, 42%) inset,
        0 -0.15em 0.4em hsl(0, 90%, 45%) inset,
        0 0.05em 0.05em hsl(0, 90%, 45%) inset,
        0.05em 0 0.1em hsl(0, 90%, 45%) inset,
        -0.05em 0 0.1em hsl(0, 90%, 45%) inset,
        0 0.1em 0.4em hsl(0, 90%, 60%) inset;
    cursor: auto;
    position: relative;
    width: 3em;
    height: 3em;
    transform-style: preserve-3d;
    transition-property: box-shadow, transform, width, height;
    transition-timing-function: ease-in-out, ease-in-out, var(--bubbleTiming), var(--bubbleTiming);
    will-change: transform;
    -webkit-appearance: none;
    appearance: none;
    z-index: 0;
}

.bubble:before,
.bubble:after {
    content: "";
    display: block;
    position: absolute;
    transition-timing-function: var(--bubbleTiming);
}

.bubble:before {
    border-radius: 0.75em;
    box-shadow: 0 0 0 0.5em hsl(0, 90%, 45%) inset;
    filter: drop-shadow(0.6em 0.6em 4px hsla(0, 0%, 0%, 0.2));
    top: 50%;
    left: 50%;
    width: 1.5em;
    height: 1.5em;
    transform: translate3d(-50%, -50%, -1px);
    z-index: -1;
}

.bubble:after {
    background: radial-gradient(100% 100% at center, hsla(0, 0%, 0%, 0) 35%, hsla(0, 0%, 0%, 0.2) 48%, hsla(0, 0%, 0%, 0) 50%);
    filter: blur(4px);
    top: 0.6em;
    left: 0.6em;
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, -1px);
    z-index: -2;
}


/* Animations */
@keyframes float74 {

    from,
    to {
        transform: translate(0, 3%);
    }

    25% {
        transform: translate(-3%, 0);
    }

    50% {
        transform: translate(0, -3%);
    }

    75% {
        transform: translate(3%, 0);
    }
}
</style>