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

/* function editPurchaseOrder(id) {
  console.log("Button clicked: " + id)

  axios.get(`https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        // handle error here
        console.log(error);
      });
} */


function getPurchaseOrders() {

  axios.get('https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/')
      .then(function (response) {
        for (let i=0 ; i<response.data.length ; i++) {
          addTableDataRow(response.data[i]);
        }
        document.getElementById("data-loder").hidden = true;
        document.getElementById("purchase-table").hidden = false;
      })
      .catch(function (error) {
        // handle error here
        console.log(error);
      });
}

function addTableDataRow(purchaseOrder) {
  let purOrdTableBody = document.getElementById('purchase-table').getElementsByTagName('tbody')[0];
  let row = purOrdTableBody.insertRow(-1);

  let cell0 = row.insertCell(0);
  cell0.innerHTML = purchaseOrder.order_date;

  let cell1 = row.insertCell(1);
  cell1.innerHTML = purchaseOrder.order_id;

  let cell2 = row.insertCell(2);
  cell2.innerHTML = purchaseOrder.state;

  let cell3 = row.insertCell(3);
  cell3.innerHTML = purchaseOrder.supplier;

  let cell4 = row.insertCell(4);
  cell4.innerHTML = purchaseOrder.cuit_supplier;

  let cell5 = row.insertCell(5);
  cell5.appendChild(rederItemsData(purchaseOrder.items))

  let cell6 = row.insertCell(6);
  cell6.innerHTML = purchaseOrder.total;

  let cell7 = row.insertCell(7);
  cell7.innerHTML = purchaseOrder.deadline;

  addEditButton(row, purchaseOrder.order_id);
}

function rederItemsData(items) {
  let itemsTable = document.createElement("table");
  var itemsTableBody = document.createElement("tbody");
  itemsTable.appendChild(itemsTableBody);

  for (var i=0 ; i<items.length ; i++) {
    var rowItems = itemsTableBody.insertRow(-1);
    let itemCell1 = rowItems.insertCell(0);
    itemCell1.innerHTML = items[i].item;

    let itemCell2 = rowItems.insertCell(1);
    itemCell2.innerHTML = items[i].quantity;
  }
  return itemsTable;
}

function addEditButton(row, orderId) {
  let cell = row.insertCell(-1);
  let button = document.createElement("input");
  button.id = orderId;
  button.type = "submit";
  button.value = "Editar";
  button.setAttribute("onclick", "editPurchaseOrder(this.id)")
  cell.appendChild(button);
}

getPurchaseOrders();

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