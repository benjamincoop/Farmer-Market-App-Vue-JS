<template>
    <div id="app">
        <sliding-menu></sliding-menu>
        <h3>Product Categories</h3>
        <collapsible-category :categoryName="'Root'"></collapsible-category>
    </div>
</template>

<script>
    import CollapsibleCategory from "./CollapsibleCategory.vue";
    import SlidingMenu from "./SlidingMenu.vue";
    export default {
        components: {
            CollapsibleCategory,
            SlidingMenu,
        },
    };
</script>
<style></style>
