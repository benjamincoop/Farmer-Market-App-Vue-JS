<template>
  <div>
  <div id="SideMenu" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click.self="closeNav()">&times;</a>
      <a href="#">Product List</a>
      <a href="#">More Information</a>
      <a href="#">Contact Us</a>
      <a href="#">Report an Issue</a>
  </div>
  <span style="font-size: 30px; cursor: pointer;" v-on:click.self="openNav()">&#9776; Menu</span>
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
