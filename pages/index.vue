
<script setup lang="ts">
const step9Script = ref(
  `const outages = await fetchJson()
const { today } = outages
for (const outage of today) {
  console.log(outage)
}`
)

const step9Template = ref(
`<ul>
  <li v-for="outage of today" :key="outage.id">
    <pre>{{ outage }}</pre>  
  </li> 
</ul>`)
</script>

<template>
  <NuxtLayout>
    <div class="prose lg:min-w-[960px]">
      <h1>Welcome to Nuxt Workshop by frontend.mu</h1>
      <p>This is a workshop to learn <a href="https://nuxt.com/">Nuxt.js</a></p>
      <p><a href="https://discord.gg/fVtrXE4M">Join our discord channel</a> for two way comms!</p>
      <ol class="mt-10 space-y-24 pb-px">

        <!-- Step 1 - Go on GitHub and login -->
        <li>
          <h2>Go on GitHub and login with your account</h2>
        </li>
        
        <!-- Step 2 - Click here https://github.com/Front-End-Coders-Mauritius/nuxt-workshop-devcon2024 and fork the repository -->
         <li>
          <h2>
            <a href="https://github.com/Front-End-Coders-Mauritius/nuxt-workshop-devcon2024">Click here </a> and fork the repository.
          </h2>
         </li>

        <!-- Step 3 - Open a codespace for this repository OR clone it on your machine -->
         <li>
          <h2>Getting access to the editor</h2>
          <h3>Question: Do you have git and NodeJS installed on your machine?</h3>
          <p><strong>If yes</strong></p>
          <p>On your fork, click on the "code" button(usually green), <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository">clone the repository</a> on your machine</p>
          <p><strong>If no</strong></p>
          <p>On your fork, click on the "code" button(usually green), and select Codespaces.</p>
          <p>Click on "create codespace on main" to get your own cloud ide</p>
          <blockquote>This is VS Code running in the cloud! 😎</blockquote>
          <p>This might take a moment, depending on your connection speed.</p>

         </li>

        <!-- Step 4 - Run NPM install -->

        <li>
          <h2>Start the project in dev mode</h2>
          <p>You can now start the project in dev mode by running the following command in the terminal</p>
          <code>
            npm run dev
          </code>
          <p>Note that if you cloned the project, you might need to run `npm install` first</p>

        </li>

        <!-- Step 7 - Congratulations ! -->
         <li>
          <h2>Open the project in a new tab</h2>
          <p>Open port 3000 to view the running project in a new tab</p>
          <blockquote>If you see the green messsage, Congratulations! 🎉</blockquote>
          <p>If you don't see it, call an instructor to assist you</p>
         </li>

        <!-- Step 8 - Let's create a component in Nuxt! -->
         <li>
          <h2>Let's create a component in Nuxt!</h2>
          <p>Create a 'components' folder</p>
          <p>Add a new file `Container.vue`</p>
          <p>Add the following code to the file</p>
<pre>
  <code>
    &lt;template&gt;
      &lt;div class=&quot;container mx-auto&quot;&gt;
        Hello from Container.vue
      &lt;/div&gt;
    &lt;/template&gt;
  </code>
</pre>
         </li>

        <!-- Step 9 - Let's use some tailwind classes to build a simple layout -->
         <li>
          <h2>Let's use some tailwind classes to build a simple layout</h2>
          <p>Let's create a simple layout using tailwind classes</p>
          <p>Use the following classes to create a simple layout</p>
<pre>
  <code>
  &lt;template&gt;
    &lt;div class=&quot;container mx-auto&quot;&gt;
      &lt;div class=&quot;grid grid-cols-2 gap-4&quot;&gt;
        &lt;div class=&quot;bg-gray-200 p-4&quot;&gt;
          &lt;h2&gt;Hello from Container.vue&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class=&quot;bg-gray-200 p-4&quot;&gt;
          &lt;h2&gt;Hello from Container.vue&lt;/h2&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
</code>
</pre>
         </li>

        <!-- Step 10 - Let's fetch some data from https://github.com/MrSunshyne/mauritius-dataset-electricity/blob/main/data/power-outages.latest.json -->

        <li>
          <h2>Let's fetch some data </h2>
          <p>Endpoint: <code>https://github.com/MrSunshyne/mauritius-dataset-electricity/blob/main/data/power-outages.latest.json</code></p>
<pre>
  <code>
const API_ENDPOINT = 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json'

async function fetchJson(url = API_ENDPOINT) {
  try {
    const response = await fetch(url)
    return response.json()
  }
  catch (error) {
    throw new Error(`Error fetching JSON: ${error}`)
  }
}
  </code>
</pre>
            

        </li>

        <!-- Step 11 - Let loop on the data -->
         <li>
          <h2>
            Let's loop on the data
          </h2>
          <p>Display all the outages for today on the page by accessing the correct key</p>

<pre>
// In the script tag
<code v-text="step9Script"></code>
</pre>
<pre>
// In the template tag
<code v-text="step9Template"></code>
</pre>
         </li>

        <!-- Step 12 - Let's create a card component or pick from the list -->
        <li>
          <h2>Let's create a card component or pick from the list</h2>
           <div class="grid gap-y-20">
             <StepCards />
           </div>
        </li>

        <li>
          <h2>Let's pass data into the cards as props</h2>
          <p>Here we will learn <a href="https://vuejs.org/guide/components/props.html">about props</a> and how to pass them</p>
          <p>We will pass the `Street Name, District, Date From, Date To` into the card and customize the content to show our data </p>
        </li>
        
        <!-- Step 13 - Let's add an indicator if power is off already or not -->
        <li>
          <h2>Let's add some logic to check if power is off already or not</h2>
          <p></p>
        </li>

        <!-- Show some examples of on/off indicators -->
         <li>
          <h2>Pick some on/off indicators from this list</h2>
          <p></p>
         </li>
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