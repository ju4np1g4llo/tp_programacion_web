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
import axios from "axios";

export default {
  name: "lista_pacientes",
  components: {headerTop},
}

function getPacientes() {
  axios.get('http://127.0.0.1:5000/api/v1/lista-pacientes/')
      .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
          addTableDataRow(response.data[i]);
        }
        document.getElementById("div-table").hidden = true;
        document.getElementById("tabla_pacientes").hidden = false;
      });
}

function addTableDataRow(paciente) {
  let pacientesList = document.getElementById('tabla_pacientes').getElementsByTagName('tbody')[0];
  let row = pacientesList.insertRow(-1);

  let cell0 = row.insertCell(0);
  cell0.innerHTML = paciente.fecha;

  let cell1 = row.insertCell(1);
  cell1.innerHTML = paciente.nombre;

  let cell2 = row.insertCell(2);
  cell2.innerHTML = paciente.numero_obra;

  let cell3 = row.insertCell(3);
  cell3.innerHTML = paciente.tipo_consulta;

  let cell4 = row.insertCell(4);
  cell4.innerHTML = paciente.edad;

  addEditButton(row, paciente.numero_obra);
  addDeleteButton(row,paciente.numero_obra)
}

function addEditButton(row, paciente_id) {
  let cell = row.insertCell(-1);
  let button = document.createElement("input");
  button.id = paciente_id;
  button.className = "button button-action";
  button.type = "submit";
  button.value = "Editar";
  button.setAttribute("onclick", "editPaciente(this.id)")
  cell.appendChild(button);
}
function addDeleteButton(row, paciente_id) {
  let cell = row.insertCell(-1);
  let button = document.createElement("input");
  button.id = paciente_id;
  button.className = "button button-action";
  button.type = "reset";
  button.value = "Borrar";
  button.setAttribute("onclick", "deletePaciente(this.id)")
  cell.appendChild(button);
}
getPacientes()
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