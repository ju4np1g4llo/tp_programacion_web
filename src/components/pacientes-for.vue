<template>
  <header-top/>
  <div class="boton-form-exit">
    <span class="button-volver" v-on:click="$emit('menuEvent', 'Pacientes')">Volver atrás </span>
  </div>

  <form action="mailto:peinchaust@ucema.edu.ar" method="post" enctype="text/plain">
    <fieldset>
      <legend>IDENTIFICACION PERSONAL</legend>
        <table>
          <tbody>
            <tr>
              <td>Fecha de nacimiento</td>
              &nbsp;
              <td>
                <input type=date name="fecha de nacimiento" id="">
              </td>
            </tr>
            <tr>
              <td>Edad</td>
              &nbsp;
              <td>
            <input type="number" name="edad" id=""
                   step="1">
            </td>
            </tr>
            <tr>
              <td>Sexo</td>
              &nbsp;
              <td>
                <input type="radio" name="sexo" id="" value="M">Masc.
                <input type="radio" name="sexo" id="" value="F">Fem.
            </td>
            </tr>
            <tr>
              <td>Altura</td>
              &nbsp;
              <td>
                <input type="number" name="altura" id="">&nbsp;m
              </td>
            </tr>
            <tr>
              <td>Peso</td>
              &nbsp;
              <td>
                <input type="number" name="peso" id=""> &nbsp;Kg
              </td>

            </tr>
            <tr>
              <td>Obra social</td>
              &nbsp;
              <td>
                <input type="radio" name="obra social" id="" value="SI">SI
                <input type="radio" name="obra social" id="" value="NO">NO
                <input type="text" name="obra social" id="" placeholder="Ingrese la obra social">
                &nbsp;
                <input type="numbre" name="obra social" id="" placeholder="Ingrese el numero de obra social">
              </td>

            </tr>
            <tr>
              <td>Direccion</td>
              &nbsp;
              <td>
                <input type="text" name="direccion" id="">
              </td>
            </tr>
            <tr>
              <td>Teléfono</td>
              &nbsp;
              <td>
                <input type="text" name="" id=""
            maxlength="10" value="+54">
              </td>
            </tr>
            <tr>
              <td>Email</td>
              &nbsp;
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
      <br>
      <br>
      <tr>
        <td class="titulo-alergias">Alergias</td>

        <div class="alergias">
          <div>
            <td>Antibioticos</td> <input type="radio" name="alergias" id="" value="SI">SI <input type="radio" name="alergias" id="" value="NO">NO &nbsp;Cual?<input type="text" id="">
          </div>
          <br>
          <div>
            <td>Medicamentos</td> <input type="radio" name="alergias" id="" value="SI">SI <input type="radio" name="alergias" id="" value="NO">NO &nbsp;Cual?<input type="text" id="">
          </div>
          <br>
          <div>
            <td>Alimentos</td> <input type="radio" name="alergias" id="" value="SI">SI <input type="radio" name="alergias" id="" value="NO">NO &nbsp;Cual?<input type="text" id="">
          </div>
          <br>
          <div>
            <td>Animales</td> <input type="radio" name="alergias" id="" value="SI">SI <input type="radio" name="alergias" id="" value="NO">NO &nbsp;Cual?<input type="text" id="">
          </div>
          <br>
          <div>
            <td>Picaduras</td> <input type="radio" name="alergias" id="" value="SI">SI <input type="radio" name="alergias" id="" value="NO">NO &nbsp;Cual?<input type="text" id="">
          </div>
        </div>
      </tr>
      <br>
      <tr>
        <td>Antecedentes de enfermedades e intervenciones quirurgicas anteriores de importancia</td>
        <td>
          <textarea name="" id="" cols="50" rows="5" maxlength="500"></textarea>
        </td>
      </tr>
      <br>
      <tr>
        <td>Padece alguna enfermedad cronica?</td>
        <div>
          <input type="radio" name="cronica" id="" value="SI">SI &nbsp; <input type="radio" name="alergias" id="" value="NO">NO &nbsp; Cual?<input type="text" id="">
        </div>
      </tr>
      <br>
      <tr>
        <td>Toma algun medicamento?</td>
        <div>
          <input type="radio" name="cronica" id="" value="SI">SI &nbsp; <input type="radio" name="alergias" id="" value="NO">NO &nbsp; Cual?<input type="text" id="">
        </div>
      </tr>
      <br>
      <tr>Otras obvervaciones</tr>
      <td>
        <textarea
            name="" id="" cols="50" rows="5"
            maxlength="500"></textarea>
      </td>
      </tbody>
    </table>
  </fieldset>

  <br>


  <br>
<div class="enviar-borrar">
  <input type="submit" value="Enviar">
  &nbsp;
  <input type="reset" value="Borrar Formulario">
</div>

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
.alergias{
  display:flex;
  flex-direction: column;
}
.titulo-alergias{
  align-items: first;
}
.medicamento{
  display:flex;
  flex-flow: column-reverse;
}
</style>
