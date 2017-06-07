Vue.component('coupon-component', {
	template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,
	methods:{
		onCouponApplied(){
			this.$emit('applied');
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
	}
})