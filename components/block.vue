<template>
    <section>
        

        <div class="grid grid-cols-[1fr,auto] items-center">
            <div class="flex min-w-0">
                <BlockHeader :title="title" :category="category"/>
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
            <div class="flex items-center justify-center bg-white p-8 relative" v-if="tab === 'preview'">

                <slot name="preview">preview</slot>
            </div>
            <div class="prose bg-gray-200 flex p-8 relative" v-if="tab === 'code'">
                <button
                    class="absolute border border-2 border-slate-500 rounded p-1 top-[72px] right-[48px] bg-slate-900/70 z-50 flex transition-all text-slate-300"
                    @click="() => copy(props.content || '')"
                >
                    <span v-if="copied" class="px-2 font-semibold">Copied!</span>
                    <span>📋</span>
                </button>
<pre class="relative">
<code class="language-html" v-text="props.content"></code>
</pre>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const tabs = ['preview', 'code']
const tab = ref('preview')

const changeTab = (name: string) => {
    if (link.value) {
        window.open(link.value, '_blank')?.focus();
    } else {   
        tab.value = name
    }
}
const props = defineProps<{
    title: string
    category?: string
    content?: string
    inferLink?: boolean
}>()

const { copy, copied, } = useClipboard({ source: props.content, copiedDuring: 3000 },)

function copyText(codeString: string) {
  copy(codeString)
}

const slots = defineSlots<{
    preview: () => VNode,
    code: () => VNode
}>()

const link = computed(() => {
    if (props.inferLink) {
        return `https://github.com/Front-End-Coders-Mauritius/nuxt-workshop-devcon2024-preparations/blob/main/components/Icon/${props.title}.vue`
    } else return null
})

</script>