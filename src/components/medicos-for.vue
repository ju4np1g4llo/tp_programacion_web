<template>

  <header-top/>

  <div class="boton-form-exit">
    <router-link :to="{name:'listaMedicos'}">
      <span class="button-volver">Volver atrás </span>
    </router-link>
  </div>

  <form action="mailto:peinchaust@ucema.edu.ar" method="post" enctype="text/plain">
    <fieldset>
      <legend>IDENTIFICACIÓN MEDICOS</legend>
      <table>
        <tbody>
        <tr>
          <td>Nombre</td>
          <td>
            <input type="text" name="nombre" id=""
                   placeholder="Nombre del medico">
          </td>
        </tr>
        <tr>
          <td>Apellido</td>
          <td>
            <input type="text" name="apellido" id=""
                   placeholder="Apellido del medico">
          </td>
        </tr>
        <tr>
          <td>Sexo</td>
          <td>
            <input type="radio" name="sexo" id="" value="M">Masc.
            <input type="radio" name="sexo" id="" value="F">Fem.
          </td>
        </tr>
        <tr>
          <td>Estudios universitarios</td>
          <td>
            <input type="text" name="altura" id="" placeholder="Ingresar el nivel de estudios complteados">
          </td>
        </tr>
        <tr>
          <td>Consultorio donde atiende</td>
          <input type="text" name="direccion" id="" placeholder="Ingrese la dirección del lugar">
        </tr>
        <tr>
          <td>Teléfono</td>
          <td>
            <input type="text" name="" id=""
                   maxlength="10" value="+54" placeholder="Celular o Teléfono">
          </td>
        </tr>
        <tr>
          <td>Email</td><input value="@" placeholder="Ingrese dirección de correo electrónico">
        </tr>
        </tbody>
      </table>
    </fieldset>

  <br>
  <br>

    <div class="enviar-borrar">      &nbsp;
      <input type="submit" value="Enviar">

      <input type="reset" value="Borrar Formulario">
    </div>

  </form>
</template>

<script>
import headerTop from "@/components/header-top";
import axios from "axios";


export default {
  name: 'pacientes-for',
  data() {
    return {
      nombre: "",
      apellido:"",
      email:""
    }
  },
  methods: {
    orderCart() {
      axios.post("http://localhost:5000/api/v1/orders", {
        user: this.fullName,
        address: this.address,
        phone_number: this.phoneNumber,
        shopping_cart: JSON.parse(this.$route.query['shoppingCart']),
      })
          .then(response => {
            console.log(response)
            this.$router.push({name: "CheckoutSuccessRoute", params: {order_id: response.data["order_id"]}})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "CheckoutServerErrorRoute"})
          });
    }
  },
  components: {
    headerTop,
  },

}
</script>

<style scoped>
template{
  overflow-y: hidden;
}
.boton-form-exit{
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
  border: 3px solid black;
}

input[type=reset] {
  font-size: medium;
  text-align: center;
  padding: 10px 25px;
  color: black;
  background-color: white;
  display: block;
  border: 2px solid black;
  margin-left: 300px;
}

input[type=submit] {
  font-size: medium;
  text-align: center;
  padding: 10px 25px;
  color: black;
  background-color: white;
  display: block;
  border: 2px solid black;
}
input[type=reset]:hover{
  background-color: grey;
  border: 3px solid black;
}
input[type=submit]:hover{
  background-color: grey;
  border: 3px solid black;
}

fieldset{
  background-color: white;
}
.enviar-borrar{
  display: flex;
  flex-direction: row;
  margin-left:-35%;
  margin-bottom: 18%;
  justify-content: space-evenly;
}
form{
  margin-left: 10%;
  margin-right: 10%;
}
legend{
  border: 1px solid black; background-color: white;
}

</style>
