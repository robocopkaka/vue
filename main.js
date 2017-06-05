Vue.component('task', {
	template: '<li><slot></slot></li>'
})

Vue.component('task-list',{
	template: `
		<div>
		  <task v-for="task in tasks">{{task.task}}</task>
		</div>
	`,
	data(){
		return{
			tasks:[
				{task: 'Go to the store', completed: true},
				{task: 'Check email', completed: true},
				{task: 'Propose to Bessy', completed: true},
				{task: 'Marry Bessy', completed: true}
			]
		};
	}
})

new Vue({
	el: '#app'
});