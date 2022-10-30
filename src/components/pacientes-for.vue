<template>
  <header-top/>
  <div class="boton-form-exit">
    <span class="button-volver" v-on:click="$emit('menuEvent', 'Pacientes')">Volver atrás </span>
  </div>

  <form action="mailto:peinchaust@ucema.edu.ar" method="post" enctype="text/plain">
    <fieldset>
      <legend>IDENTIFICACION PERSONAL</legend>
        <table border="0">
          <tbody> placeholder="Ingrese el Nombre y Apellido">
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
    <td>Altura</td>
    <td>
      <input type="number" name="altura" id="">m
    </td>
  </tr>
  <tr>
    <td>Peso</td>
    <td>
      <input type="number" name="peso" id="">Kg
    </td>

  </tr>
  <tr>
    <td>Obra social</td>
    <td>
      <input type="radio" name="obra social" id="" value="SI">SI
      <input type="radio" name="obra social" id="" value="NO">NO
      <input type="text" name="obra social" id="" placeholder="Ingrese la obra social">
      <input type="numbre" name="obra social" id="" placeholder="Ingrese el numero de obra social">
    </td>

  </tr>
  <tr>
    <td>Direccion</td>
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
    <td>
      <input type="email" name="mail" id="" value="@">
    </td>
  </tr>
  </tbody>
  </table>
  </fieldset>

  <br>


  <br><br>
  <fieldset>
    <legend>ANTECEDENTES MEDICOS</legend>
    <table>
      <tbody>
      <tr>
        <td>Grupo sanguineo</td>
        <td>
          <select name="sangre" id="">
            <option value="tipo de sangre:">A+</option>
            <option value="tipo de sangre:">A-</option>
            <option value="tipo de sangre:">B+</option>
            <option value="tipo de sangre:">B-</option>
            <option value="tipo de sangre:">O+</option>
            <option value="tipo de sangre:">O-</option>
            <option value="tipo de sangre:">AB+</option>
            <option value="tipo de sangre:">AB-</option>

          </select>
        </td>
      </tr>
      <tr>
        <td>Alergias</td>

      </tr>
      </tbody>
    </table>
  </fieldset>

  <br>


  <br>
  <input type="submit" value="Enviar">
  <input type="reset" value="Borrar Formulario">

  </form>
</template>

<script>
import HeaderTop from "@/App";


export default {
  name: 'pacientes-for',
  components: {
    HeaderTop,
  },
  emits: ['menuEvent']
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
  font-size: larger;
  border: 3px solid black;

}
</style>
