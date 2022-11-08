<template>

  <header-top/>

  <div class="boton-form-exit">
    <router-link :to="{name:'listaPacientes'}">
      <span class="button-volver">Volver atrás </span>
    </router-link>
  </div>

  <form action="mailto:peinchaust@ucema.edu.ar" method="post" enctype="text/plain">
    <fieldset>
      <legend>IDENTIFICACIÓN PERSONAL</legend>
        <table>
          <tbody>
            <tr>
              <td>Fecha de la consulta</td>
              &nbsp;
              <td>
                <input type=date name="fecha de consulta" id="fecha-consulta">
              </td>
            </tr>
            <tr>
            <td>Nombre Completo</td>
            &nbsp;
            <td>
              <input type="text" name="nombre" id="nombre"
                      placeholder="Ingrese el nombre completo">
            </td>
            </tr>
            <tr>
              <td>Edad</td>
              &nbsp;
              <td>
            <input type="number" name="edad" id="edad"
                   step="1" placeholder="Ingrese la edad">
            </td>
            </tr>
            <tr>
              <td>Sexo</td>
              &nbsp;
              <td>
                <input type="radio" name="sexo" id="sexo" value="M">Masc.
                <input type="radio" name="sexo" id="sexo" value="F">Fem.
            </td>
            </tr>
            <tr>
              <td>Altura</td>
              &nbsp;
              <td>
                <input type="number" name="altura" id="altura" placeholder="Ingrese la altura en metros">&nbsp;m
              </td>
            </tr>
            <tr>
              <td>Peso</td>
              &nbsp;
              <td>
                <input type="number" name="peso" id="peso" placeholder="Ingrese el peso en Kgs"> &nbsp;Kg
              </td>

            </tr>
            <tr>
              <td>Obra social</td>
              &nbsp;
              <td>
                <input type="radio" name="obra social" id="obra-social" value="SI">SI
                <input type="radio" name="obra social" id="obra-social" value="NO">NO
                <input type="text" name="obra social" id="obra-social" placeholder="Nombre de la obra social">
                &nbsp;
                <input type="number" name="obra social" id="" placeholder="Número de obra social">
              </td>

            </tr>
            <tr>
              <td>Domicilio</td>
              &nbsp;
              <td>
                <input type="text" name="direccion" id="direccion" placeholder="Ingrese el domicilio del paciente">
              </td>
            </tr>
            <tr>
              <td>Teléfono</td>
              &nbsp;
              <td>
                <input type="text" name="telefono" id="telefono"
            maxlength="10" value="+54" placeholder="Celular o Teléfono">
              </td>
            </tr>
            <tr>
              <td>Email</td>
              &nbsp;
              <td>
                <input type="email" name="mail" id="mail" value="@" placeholder="Correo Electrónico">
              </td>
            </tr>
          </tbody>
        </table>
    </fieldset>

  <br>


  <br><br>
  <fieldset>
    <legend>HISTORIA CLÍNICA</legend>
    <table>
      <tbody>
      <tr>
        <td>Grupo sanguineo</td>
        <td>
          <select name="sangre" id="grupo-sanguineo">
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
        <td>Antecedentes de enfermedades e intervenciones quirúrgicas anteriores</td>
        <td>
          <textarea name="antecedentes" id="antecedentes" cols="50" rows="5" maxlength="500" placeholder="Ingrese la información adecuada... (MÁXIMO 500 CARACTERES)"></textarea>
        </td>
      </tr>
      <br>
      <tr>
        <td>Padece alguna enfermedad cronica?</td>
        <div>
          <input type="radio" name="enfermedad-cronica" id="enfermedad-cronica" value="SI">SI &nbsp; <input type="radio" name="alergias" id="" value="NO">NO &nbsp; Cual?<input type="text" id="">
        </div>
      </tr>
      <br>
      <tr>
        <td>Toma algun medicamento?</td>
        <div>
          <input type="radio" name="medicamneto" id="medicamento" value="SI">SI &nbsp; <input type="radio" name="alergias" id="" value="NO">NO &nbsp; Cual?<input type="text" id="">
        </div>
      </tr>
      <br>
      <tr>Otras observaciones</tr>
      <td>
        <textarea
            name="observaciones" id="observaciones" cols="50" rows="5"
            maxlength="500" placeholder="Notas extra para tener en cuenta... (MÁXIMO 500 CARACTERES)"></textarea>
      </td>
      </tbody>
    </table>
  </fieldset>

  <br>


  <br>
<div class="enviar-borrar">
  <input type="submit" value="Enviar">

  <input type="reset" value="Borrar Formulario">
</div>

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
  justify-content: space-evenly;
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
.alergias{
  display:flex;
  flex-direction: column;
}
.titulo-alergias{
  align-items: first;
}

input[type=reset] {
  font-size: medium;
  text-align: center;
  padding: 10px 25px;
  color: black;
  background-color: white;
  display: block;
  border: 2px solid black;
  margin-left: 375px;
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

.enviar-borrar{
  display: flex;
  flex-direction: row;
  margin-left:10%;
  margin-bottom: 3%;
}

form{
  margin-left: 10%;
  margin-right: 10%;
}
fieldset{
  background-color: white;
}
legend{
  border: 1px solid black; background-color: white;
}
</style>
