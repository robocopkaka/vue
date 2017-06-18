<template>
	<div>
		<h1>The count: {{count}}</h1>

		<p>
			<button @click="count += 1">Increment Count</button>
		</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{count: 0}
		}
	}
</script>