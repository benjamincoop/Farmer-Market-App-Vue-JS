<template>
    <div>
        <h1>Favorites</h1>
        <ul>
        <li v-for="entry in favorites" v-bind:key="entry.id">
            <div>
                <h2>{{ categories[entry].name }}</h2>
                    <div class='inline-container'>
                        <div :class='requirementsClasses(categories[entry].license)'>Requires License</div>
                        <div :class='requirementsClasses(categories[entry].temperatureControl)'>Requires Temperature Control</div>
                        <div :class='requirementsClasses(categories[entry].testingRequired)'>Requires Testing</div>
                        <div :class='requirementsClasses(categories[entry].snapEligible)'>SNAP Eligible</div>
                    </div>
                    <p>{{ categories[entry].description }}</p>
                    <p>Examples: {{ categories[entry].examples }}</p>
                    <button @click.self="OnUnfavoriteClick(entry)">Unfavorite</button>
            </div>
        </li>
        </ul>
    </div>
</template>


<script>
import {mapMutations} from 'Vuex';
export default {
    name: "favorite-list",
    computed: {
        favorites() {
            return this.$store.getters.favorites
        },
        categories() {
            return this.$store.getters.categories
        }
    },
    methods: {
        ...mapMutations(['RemoveFromeFavorites']),
        requirementsClasses(isRequired) {
            var classes = 'inline-4 ';
            if (isRequired) {
                classes = classes.concat(' required');
            } else {
                classes = classes.concat(' not-required');
            }
            return classes;
        },
        OnUnfavoriteClick(entryName) {
            if (this.categories[entryName].type === 'entry') {
                this.RemoveFromFavorites
            }
        }
    }
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