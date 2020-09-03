<template>
  <div id="sliding-menu">
  <div id="SideMenu" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click.self="closeNav()">&times;</a>
      <a href="#">Product List</a>
      <a href="#">More Information</a>
      <a href="#">Contact Us</a>
      <a href="#">Report an Issue</a>
  </div>
  <div id="menu">
    <span style="font-size: 30px; cursor: pointer; color: white; position: relative; top: 2px; margin: 5px;" v-on:click.self="openNav()">&#9776;</span>
    <img id="kda_logo" src="KDALogo_White-Gold.png">
    </div>
</div>
</template>

<script>
export default {
    name: "sliding-menu",
    data() {
        return {};
    },
    methods: {
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
