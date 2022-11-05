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

  <div id="lista">
    <table id="tabla_pacientes">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Número de Obra Social</th>
          <th>Tipo de Consulta</th>
          <th>Edad</th>
          <th>Editar/Borrar</th>
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

.button-volver{
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
  border: 2px solid black;
  border-collapse: collapse;
  padding: 5px;
  background-color: white;


}
th {
  background-color: white;
}

#lista{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

</style>