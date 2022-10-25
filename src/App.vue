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
  background-image: url("https://img.freepik.com/foto-gratis/marron-beige-crema-claro-lujo-abstracto-como-fondo-modelo-textura-seda-algodon_1258-71591.jpg?w=826&t=st=1666635909~exp=1666636509~hmac=7dd2630c1a781949693e972d514283d2a15cb8c81f72d590f0c4c585d1720368.jpg");
  background-size: 200%;
}
</style>
