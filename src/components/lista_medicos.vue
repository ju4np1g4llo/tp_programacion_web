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
        <th>Nombre del Médico</th>
        <th>Apellido del Médico</th>
        <th>Dirección de consultorio/hospital</th>
        <th>Teléfono/Celular</th>
        <th>Correo Electrónico del Médico</th>
        <th>Editar</th>
        <th>Borrar</th>
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
import axios from "axios";


function getMedicos() {
  axios.get('http://127.0.0.1:5000/api/v1/lista-medicos/')
      .then(function (response) {
        for (let i=0 ; i<response.data.length ; i++) {
          addTableDataRowMeds(response.data[i]);
        }
        document.getElementById("tabla_medicos")
      })
}

function addTableDataRowMeds(medico) {
  let medicList = document.getElementById('tabla_medicos').getElementsByTagName('tbody')[0];
  let row = medicList.insertRow(-1);

  let cell0 = row.insertCell(0);
  cell0.innerHTML = medico.nombre;

  let cell1 = row.insertCell(1);
  cell1.innerHTML = medico.apellido;

  let cell2 = row.insertCell(2);
  cell2.innerHTML = medico.ubicacion;

  let cell3 = row.insertCell(3);
  cell3.innerHTML = medico.telefono;

  let cell4 = row.insertCell(4);
  cell4.innerHTML = medico.correo;

  addDeleteButtonMeds(row, medico.correo)
  addEditButtonMeds(row, medico.correo);

}

function addEditButtonMeds(row, orderId) {
  let cell = row.insertCell(-1);
  let button = document.createElement("input");
  button.id = orderId;
  button.className = "button button-action";
  button.type = "reset";
  button.value = "Borrar";
  button.setAttribute("onclick", "deleteMedico(this.id)")
  cell.appendChild(button);
}
function addDeleteButtonMeds(row, medico_id) {
  let cell = row.insertCell(-1);
  let button = document.createElement("input");
  button.id = medico_id;
  button.className = "button button-action";
  button.type = "submit";
  button.value = "Editar";
  button.setAttribute("onclick", "editMedico(this.id)")
  cell.appendChild(button);
}

getMedicos()

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
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  background-color: white;
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