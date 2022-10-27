<template>
  <header-top></header-top>
  <form
      action="mailto:peinchaust@ucema.edu.ar" method="post" enctype="text/plain">


    <fieldset>
      <legend>IDENTIFICACION PERSONAL</legend>


      <table border="0">
        <tbody>

        <tr>
          <td>Nombre y Apellido</td>
          <td>
            <input type="text" name="nombre" id=""
                   size="30"
                   placeholder="Ingrese el Nombre y Apellido">
          </td>
        </tr>
        <tr>
          <td>Edad</td>
          <td>
            <input type="number" name="edad" id="" value="18"
                   step="0.5">
          </td>
        </tr>
        <tr>
          <td>Sexo</td>
          <td>
            <input type="radio" name="sexo" id="" value="M">Masc.
            <input type="radio" name="sexo" id="" value="F">Fem.
            <input type="radio" name="sexo" id="" value="O">Otro
            <input type="radio" name="sexo" id="" value="PNO">Pref. no decir


          </td>
        </tr>
        <tr>
          <td>Teléfono</td>
          <td>
            <select name="prefijo" id="">
              <option value="+51">Perú</option>
              <option value="+549" selected>Argentina</option>
              <option value="+55">Brasil</option>
              <option value="+56">Chile</option>
              <option value="+595">Paraguay</option>
              <option value="+598">Uruguay</option>
            </select>
            <input type="text" name="" id=""
                   maxlength="10">
          </td>
        </tr>
        </tbody>
      </table>
      <label for="mailCV">Mail: </label>
      <input type="email" name="mailCV" id="" value="@">
    </fieldset>

    <br>


    <br><br>
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
  }
}
</script>
