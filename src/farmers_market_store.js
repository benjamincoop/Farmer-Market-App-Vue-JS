export default {
    state: {
        categories: {
            "Root": {
                type: "category",
                name: "Root", 
                children: ["Test Category"]
            },
            "Test Category": {
                type: "category",
                name: "Test Category",
                children: [
                    "Test Category/Test Subcategory",
                    "Test Entry"
                ]
            },
            "Test Category/Test Subcategory": {
                type: "category",
                name: "Test Category/Test Subcategory",
                children: ["Test Entry 2"]
            },
            "Test Entry": {
                type: "entry",
                name: "Test Entry",
                description: "This is a test entry",
                examples: "",
                license: false,
                temperatureControl: false,
                snapEligible: false,
                testingRequired: false,
                favored: false
            },
            "Test Entry 2": {
                type: "entry",
                name: "Test Entry 2",
                description: "This is a test entry",
                examples: "Example 1, example 2, etc.",
                license: true,
                temperatureControl: true,
                snapEligible: true,
                testingRequired: true,
                favored: false
            },            
        },
        currentEntry: null,
        currentPage: "home",
        favorites: [],
    },
    getters: {
        categories(state) {
            return state.categories;
        },
        currentEntry(state) {
            return state.currentEntry;
        },
        favorites: state=>state.favorites,
        currentPage: state=>state.currentPage,
    },
    mutations: {
        setCurrentEntry(state, currentEntry) {
            state.currentEntry = currentEntry
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage
        },
        AddToFavorites(state, currentEntry) { 
            if(state.favorites.indexOf(currentEntry) === -1)
                state.favorites.push(currentEntry);
        },
        RemoveFromFavorites(state, entry) { state.favorites.splice(state.favorites.indexOf(entry), 1) },
    },

}
