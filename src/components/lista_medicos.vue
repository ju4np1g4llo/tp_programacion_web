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



  <div>
    <table id="tabla_pacientes">
      <thead>
      <tr>
        <th>Fecha</th>
        <th>Nombre</th>
        <th>Numero de Paciente</th>
        <th>Tipo de Consulta</th>
        <th>Numeros de Obras Social</th>
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

.button-agregar{
  margin-left: 275px;
}

.button-volver{
  margin-left: 100px;
}
</style>