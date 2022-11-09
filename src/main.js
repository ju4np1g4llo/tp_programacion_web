import * as Vue from 'vue';
import * as  VueRouter from 'vue-router';


import App from "@/App";
import homePage from "@/views/home-page";
import lista_medicos from "@/components/lista_medicos";
import lista_pacientes from "@/components/lista_pacientes";
import pacientesFor from "@/components/pacientes-for";
import medicosFor from "@/components/medicos-for";
import detalle_pacientes from "@/components/detalle_pacientes"
import detalle_medicos from "@/components/detalle_medicos"

const routes = [
    {path: '/', name: "HomePage", component: homePage},
    {path: '/lista_medicos', name: "listaMedicos", component: lista_medicos},
    {path: '/lista_pacientes', name: "listaPacientes", component: lista_pacientes},
    {path: '/formulario_pacientes', name: "formularioPacientes", component: pacientesFor},
    {path: '/formulario_medicos', name: "formularioMedicos", component: medicosFor},
    {path: '/paciente/:id', name: "detallePacientes", component: detalle_pacientes},
    {path: '/medico/:id', name: "detalleMedicos", component: detalle_medicos}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');




