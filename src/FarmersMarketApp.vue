<template>
  <div id="app" class="full-height">
    <div v-if="!online" class="alert">You are currently offline!</div>
    <div id="alert">Alert!<button v-on:click="dismiss" class="dismiss-btn">X</button></div>
    <desktop-menu class='desktop-only'></desktop-menu>
    <sliding-menu class='mobile-only'></sliding-menu>
    <template v-if="CurrentPage == 'home'">
      <product-list-page></product-list-page>
    </template>
    <template v-else-if="CurrentPage == 'contacts'">
      <h3>Contacts</h3>
    </template>
    <button style="position: absolute; bottom: 10px;" v-on:click="alert">Test Alert</button>
  </div>
</template>

<script>
    import ProductListPage from "./ProductListPage.vue"
    import SlidingMenu from "./SlidingMenu.vue";
    import DesktopMenu from "./DesktopMenu.vue";
    export default {
        data(){ return {
          CurrentPage: "home"
        }},
        components: {
            ProductListPage,
            SlidingMenu,
            DesktopMenu,
        },
        computed: {
          online() {
            return navigator.onLine;
          }
        },
        methods: {
          alert: function (event) {
            // `this` inside methods points to the Vue instance
            document.getElementById("alert").style.top = 0;
            // `event` is the native DOM event
          },
          dismiss: function (event) {
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
