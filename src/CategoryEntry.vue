<template>
    <div class="modal-mask" v-if="currentEntry != null">
        <div class="modal-wrapper" @click="closeEntry">
            <div class="modal-container">
                <div v-if="currentEntry in categories">
                    <h2>{{ categories[currentEntry].name }}</h2>
                    <div class='inline-container'>
                        <div :class='requirementsClasses(categories[currentEntry].license)'>Requires License</div>
                        <div :class='requirementsClasses(categories[currentEntry].temperatureControl)'>Requires Temperature Control</div>
                        <div :class='requirementsClasses(categories[currentEntry].testingRequired)'>Requires Testing</div>
                        <div :class='requirementsClasses(categories[currentEntry].snapEligible)'>SNAP Eligible</div>
                    </div>
                    <p>{{ categories[currentEntry].description }}</p>
                    <p>Examples: {{ categories[currentEntry].examples }}</p>
                    <button @click.self="OnFavoriteClick(categories[currentEntry].name)">Favorite</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'Vuex';
export default {
    name: 'CategoryEntry',
    computed: {
        ...mapGetters(['categories', 'currentEntry']),
    },
    methods: {
        ...mapMutations(['setCurrentEntry','AddToFavorites']),
        closeEntry() {
            this.setCurrentEntry(null);
        },
        requirementsClasses(isRequired) {
            var classes = 'inline-4 ';
            if (isRequired) {
                classes = classes.concat(' required');
            } else {
                classes = classes.concat(' not-required');
            }
            return classes;
        },
        OnFavoriteClick(entryName) {
            if (this.categories[entryName].type === 'entry') {
                this.AddToFavorites(entryName);
            }
        }
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