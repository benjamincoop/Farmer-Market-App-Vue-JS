<template>
    <div class="container">
        <button class="collapsible" v-on:click.self="open = !open">{{ categories[categoryName].name }}</button>
        
        <div v-if="categories[categoryName].children.length !== 0 && open" class="content">
            <template v-for="entry in categories[categoryName].children">
                <collapsible-category
                    v-if="categories[entry].type === 'category'"
                    :key="categories[entry].name"
                    :categoryName="categories[entry].name"
                ></collapsible-category>
                <button
                    v-else-if="categories[entry].type === 'entry'"
                    class="entry"
                    :key="categories[entry].name"
                    @click.self="onEntryClick(categories[entry].name)">
                    {{ categories[categoryName].name }}
                </button>
            </template>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'Vuex';
import CategoryEntry from './CategoryEntry.vue';
export default {
    name: "collapsible-category",
    components: {
        CategoryEntry,
    },
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
        ...mapGetters(['categories', 'currentEntry']),
    },
    methods: {
        ...mapMutations(['setCurrentEntry']),
        onEntryClick(entryName) {
            if (this.categories[entryName].type === 'entry') {
                this.setCurrentEntry(entryName);
            }
        },
    },
}
</script>

<style>
.collapsible {
    background-color: #002569;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    outline: none;
    font-size: 15px;
    border: 1px solid #F1AD02;
    margin: 5px 0;
  }

.entry {
  background-color: #e2c16c;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: 15px;
  border: 1px solid #F1AD02;
  margin: 5px 0;
}
  
.active, .collapsible:hover {
  border-width: 3px;
  background-color: #365faa
}

.content {
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>