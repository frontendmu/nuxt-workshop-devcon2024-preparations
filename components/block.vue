<template>
    <section>
        <div class="grid grid-cols-[1fr,auto] items-center">
            <div class="flex min-w-0">
                <h2 class="truncate text-base font-medium leading-7 text-slate-900"><a>{{ title || 'block name' }}</a></h2>
            </div>
            <div class="ml-6 flex items-center">
                <div class="flex space-x-1 rounded-lg bg-slate-100 p-0.5" role="tablist" aria-orientation="horizontal">
                    <template v-for="item in tabs">
                        <button @click="changeTab(item)"
                            class="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3"
                            :class="{ 'bg-white shadow': tab === item }" role="tab" type="button"
                            aria-selected="true" tabindex="0">
                            <svg class="h-5 w-5 flex-none stroke-sky-500" fill="none" stroke-width="1.5"
                            v-if="item === 'preview'"
                                stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z">
                                </path>
                                <circle cx="10" cy="10" r="2.25"></circle>
                            </svg>
                            <svg v-if="item === 'code'" class="h-5 w-5 flex-none stroke-slate-600" fill="none" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path>
                        </svg>
                            <span class="capitalize sr-only lg:not-sr-only lg:ml-2 text-slate-900">{{ item }}</span>
                        </button>
                    </template>
                </div>
            </div>
        </div>
        <div class="mt-6 w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
            <div class="flex items-center justify-center bg-white p-8" v-if="tab === 'preview'">
                {{ X.template }}

                <slot name="preview">preview</slot>
            </div>
            <div class="prose flex items-center justify-center bg-white p-8" v-if="tab === 'code'">
                <pre>
                    <slot name="code">code</slot>


                </pre>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import X from '../components/blocks/card-one.vue'
const tabs = ['preview', 'code']
const tab = ref('preview')

console.log(X)

const changeTab = (name: string) => {
    tab.value = name
}
const props = defineProps<{
    title: string
}>()

const slots = defineSlots<{
    preview: () => VNode,
    code: () => VNode
}>()

</script>