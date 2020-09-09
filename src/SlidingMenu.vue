<template>
  <div id="sliding-menu">
  <div id="SideMenu" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click.self="closeNav()">&times;</a>
      <a href="#" @click="onChangePage('home'); closeNav()">Home</a>
      <a href="#" @click="onChangePage('about'); closeNav()">About</a>
      <a href="#" @click="onChangePage('favorites'); closeNav()">Favorites</a>
      <a href="#" @click="onChangePage('contacts'); closeNav()">Contact Us</a>
      <a href="#" @click="onChangePage('reporting'); closeNav()">Report an Issue</a>
  </div>
  <div id="menu">
    <span style="font-size: 30px; cursor: pointer; color: white; position: relative; top: 2px; margin: 5px;" v-on:click.self="openNav()">&#9776;</span>
    <img id="kda_logo" src="../KDALogo_White-Gold.png">
    </div>
</div>
</template>

<script>
import {mapGetters, mapMutations} from 'Vuex';
export default {
    name: "sliding-menu",
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
      openNav() {
        document.getElementById("SideMenu").style.width = "100%";
      },
      closeNav() {
        document.getElementById("SideMenu").style.width = "0";
      },
    }
  }
</script>

<style>
</style>
