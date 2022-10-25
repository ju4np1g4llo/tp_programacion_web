<template>
  <div class="cuerpo">

    <div class="sector_medicos">
      <nav>
        <a href="./lista_medicos.vue">Nuestros Médicos</a>
      </nav>

    </div>

    <div class="about-us">
      <h1> Sobre nosotros </h1>
      "Easy Files" es una página web la cual permite ordenar todo tipo de información necesaria para un trabajador del área médica. <br> <br>
      Además, se puede almacenar la información de otros compañeros de profesión, para facilitar el intercambio de información.
    </div>

    <div class="sector_pacientes">
      <nav>
        <a href="./lista_pacientes.vue">Nuestros Pacientes</a>
      </nav>
    </div>

  </div>
</template>

<script>

export default {
  name: "body-items"
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

nav a{
  font-size: medium;
  text-align: center;
  margin-top: 110px;
  padding: 10px 25px;
  color: black;
  padding: 10px;
  background-color: white;
  text-decoration: none;
  display: block;
  border: 2px solid black;
}


nav a:hover{
  background-color: grey;
  font-size: larger;
  border: 3px solid black;
}


</style>