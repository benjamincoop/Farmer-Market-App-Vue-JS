<template>
    <div id="app">
        <h3>Product Categories</h3>
        <collapsible-panel
            :title="cat_produce"
            :items="[produce_item_1, produce_item_2, produce_item_3]"
        ></collapsible-panel>
        <collapsible-panel
            :title="cat_baked"
            :items="[baked_item_1, baked_item_2, baked_item_3]"
        ></collapsible-panel>
    </div>
</template>


<script>
import CollapsiblePanel from './CollapsiblePanel.vue'
export default {
    components: {
        CollapsiblePanel
    },
    data() {
        return {
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
        };
    },
}
</script>

<style scoped>
.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>