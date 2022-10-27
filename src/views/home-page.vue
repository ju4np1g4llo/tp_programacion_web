<template>

<div id="home-page">
  <header-top/>

  <div>
    <main-menu v-if="menu.mainMenu" v-on:menuEvent="showMenuOptionSelected"/>
    <lista_medicos v-if="menu.Medicos"/>
    <lista_pacientes v-if="menu.Pacientes" v-on:menuEvent="showMenuOptionSelected"/>
    <pacientes-for v-if="menu.Pacientes2"/>
  </div>



</div>


</template>

<script>
import headerTop from "@/components/header-top";
import lista_medicos from "@/components/lista_medicos";
import mainMenu from "@/components/main-menu";
import lista_pacientes from "@/components/lista_pacientes";
import pacientesFor from "@/components/pacientes-for";




export default {
  name: 'App',
  components: {
    headerTop,
    mainMenu,
    lista_medicos,
    lista_pacientes,
    pacientesFor,

  },

  data(){
    return{
      menu:{
        activeOption: "mainMenu",
        mainMenu: true,
        Medicos: false,
        Pacientes: false,
        Pacientes2: false


      }
    }
  },
  methods: {
    showMenuOptionSelected(option) {
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true;
    }
  },

}
</script>

<style>
#app {
  width: 102%;
  margin: -1%;
  background-image: url("../assets/fondo-final.jpg");
  background-size: 200%;
}


</style>
