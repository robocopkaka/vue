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

Vue.component('message-component', {
	props: ['title', 'body'],
	data(){
		return{
			isVisible:true  // this makes it the each message component shows till the user decides to hide it
		};
	},
	template: `
		<article class="message" v-show="isVisible">
			<div class="message-header">
				{{title}}
				<button type = "button" style="float:right;" @click="hideModal"> X </button>
			</div>

			<div class="message-body">
				{{body}}
		    </div>
		</article>

	`,
	methods:{
		hideModal(){
			this.isVisible = false;
		}
	}
})

new Vue({
	el: '#app'
});