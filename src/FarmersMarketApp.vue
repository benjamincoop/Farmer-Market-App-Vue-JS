<template>
    <div id="app">
        <h1>Product Categories</h1>
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