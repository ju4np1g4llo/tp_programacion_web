<template>

  <header-top/>

  <div class="boton-form">
    <router-link class="button-volver" :to="{name:'HomePage'}">
      <span class="button-volver">Volver atrás </span>
    </router-link>
    <router-link class="button-agregar" :to="{name:'formularioPacientes'}">
      <span class="button-agregar">Agregar Paciente </span>
    </router-link>

  </div>
  <div class="lista">
    <table>
      <thead>
        <tr class="thead">
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Medico</th>
        </tr>
      </thead>
      <tbody>
        <tr class="trBody" v-for="paciente in pacientes" :key="paciente">
          <td>{{paciente.id}}</td>
          <td><router-link class="button-volver" :to="'/paciente/'+ paciente.id">
            {{paciente.name}}
          </router-link></td>
          <td>{{paciente.email}}</td>
          <td class="buttons"><button class="button">Editar</button><button class="button">Borrar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import headerTop from "@/components/header-top";
import axios from "axios";

export default {
  name: "lista_pacientes",
  components: {headerTop},
  mounted(){
    this.getPacientes()
  },
  data() {
    return {
      pacientes: []
    }
  },
  methods: {
    getPacientes(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.pacientes = response.data;
        console.log(response.data);
      })
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
  justify-content: space-evenly;
}
.lista{
  min-height: 100vh;
  margin-top: 50px;
}
.buttons{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
table{
  width: 50%;
  margin: auto;
  background-color: white;
}
th, td{
  padding: 10px;
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
.button{
  cursor: pointer;
  padding: 8px;
}

span:hover{
  background-color: grey;
  border: 3px solid black;
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
}

#lista{
  display: flex;
  justify-content: center;
  margin-top: 3%;
  text-align: center;
}
</style>