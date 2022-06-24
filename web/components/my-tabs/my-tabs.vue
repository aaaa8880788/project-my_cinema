<template>
	<u-tabs 
	:list="tabsList" 
	:is-scroll="false" 
	:modelValue="modelValue"
	@update:modelValue="currentIndexChange"
	@change="currentIndexChange" 
	:bg-color='bgc'
	:active-color='ac'></u-tabs>
</template>

<script setup lang="ts">
	interface Props {
		tabsList: any[]
		bgc ? : string,
		ac ? : string
		modelValue:any
	}
	const props = withDefaults(defineProps < Props > (), {
		tabsList: [],
		bgc: 'rbga(0,0,0,0)',
		ac: '#fc0000'
	})
	const emit = defineEmits<{
		(e:'update:modelValue',value:number)
	}>()
	const currentIndexChange = (index) => {
		emit('update:modelValue',index)
	}
</script>

<style lang="scss">

</style>
