<template>

    <header-top/>
  
    <div class="boton-form">
      <router-link class="button-volver" :to="{name:'listaPacientes'}">
        <span class="button-volver">Volver atrás </span>
      </router-link>
    </div>
    <div class="lista">
        <h2>Ficha medica</h2>
      <table>
        <thead>
          <tr class="thead">
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Medico</th>
            <th>Obra social</th>
            <th>Numero de orden</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBody" v-for="(detalle, index) in detallePaciente" :key="index">
            <td>{{detalle.order_date}}</td>
            <td>{{detalle.order_id}}</td>
            <td>{{detalle.state}}</td>
            <td>{{detalle.supplier}}</td>
            <td>{{detalle.cuit_supplier}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import headerTop from "@/components/header-top";
// import axios from "axios";

export default {
    name: "detalle_pacientes",
    components: {headerTop},
    mounted(){
    this.getDetallePaciente()
    },
    data() {
    return {
        detallePaciente: [{
            "order_date": "12/12/2021",
            "order_id": "000001",
            "state": "Ordenado",
            "supplier": "BEAN",
            "cuit_supplier": "123123",
            "items": [
                {
                    "item": "Beans 1kg",
                    "quantity": "2"
                },
                {
                    "item": "Azucar 1kg",
                    "quantity": "6"
                }
            ],
            "total": "322",
            "deadline": "14/12/2021"
    }]
    }
    },
    /* getDetallePaciente(){
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
        this.detallePaciente = response.data;
        console.log(response)
        })
    }} */
    
}
</script>

<style scoped>
.boton-form{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    padding-top: 3%;
    justify-content: center;
}

th, td{
    padding: 10px;
    color: black;
}
table, th, td {
    border: 1px solid black;
    padding: 5px;
    background-color: white;
    border-collapse: collapse;
}

table{
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    width: 50%;
    margin-top: 40px;
    background-color: white;
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
.lista{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 50px;
}
</style>