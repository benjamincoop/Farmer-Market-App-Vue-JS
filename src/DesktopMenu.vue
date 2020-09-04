<template>
  <div id="desktop-menu">
    <div id="menu">
      <img id="kda_logo" src="../KDALogo_White-Gold.png">
      <ul id="menu_list">
        <li v-on:click.self="openHomePage()">Home</li>
        <li v-on:click.self="openKeyContactsPage()">
			More Information
		</li>
        <li>Favorites</li>
        <li>Reporting</li>
		
      </ul>
    </div>
  </div>
</template>

<script>
import FarmersMarketApp from './FarmersMarketApp.vue';
export default {
    name: "desktop-menu",
    data() {
        return {};
    },
	methods: {
      openKeyContactsPage() {
		this.$parent.CurrentPage = "contacts";
      },
	  openHomePage() {
		this.$parent.CurrentPage = "home";
      },
	}
  }
</script>

<style>
</style>
