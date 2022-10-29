<template>
  <div class="boton-form">
    <span class="button-volver" v-on:click="$emit('menuEvent', 'mainMenu')">Volver atrás </span>
    <span class="button-agregar" v-on:click="$emit('menuEvent', 'Medicos2')">Agregar Médico </span>
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

export default {
  name: "lista_medicos",
  components: {},
  emits: ['menuEvent'],
  methods: {
    showMenuOptionSelected(option) {
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true;
    }
  },
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
  font-size: larger;
  border: 3px solid black;

}

.button-agregar{
  margin-left: 29.5%;
}

.button-volver{
  margin-left: 10%;
}
</style>