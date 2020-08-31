var app = new Vue({
  el: '#app',
  data: {
	cat_produce: 'Fresh Produce',
	cat_baked: 'Baked Goods',
	cat_animal: 'Animal Products',		
	produce_item_1: 'Fruits',
	produce_item_2: 'Green Vegetables',
	produce_item_3: 'Other Vegetables',
	baked_item_1: 'Cakes',
	baked_item_2: 'Cookies',
	baked_item_3: 'Pies',
	subcat_meat: 'Meat',
	subcat_poultry: 'Poultry',
	subcat_seafood: 'Seafood',
	meat_item_1: 'Beef',
	meat_item_2: 'Pork',
	poultry_item_1: 'Chicken',
	poultry_item_2: 'Turkey',
	seafood_item_1: 'Fish',
	seafood_item_2: 'Other',
	questions_on: 'Questions On?',
	key_contacts: 'Key Contacts',
	
  },
  methods: {
	toggleCollapse(e) {
	  var collapsibleContent = e.target.nextElementSibling;
	  if (collapsibleContent.style.maxHeight){
	  collapsibleContent.style.maxHeight = null;
	  } else {
		collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight*2 + 'px';
	  } 
	}
	
  }
  
/*   computed: {
  BoldText: function ()  {
    return `<strong>Who To Contact:</strong>`
  }
} */
	
	
  
  
 
  
  
  
})