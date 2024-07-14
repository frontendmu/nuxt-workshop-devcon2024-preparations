<template>
	<div class="flex flex-col">
		<h1 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{{ title }}</h1>
		<nav aria-label="Breadcrumbs" class="order-first flex space-x-2 text-sm font-semibold"><a
				class="text-slate-500 hover:text-slate-600">Workshop</a>
			<div aria-hidden="true" class="select-none text-slate-400" v-if="category">/</div>
			<a
			v-if="category"
				class="text-slate-500 hover:text-slate-600" >{{category || '' }}</a>
		</nav>
	</div>
</template>


<script lang="ts" setup>
const props = defineProps<{
	title: string
	category?: string
}>()

</script>