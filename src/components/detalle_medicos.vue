<template>

    <header-top/>

    <div class="boton-form">
        <router-link class="button-volver" :to="{name:'listaMedicos'}">
        <span class="button-volver">Volver atrás </span>
        </router-link>
    </div>
    <div class="lista">
        <div class="card">
        <div class="h2">
            <h2>Datos del medico</h2>
        </div>
        <div class="datosMedico">
            <div class="divLeft">
            <div class="information">
                <p>Nombre Completo:</p>
                <p>Edad:</p>
                <p>Sexo:</p>
                <p>Estudios:</p>
                <p>Donde atiende:</p>
                <p>Domicilio:</p>
                <p>Teléfono:</p>
                <p>Email:</p>
            </div>
            <div class="data" v-for="(medico) in detalleMedico" :key="medico">
                <p>{{medico.name}}</p>
                <p>{{medico.phone}}</p>
                <p>{{medico.username}}</p>
                <p>{{medico.email}}</p>
                <p>{{medico.id}}</p>
                <p>{{medico.phone}}</p>
                <p>{{medico.username}}</p>
                <p>{{medico.email}}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import headerTop from "@/components/header-top";
import axios from "axios";

export default {
    name: "detalle_medicos",
    components: {headerTop},
    data(){
        return {
            detalleMedico:[]
        }},
    created: function(){
        this.getDetalleMedico();
    },
    methods: {
        getDetalleMedico()
            {
                let url = 'https://jsonplaceholder.typicode.com/users/' + this.$route.params.id;
                axios.get(url).then((data) => {
                    this.detalleMedico = data;
                    console.log(data);
                });
            }
    }
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
.lista{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 50px;
    margin-bottom: 50px;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap: 30px;
    padding: 40px;
    border: 2px solid black;
    width: 500px;
}
.datosMedico{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.divLeft, .divRight{
    display: flex;
    flex-direction: row;
}
.data, .information{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.information p {
    font-weight: 600;
    border-bottom: 1px solid black;
}
.data p {
    text-align: end;
    border-bottom: 1px solid black;
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
</style>