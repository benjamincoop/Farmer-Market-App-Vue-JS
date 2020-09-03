<template>
    <div class="container">
        <button class="favorite" v-on:click.self="open = !open">Favorites</button>
        
        <div v-if="categories[categoryName].children.length !== 0 && open" class="content">
            <template v-for="entry in favorites">
                    {{ categories[entry].name }}
            </template>
        </div>
    </div>
</template>


<script>
export default {
    name: "favorite-list",
    components: {
        CategoryEntry,
    },
    data() {
        return {
            open: false,
        };
    },
    computed: {
        ...mapGetters(['categories', 'favorites']),
    },
}
</script>


<style scoped>
.inline-container {
    display: flex;
}
.inline-4 {
    flex: 25%;
    padding: 5px;
    border: 1px solid black;
    color: white;
}
.required {
    background-color: green;
}
.not-required {
    background-color: darkred;
}
</style>