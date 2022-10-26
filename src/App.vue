<template>

  <header-top/>

  <body-items/>

  <bottom-words/>

  <br>

  <calendar-block/>


</template>

<script>
import headerTop from "@/components/header-top";
import BodyItems from "@/components/cuerpo-items";
import bottomWords from "@/components/bottom-words";
import calendarBlock from "@/components/calendar-block";


export default {
  name: 'App',
  components: {
    BodyItems,
    headerTop,
    bottomWords,
    calendarBlock,

  }

}
</script>

<style>
#app {
  width: 102% ;
  margin:-1%;
  overflow-x: hidden;
  background-image: url("../src/assets/fondo-final.jpg");
  background-size: 200%;
}
</style>
