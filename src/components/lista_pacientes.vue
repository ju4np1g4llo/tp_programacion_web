<template>

  <div class="boton-form">
    <span class="button-formulario1" v-on:click="$emit('menuEvent', 'Pacientes2')">Agregar Paciente </span>

  </div>

</template>

<script>

export default {
  name: "lista_pacientes",
  components: {},
  emits: ['menuEvent'],
}

</script>

<style scoped>
.boton-form{

  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
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
  font-size: larger;
  border: 3px solid black;

}
</style>