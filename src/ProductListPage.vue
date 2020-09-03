<template>
    <div>
        <h3>Product Categories</h3>
        <div class='category-container'>
            <collapsible-category
                v-for="entry in categories['Root'].children"
                class = 'inline-block'
                :key="categories[entry].name"
                :categoryName="categories[entry].name"
            ></collapsible-category>
            <category-entry
                class='inline-block container'
            ></category-entry>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'Vuex';
import CollapsibleCategory from "./CollapsibleCategory.vue";
import CategoryEntry from "./CategoryEntry.vue";
export default {
    name: 'ProductListPage',
    components: {
        CollapsibleCategory,
        CategoryEntry,
    },
    computed: {
        ...mapGetters(['categories']),
    },
}
</script>

<style scoped>




@media screen and (min-width: 600px) {
    .category-container {
        display: flex;
    }
    .inline-block {
        flex: 50%;
    }
}

@media screen and (max-width: 600px) {
    #collapsible-category-entry {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
}
</style>