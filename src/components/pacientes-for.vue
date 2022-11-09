<template>

  <header-top/>

  <div class="boton-form-exit">
    <router-link :to="{name:'listaPacientes'}">
      <span class="button-volver">Volver atrás </span>
    </router-link>
  </div>

  <form method="post" enctype="text/plain">
    <fieldset>
      <legend>IDENTIFICACIÓN PERSONAL</legend>
        <table>
          <tbody>
            <tr>
              <td>Fecha de la consulta</td>
              &nbsp;
              <td>
                <input type=date v-model="Fecha_consulta">
              </td>
            </tr>
            <tr>
            <td>Nombre Completo</td>
            &nbsp;
            <td>
              <input type="text" v-model="Nombre"
                      placeholder="Ingrese el nombre completo">
            </td>
            </tr>
            <tr>
              <td>Edad</td>
              &nbsp;
              <td>
            <input type="number" v-model="Edad"
                   step="1" placeholder="Ingrese la edad">
            </td>
            </tr>
            <tr>
              <td>Sexo</td>
              &nbsp;
              <td>
                <input type="radio" v-model="Sexo" value="M">Masc.
                <input type="radio" v-model="Sexo" value="F">Fem.
            </td>
            </tr>
            <tr>
              <td>Altura</td>
              &nbsp;
              <td>
                <input type="number" v-model="Altura" placeholder="Ingrese la altura en metros">&nbsp;cm
              </td>
            </tr>
            <tr>
              <td>Peso</td>
              &nbsp;
              <td>
                <input type="number" v-model="Peso" placeholder="Ingrese el peso en Kgs"> &nbsp;kg
              </td>

            </tr>
            <tr>
              <td>Obra social</td>
              &nbsp;
              <td>
                <input type="radio" v-model="Obra_social_tiene"  value="SI">SI
                <input type="radio" v-model="Obra_social_tiene"  value="NO">NO
                <input type="text"  v-model="Obra_social_nombre" placeholder="Nombre de la obra social">
                &nbsp;
                <input type="number" v-model="Obra_social_numero" placeholder="Número de obra social">
              </td>

            </tr>
            <tr>
              <td>Domicilio</td>
              &nbsp;
              <td>
                <input type="text" v-model="Direccion" placeholder="Ingrese el domicilio del paciente">
              </td>
            </tr>
            <tr>
              <td>Teléfono</td>
              &nbsp;
              <td>
                <input type="text" v-model="Telefono"
            maxlength="14" placeholder="Celular o Teléfono">
              </td>
            </tr>
            <tr>
              <td>Email</td>
              &nbsp;
              <td>
                <input type="email" v-model="Mail" placeholder="Correo Electrónico">
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
          <select v-model="Grupo_sanguineo">
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
        <div>
          <input type="checkbox" v-model="Alergias_tiene_si" value="SI">SI &nbsp; <input type="checkbox" v-model="Alergias_tiene_no" value="NO">NO &nbsp; Cual?<input type="text" v-model="Alergias_cual">
        </div>

      </tr>
      <br>
      <tr>
        <td>Antecedentes de enfermedades e intervenciones quirúrgicas anteriores</td>
        <td>
          <textarea v-model="Antecedentes" cols="50" rows="5" maxlength="500" placeholder="Ingrese la información adecuada... (MÁXIMO 500 CARACTERES)"></textarea>
        </td>
      </tr>
      <br>
      <tr>
        <td>Padece alguna enfermedad cronica?</td>
        <div>
          <input type="checkbox" v-model="Enfermedad_cronica_tiene_si" value="SI">SI &nbsp; <input type="checkbox" v-model="Enfermedad_cronica_tiene_no" value="NO">NO &nbsp; Cual?<input type="text" v-model="Enfermedad_cronica_cual">
        </div>
      </tr>
      <br>
      <tr>
        <td>Toma algun medicamento?</td>
        <div>
          <input type="checkbox" v-model="Medicamento_toma_si" value="SI">SI &nbsp; <input type="checkbox" v-model="Medicamento_toma_no" value="NO">NO &nbsp; Cual?<input type="text" v-model="Medicamento_cual">
        </div>
      </tr>
      <br>
      <tr>Otras obvervaciones</tr>
      <td>
        <textarea
            v-model="Observacion" cols="50" rows="5"
            maxlength="500" placeholder="Notas extra para tener en cuenta... (MÁXIMO 500 CARACTERES)"></textarea>
      </td>
      </tbody>
    </table>
  </fieldset>

  <br>


  <br>
    <div class="enviar-borrar">
      <input type="submit" value="Enviar" onclick="addPaciente()">

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
      Fecha_consulta: "",
      Nombre: "",
      Edad: "",
      Sexo: "",
      Altura: "",
      Peso: "",
      Obra_social_tiene: "",
      Obra_social_nombre: "",
      Obra_social_numero: "",
      Direccion: "",
      Telefono: "",
      Mail: "",
      Grupo_sanguineo: "",
      Alergias_cual: "",
      Alergias_tiene_si: "",
      Alergias_tiene_no: "",
      Antecedentes: "",
      Enfermedad_cronica_tiene_si: "",
      Enfermedad_cronica_tiene_no: "",
      Enfermedad_cronica_cual: "",
      Medicamento_toma_si: "",
      Medicamento_toma_no: "",
      Medicamento_cual: "",
      Observacion: "",
    }
  },
  components: {
    headerTop,
  },
  methods: {
    addPaciente() {

      axios.post('http://127.0.0.1:5000/api/v1/lista-pacientes', {
        'Fecha_consulta': this.Fecha_consulta,
        'Nombre': this.Nombre,
        'Edad': this.Edad,
        'Sexo': this.Sexo,
        'Altura': this.Altura,
        'Peso': this.Peso,
        'Obra_social_tiene': this.Obra_social_tiene,
        'Obra_social_nombre': this.Obra_social_nombre,
        'Obra_social_numero': this.Obra_social_numero,
        'Direccion': this.Direccion,
        'Telefono': this.Telefono,
        'Mail': this.Mail,
        'Grupo_sanguineo': this.Grupo_sanguineo,
        'Alergias_tiene_si': this.Alergias_tiene_si,
        'Alergias_tiene_no': this.Alergias_tiene_no,
        'Alergias_cual': this.Alergias_cual,
        'Antecedentes': this.Antecedentes,
        'Enfermedad_cronica_tiene_si': this.Enfermedad_cronica_tiene_si,
        'Enfermedad_cronica_tiene_no': this.Enfermedad_cronica_tiene_no,
        'Enfermedad_cual': this.Enfermedad_cronica_cual,
        'Medicamento_toma_si': this.Medicamento_toma_si,
        'Medicamento_toma_no': this.Medicamento_toma_no,
        'Medicamento_cual': this.Medicamento_cual,
        'Observacion': this.Observacion,
      })
          .then(resp => console.log(resp))
    }
  }
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
