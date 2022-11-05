import * as Vue from 'vue';
import * as  VueRouter from 'vue-router';


import App from "@/App";
import homePage from "@/views/home-page";
import lista_medicos from "@/components/lista_medicos";
import lista_pacientes from "@/components/lista_pacientes";
import pacientesFor from "@/components/pacientes-for";
import medicosFor from "@/components/medicos-for";

const routes = [
    {path: '/', name: "HomePage", component: homePage},
    {path: '/lista_medicos', name: "listaMedicos", component: lista_medicos},
    {path: '/lista_pacientes', name: "listaPacientes", component: lista_pacientes},
    {path: '/formulario_pacientes', name: "formularioPacientes", component: pacientesFor},
    {path: '/formulario_medicos', name: "formularioMedicos", component: medicosFor},

];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');



import axios from "axios";


function getPurchaseOrders() {
    axios.get('http://127.0.0.1:5000/api/v1/purchase-orders/')
        .then(function (response) {
            for (let i=0 ; i<response.data.length ; i++) {
                addTableDataRow(response.data[i]);
            }
            document.getElementById("tabla_pacientes").hidden = false;
        })
}

function addTableDataRow(purchaseOrder) {
    let purOrdTableBody = document.getElementById('tabla_pacientes').getElementsByTagName('tbody')[0];
    let row = purOrdTableBody.insertRow(-1);

    let cell0 = row.insertCell(0);
    cell0.innerHTML = purchaseOrder.fecha;

    let cell1 = row.insertCell(1);
    cell1.innerHTML = purchaseOrder.nombre;

    let cell2 = row.insertCell(2);
    cell2.innerHTML = purchaseOrder.numero_obra;

    let cell3 = row.insertCell(3);
    cell3.innerHTML = purchaseOrder.tipo_consulta;

    let cell4 = row.insertCell(4);
    cell4.innerHTML = purchaseOrder.edad;

    addEditButton(row, purchaseOrder.nombre);
}

function addEditButton(row, orderId) {
    let cell = row.insertCell(-1);
    let button = document.createElement("input");
    button.id = orderId;
    button.className = "button button-action";
    button.type = "submit";
    button.value = "Editar";
    button.setAttribute("onclick", "editPurchaseOrder(this.id)")
    cell.appendChild(button);
}

getPurchaseOrders()


