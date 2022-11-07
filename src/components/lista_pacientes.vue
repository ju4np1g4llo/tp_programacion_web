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
          <td>{{paciente.fecha}}</td>
          <td>{{paciente.nombre}}</td>
          <td>{{paciente.medico}}</td>
          <td><button class="button">Editar</button></td>
          <td><button class="button">Borrar</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import headerTop from "@/components/header-top";
export default {
  name: "lista_pacientes",
  components: {headerTop},
  data: function() {
return {
    pacientes: [
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"},
                {fecha:"12/12", nombre:"Federico Lopez", medico:"Oscar Rodriguez"}
        ]
  };
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
table{
  width: 50%;
  margin: auto;
  background-color: white;
}
.thead{
  display: flex;
  justify-content: left;
  gap: 90px;
  font-size: 20px;
  border-bottom: 1px solid black;
}
tr{
  display: flex;
  justify-content: space-around;
  margin: auto;
  border-bottom: 1px solid black;
  width: 100%;
}
.trBody:last-child{
  border-bottom: transparent;
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
}

span:hover{
  background-color: grey;
  border: 3px solid black;

}

</style>