<template>
  <header-top/>

  <div class="boton-form-exit">
    <router-link :to="{name:'listaMedicos'}">
      <span class="button-volver">Volver atrás </span>
    </router-link>
  </div>

  <form action="mailto:peinchaust@ucema.edu.ar" method="post" enctype="text/plain">
    <fieldset>
      <legend>IDENTIFICACION MEDICOS</legend>
      <table>
        <tbody>
        <tr>
          <td>Fecha de nacimiento</td>
          <td>
            <input type=date name="fecha de nacimiento" id="">
          </td>
        </tr>
        <tr>
          <td>Edad</td>
          <td>
            <input type="number" name="edad" id=""
                   step="1">
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
            <input type="text" name="altura" id="">
          </td>
        </tr>
        <tr>
          <td>Consultorio donde atiende</td>
          <input type="text" name="direccion" id="">
        </tr>
        <tr>
          <td>Teléfono</td>
          <td>
            <input type="text" name="" id=""
                   maxlength="10" value="+54">
          </td>
        </tr>
        <tr>
          <td>Email</td><input type="email" name="mail" id="" value="@">
        </tr>
        </tbody>
      </table>
    </fieldset>

  <br>
  <br>
  <input type="submit" value="Enviar">
    &nbsp;
  <input type="reset" value="Borrar Formulario" class="btn btn-green">

  </form>
</template>

<script>
import headerTop from "@/components/header-top";


export default {
  name: 'pacientes-for',
  components: {
    headerTop,
  },
}
</script>

<style scoped>
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

input[type=submit]{
  font-size: medium;
  text-align: center;
  padding: 10px 25px;
  color: black;
  background-color: white;
  display: block;
  border: 2px solid black;
}
input[type=reset]{
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


</style>
