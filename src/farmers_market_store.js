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
                children: ["Test Entry"]
            },
            "Test Entry": {
                type: "entry",
                name: "Test Entry",
                description: "This is a test entry",
                examples: "",
                license: false,
                temperatureControl: false,
                snapEligible: false,
                testingRequired: false
            }
        },
    },
    getters: {
        categories(state) {
            return state.categories;
        },
    },

}
