<template>
  <div id="app" class="full-height">
    <div v-if="!online" class="alert">You are currently offline!</div>

    <!-- A hidden banner that shows and hides based on a styling change defined below as the js function "alert" and "dismiss" -->
    <div id="alert">Alert!<button v-on:click="dismiss" class="dismiss-btn">X</button></div>

    <!-- The menu viewable when the screen width is greater than 600px -->
    <desktop-menu class='desktop-only'></desktop-menu>

    <!-- The menu viewable when the screen width is less than 600px -->
    <sliding-menu class='mobile-only'></sliding-menu>

    <template v-if="CurrentPage == 'home'">
      <product-list-page></product-list-page>
    </template>
    <template v-else-if="CurrentPage == 'contacts'">
      <h3>Contacts</h3>
    </template>
    <template v-else-if="CurrentPage == 'favorites'">
      <favorite-list></favorite-list>
    </template>
    <template v-else-if="CurrentPage == 'reporting'">
      <reporting-page></reporting-page>
    </template>

    <!-- Triggers alert function defined below -->
    <button style="position: absolute; bottom: 10px;" v-on:click="alert">Test Alert</button>
  </div>
</template>

<script>
    import ProductListPage from "./ProductListPage.vue";
    import SlidingMenu from "./SlidingMenu.vue";
    import DesktopMenu from "./DesktopMenu.vue";
    import FavoriteList from "./FavoriteList.vue";
    import ReportingPage from "./ReportingPage.vue";
    export default {
        components: {
            ProductListPage,
            SlidingMenu,
            DesktopMenu,
            FavoriteList,
            ReportingPage,
        },
        computed: {
          online() {
            return navigator.onLine;
          },          
          CurrentPage() {
              return this.$store.getters.currentPage
          },
        },
        methods: {
          alert: function (event) {
            //Lowers the alert banner to the top of the screen
            document.getElementById("alert").style.top = 0;
          },
          dismiss: function (event) {
            //Raises the alert banner back above the top of the screen
            document.getElementById("alert").style.top = "-40px";
          }
        }
    };
</script>
<style>
#alert {
  background-color: #f1ad02;
  color: white;
  z-index: 1;
  position: absolute;
  padding: 10px;
  margin: 0 auto;
  right: 0;
  left: 0;
  border-radius: 0 0 10px 10px;
  width: 60%;
  top: -40px;
  text-align: center;
  transition: top 1s;
}
.alert {
  background-color: darkred;
  color: white;
  padding: 5px;
}
.dismiss-btn {
  float: right;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
