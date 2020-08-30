<template>
    <div id="app">
        <h3>Product Categories</h3>
        <collapsible-category
            :categoryName="'Root'"
        ></collapsible-category>
    </div>
</template>


<script>
import CollapsibleCategory from './CollapsibleCategory.vue'
export default {
    components: {
        CollapsibleCategory,
    },
}
</script>

<style>
</style>