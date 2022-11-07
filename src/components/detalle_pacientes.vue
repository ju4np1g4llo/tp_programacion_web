<template>

    <header-top/>
  
    <div class="boton-form">
      <router-link class="button-volver" :to="{name:'listaPacientes'}">
        <span class="button-volver">Volver atrás </span>
      </router-link>
    </div>
    <div class="lista">
      <div class="card">
        <div class="h2">
          <h2>Ficha médica</h2>
        </div>
        <div class="fichaMedica">
          <div class="divLeft">
            <div class="information">
              <p>Nombre:</p>
              <p>Edad:</p>
              <p>Sexo:</p>
              <p>Peso:</p>
              <p>Obra social:</p>
            </div>
            <div class="data" v-for="(paciente) in detallePaciente" :key="paciente">
              <p>{{paciente.name}}</p>
              <p>{{paciente.phone}}</p>
              <p>{{paciente.username}}</p>
              <p>{{paciente.email}}</p>
              <p>{{paciente.id}}</p>
            </div>
          </div>
        <div class="divRight">
          <div class="information">
            <p>Nombre:</p>
            <p>Edad:</p>
            <p>Sexo:</p>
            <p>Peso:</p>
            <p>Obra social:</p>
          </div>
          <div class="data" v-for="(paciente) in detallePaciente" :key="paciente">
            <p>{{paciente.name}}</p>
            <p>{{paciente.phone}}</p>
            <p>{{paciente.username}}</p>
            <p>{{paciente.email}}</p>
            <p>{{paciente.id}}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import headerTop from "@/components/header-top";
import axios from "axios";

export default {
    name: "detalle_pacientes",
    components: {headerTop},
    data(){
        return {
          detallePaciente:[]
        }},
    created: function(){
        this.getDetallePaciente();
    },
    methods: {
      getDetallePaciente()
            {
              let url = 'https://jsonplaceholder.typicode.com/users/' + this.$route.params.id;
                axios.get(url).then((data) => {
                    this.detallePaciente = data;
                    console.log(data);
                });
            }
    }
}
</script>

<style scoped>
.boton-form{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    padding-top: 3%;
    justify-content: center;
}
.lista{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 50px;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  gap: 30px;
  padding: 40px;
  border: 2px solid black;
  width: 600px;
}
.fichaMedica{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
}
.divLeft, .divRight{
  display: flex;
  flex-direction: row;
}
.data, .information{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.information p {
  font-weight: 600;
  border-bottom: 1px solid black;
}
.data p {
  text-align: end;
  border-bottom: 1px solid black;
}
th, td{
    padding: 10px;
    color: black;
}
table, th, td {
    border: 1px solid black;
    padding: 5px;
    background-color: white;
    border-collapse: collapse;
}

table{
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    width: 50%;
    margin-top: 40px;
    background-color: white;
}
span{
    font-size: medium;
    text-align: center;
    padding: 10px 25px;
    color: black;
    background-color: white;
    display: block;
    border: 2px solid black;
}
span:hover{
    background-color: grey;
    border: 3px solid black;
}
</style>