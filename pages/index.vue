<script setup lang="ts">

</script>

<template>
  <NuxtLayout>
    <div class="prose lg:min-w-[960px]">
      <h1>Welcome to Nuxt Workshop by frontend.mu</h1>
      <p>This is a workshop to learn Nuxt.js</p>
      <ol class="mt-10 space-y-24 pb-px">

        <!-- Step 1 - Go on GitHub and login -->
        <li>
          <h2>Go on GitHub and login with your account</h2>
        </li>
        
        <!-- Step 2 - Click here https://github.com/Front-End-Coders-Mauritius/nuxt-workshop-devcon2024 and fork the repository -->
         <li>
          <h2>
            <a href="https://github.com/Front-End-Coders-Mauritius/nuxt-workshop-devcon2024">Click here </a> and fork the repository
          </h2>
         </li>

        <!-- Step 3 - Open a codespace for this repository OR clone it on your machine -->

        <!-- Step 4 - Run NPM install -->

        <!-- Step 5 - Open your terminal and execute `npm install` -->

        <!-- Step 6 - Open your terminal and execute `npm run dev` -->

        <!-- Step 7 - Congratulations ! -->

        <!-- Step 8 - Let's create a component in Nuxt! -->

        <!-- Step 9 - Let's use some tailwind classes to build a simple layout -->

        <!-- Step 10 - Let's fetch some data from https://github.com/MrSunshyne/mauritius-dataset-electricity/blob/main/data/power-outages.latest.json -->

        <!-- Step 11 - Let loop on the data -->

        <!-- Step 12 - Let's create a card component or pick from the list -->
        <li>
          <h2>Let's create a card component or pick from the list</h2>
           <div class="grid gap-y-20">
             <StepCards />
           </div>
        </li>
        
        <!-- Step 13 - Let's add an indicator if power is off already or not -->

        <!-- <li>
          <div>
            <IconBulb /> 
          </div>
        </li> -->


      </ol>
    </div>

  </NuxtLayout>
</template>

<style>
ol li::marker {
    font-size: 2em;
    font-weight: bold;
    color: black;
}
</style>