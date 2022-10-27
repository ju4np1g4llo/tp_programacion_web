<template>
  <div class="cuerpo">

    <div class="sector_medicos">
      <span class="button-medics" v-on:click="$emit('menuEvent', 'Medicos')">Nuestros Médicos</span>
    </div>

    <div class="about-us">
      <h1> Sobre nosotros </h1>
      "Easy Files" es una página web la cual permite ordenar todo tipo de información necesaria para un trabajador del área médica. <br> <br>
      Además, se puede almacenar la información de otros compañeros de profesión, para facilitar el intercambio de información.
    </div>

    <div class="sector_pacientes">
      <span class="button-pacients" v-on:click="$emit('menuEvent', 'Pacientes')">Nuestros Pacientes</span>
    </div>

  </div>

  <bottom-words/>


  <br>

  <calendar-block/>

</template>

<script>
import bottomWords from "@/components/bottom-words";
import calendarBlock from "@/components/calendar-block";

export default {
  name: "main-menu",
  components:{
    bottomWords,
    calendarBlock,
  },
  emits: ['menuEvent'],
  data(){
    return{
      menu2:{
        activeOption: "Pacientes",
        Pacientes: true,
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

<style scoped>
.cuerpo{

  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  flex-direction: row;

}

.sector_medicos{
  border-radius: 5px 5px 0px 0px;
  width: 300px;
  height: 300px;
  padding: 10px;
  border: 2px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255);
  font-family: georgia;
  text-align: justify;
  background-image: url("https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000");
  background-size: 125% 100% ;
  background-repeat: no-repeat;
  background-position: -40px;
  animation: imagenes-medicos 5s infinite;
  animation-direction: alternate;
}

@keyframes imagenes-medicos{
  0%, 30% {
    background-image: url(../assets/medicos1.jpg);
  }
  35%, 65% {
    background-image: url(../assets/medicos2.jpg);
  }
  75%, 100% {
    background-image: url(../assets/medicos3.jpg);
  }
}


.about-us{
  border-radius: 5px 5px 0px 0px;
  width: 350px;
  height: auto;
  padding: 10px;
  border: 2px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255);
  font-family: georgia;
  text-align: center;

}

.sector_pacientes{
  border-radius: 5px 5px 0px 0px;
  width: 300px;
  height: 300px;
  padding: 10px;
  border: 2px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255);
  font-family: georgia;
  text-align: justify;
  background-size: 120% 100%;
  background-repeat: no-repeat;
  background-position: -40px;
  animation: imagenes-pacientes 5s infinite;
  animation-direction: alternate;

}

@keyframes imagenes-pacientes{
  0%, 30% {
    background-image: url(../assets/pacientes1.jpg);
  }
  35%, 65% {
    background-image: url(../assets/pacientes2.jpg);
  }
  75%, 100% {
    background-image: url(../assets/pacientes3.jpg);
  }

}

span{
  font-size: medium;
  text-align: center;
  margin-top: 110px;
  padding: 10px 25px;
  color: black;
  background-color: white;
  display: block;
  border: 2px solid black;
}


span:hover{
  background-color: grey;
  font-size: larger;
  border: 3px solid black;

}


</style>