<template>
    <div id="app">
      <sliding-menu></sliding-menu>

      <template v-if="CurrentPage == 'home'">
        <h3>Product Categories</h3>
        <collapsible-category :categoryName="'Root'"></collapsible-category>
      </template>
      <template v-else-if="CurrentPage == 'contacts'">
        
			<KeyContacts></KeyContacts>
      </template>
    </div>
</template>

<script>
    import CollapsibleCategory from "./CollapsibleCategory.vue";
    import SlidingMenu from "./SlidingMenu.vue";
	import KeyContacts from "./KeyContacts.vue";
    export default {
        data(){ return {
          CurrentPage: "home"
        }},
        components: {
            CollapsibleCategory,
            SlidingMenu,
			KeyContacts,
        },
    };
</script>
<style></style>
