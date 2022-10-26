<template>
  <div class="boton-form">
    <span class="button-formulario1" v-on:click="$emit('formEvent', 'pacienteForm')">Agregar Paciente</span>

  </div>

</template>

<script>
export default {
  name: "agregar-persona"
}
</script>

<style scoped>

</style>