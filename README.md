# Setup
This project uses quite a few dependencies that the developer will have to install.
First, ensure that npm is installed. Running `npm install` will install all required
dependencies.

# Things to know
We are using Vuex, so if you see `mapGetters` or `mapMutations`, those items are
being imported from the `farmers_market_store.js` file.

# Development
We have installed `webpack-dev-server` so you can either run either `npm run serve`
to start a reactive development server at `127.0.0.1:8080`.

Similarly, you can create the build by running `npm run build`. This also has the
effect of updating the github pages website, although it may take up to 10 minutes
to load.

THE WEBSITE WILL NOT UPDATED IF YOU DO NOT BUILD THE PROJECT.

# Github Pages Website
Testing Page: https://benjamincoop.github.io/Farmer-Market-App-Vue-JS/dist
