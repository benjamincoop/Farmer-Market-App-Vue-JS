<template>
    <div>
        <button class="collapsible" v-on:click.self="open = !open">{{ categoryName }}</button>
        
        <div v-if="open" class="content">
            <ul v-if="categories[categoryName].children.length !== 0">
                <template v-for="entry in categories[categoryName].children">
                    <collapsible-category
                        v-if="categories[entry].type === 'category'"
                        :key="categories[entry].name"
                        :categoryName="categories[entry].name"
                    ></collapsible-category>
                    
                    <li
                        v-else-if="categories[entry].type === 'entry'"
                        :key="categories[entry].name"
                    >
                        {{ categories[entry].name }}
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'Vuex';
export default {
    name: "collapsible-category",
    data() {
        return {
            open: false,
        };
    },
    props: {
        categoryName: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters(['categories']),
    },
}
</script>

<style>
</style>