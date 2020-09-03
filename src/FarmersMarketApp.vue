<template>
  <div id="app" class="full-height">
    <div v-if="!online" class="alert">You are currently offline!</div>
    <desktop-menu class='desktop-only'></desktop-menu>
    <sliding-menu class='mobile-only'></sliding-menu>
    <template v-if="CurrentPage == 'home'">
      <product-list-page></product-list-page>
    </template>
    <template v-else-if="CurrentPage == 'contacts'">
      <h3>Contacts</h3>
    </template>
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
    };
</script>
<style>
.alert {
  background-color: darkred;
  color: white;
  padding: 5px;
}
</style>
