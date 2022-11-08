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
        <tr>
          <th>Fecha de consulta</th>
          <th>Nombre del Paciente</th>
          <th>Número de Obra Social</th>
          <th>Tipo de Consulta</th>
          <th>Edad</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script>
import headerTop from "@/components/header-top";

export default {
  name: "lista_pacientes",
  components: {headerTop},
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
table, th, td {
  border: 1px solid black;
  padding: 5px;
  background-color: white;
  border-collapse: collapse;
  margin-bottom: 30%;
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