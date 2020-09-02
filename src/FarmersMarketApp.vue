<template>
    <div id="app">
      <desktop-menu></desktop-menu>
      <sliding-menu></sliding-menu>

      <template v-if="CurrentPage == 'home'">
        <h3>Product Categories</h3>
        <collapsible-category :categoryName="'Root'"></collapsible-category>
      </template>
      <template v-else-if="CurrentPage == 'contacts'">
        <h3>Contacts</h3>
      </template>
    </div>
</template>

<script>
    import CollapsibleCategory from "./CollapsibleCategory.vue";
    import SlidingMenu from "./SlidingMenu.vue";
    import DesktopMenu from "./DesktopMenu.vue";
    export default {
        data(){ return {
          CurrentPage: "home"
        }},
        components: {
            CollapsibleCategory,
            SlidingMenu,
            DesktopMenu,
        },
    };
</script>
<style></style>
