<template>

  <header-top/>

  <div class="boton-form">
    <router-link class="button-volver" :to="{name:'HomePage'}">
      <span class="button-volver">Volver atrás </span>
    </router-link>
    <router-link class="button-agregar" :to="{name:'formularioMedicos'}">
      <span class="button-agregar">Agregar Médico </span>
    </router-link>
  </div>


<div id="div-table">
  <div id="lista">
    <table id="tabla_medicos" hidden>
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Ubicación</th>
        <th>Teléfono</th>
        <th>Correo Electrónico</th>
      </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</div>

</template>

<script>
import headerTop from "@/components/header-top";

export default {
  name: "lista_medicos",
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

table, th, td{
  border: 2px solid black;
  border-collapse: collapse;
  padding: 5px;
  background-color: white;
}
tbody{
}
#div-table {
  margin: 10px;
  text-align: center;
}



#lista{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}
</style>