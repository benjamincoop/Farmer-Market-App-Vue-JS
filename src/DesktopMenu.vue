<template>
  <div id="desktop-menu">
    <div id="menu">
      <img id="kda_logo" src="../KDALogo_White-Gold.png">
      <ul id="menu_list">
        <li @click="onChangePage('home')">Home</li>
        <li @click="onChangePage('about')">About</li>
        <li @click="onChangePage('favorites')">Favorites</li>
        <li @click="onChangePage('contacts')">Contact Us</li>
        <li @click="onChangePage('reporting')">Report an Issue</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'Vuex';
export default {
    name: "desktop-menu",
    data() {
        return {};
    },
    computed: {
        currentPage() {
            return this.$store.getters.currentPage
        },
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      onChangePage(page){
        this.setCurrentPage(page);
      },
    }
  }
</script>

<style>
</style>
