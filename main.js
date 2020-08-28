var app = new Vue({
  el: '#app',
  data: {
	cat_produce: 'Fresh Produce',
	cat_baked: 'Baked Goods',
	cat_meat: 'Animal Products',		
	produce_item_1: 'Fruits',
	produce_item_2: 'Leafy Vegetables',
	produce_item_3: 'Tubers and Non-Leafy Vegetables',
	baked_item_1: 'Cakes',
	baked_item_2: 'Cookies',
	baked_item_3: 'Pies',
	meat_item_1: 'Meat',
	meat_item_2: 'Poultry',
	meat_item_3: 'Fish'
  },
  methods: {
	toggleCollapse(e) {
	  var collapsibleContent = e.target.nextElementSibling;
	  if (collapsibleContent.style.maxHeight){
	  collapsibleContent.style.maxHeight = null;
	  } else {
		collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
	  } 
	}
  }
})