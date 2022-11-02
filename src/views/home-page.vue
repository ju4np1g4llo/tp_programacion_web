<template>

<div id="home-page">
  <header-top/>

  <div>
    <main-menu/>
  </div>

</div>


</template>

<script>
import headerTop from "@/components/header-top";
import mainMenu from "@/components/main-menu";

export default {
  name: 'App',
  components: {
    headerTop,
    mainMenu,
  },
}
</script>

<style>
#app{
  width: 100%;
  /*margin: -1%;*/
  background-image: url("../assets/fondo-final.jpg");
  background-size: 200%;
  overflow-x: hidden;
}




</style>
