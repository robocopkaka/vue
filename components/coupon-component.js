
window.Event = new Vue();
Vue.component('coupon-component', {
	template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,
	methods:{
		onCouponApplied(){
			Event.$emit('applied');
		}
	}
})

new Vue({
	el: '#app',
	data:{
		couponApplied: false
	}, 
	methods: {
		onCouponApplied(){
			this.couponApplied = true;
		}
	},
	created(){
		Event.$on('applied', () => alert('handling it!'))
	}
})