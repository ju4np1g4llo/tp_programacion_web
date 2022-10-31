<template>
  <div class="comofunciona">
    <div class="funciona">
      <h1>¿Cómo funciona Easy-Files?</h1>
      <img src="../assets/carpeta.jpg" alt="carpeta">
    </div>

    <div class="explicacion1">
      <h2>I. Visualización de la base de datos. </h2>
      <h3>Si quiere ver la lista de personal médico, tocar el botón "Nuestros Médicos"<br> <br> <br> Si quiere ver la lista de pacientes, tocar el botón "Nuestros Pacientes"</h3><br>
    </div>
    <div class="explicacion1">
      <h2>II. Agregar personas a la base de datos. </h2>
      <h3>En la parte superior, aparecerá un botón para agregar una persona a la lista elegida <br> <br> <br> Al tocarlo, deberá rellenar un formulario, ingresando la información adecuada en cada campo</h3><br>
    </div>
    <div class="explicacion1">
      <h2>III. Visualización detallada individual. </h2>
      <h3>Las listas generales no muestran toda la información en detalle, sino que muestran lo más importante <br> <br> <br> Al tocar en el nombre de una persona, se podrá visualizar con exactitud todo lo que usted ha ingresado en la base de datos</h3><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "como-funciona"
}
</script>

<style scoped>
.funciona{
  width: auto;
  padding-left: 4%;
  border: 2px solid black;
  background-color: white;
  margin-left: 8.8%;
}

h2{
  padding-left: 1%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
}

.funciona img {
  margin-left: -9%;
  margin-top: -4%;
  padding-left: 3%;
}

.explicacion1{
  margin-left: 4.97%;
  border: 2px solid black;
  background-color: white;
  padding: 1%;
  width: auto;
}
.comofunciona{
  display: flex;
  flex-direction: row;
  margin-bottom: 1%;
  margin-top: -2%;
  margin-left: -4.2%;
  width: 100%;
  justify-content: space-evenly;
}

</style>