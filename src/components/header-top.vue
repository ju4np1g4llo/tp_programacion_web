<template>
  <div class="header">

    <div class="easy">
      <h1 style="text-align:center">Easy Files</h1>
      <p style="text-align: center">¡Informacion bien guardada! </p>

    </div>

    <img src="../assets/logo.jpg" alt="logoweb" style="height: 220px;position: absolute; padding-left: 1.5%;">

    <div class="date">
      <p>Desarrollado en 2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-top"
}
</script>

<style scoped>
.header{
  background-image: url("https://img.freepik.com/foto-gratis/fondo-borroso-oscuro-abstracto-color-textura-degradado-suave-patron-sitio-web-brillante-brillante-encabezado-banner-o-imagen-arte-grafico-barra-lateral_1258-83074.jpg?w=826&t=st=1666635828~exp=1666636428~hmac=fe42181f5e33802056692d9ae127c3686f8e6f98b1039c5155a20019fbef4187.jpg");
  margin-top: -1%;
  color: white;
  background-size: 100% ;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: larger;
  margin-left: -10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: grey;
  border-bottom: 3px solid #0a0a0a;

}
.easy{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size:x-large;
  margin-left: -8%;

}
.date{
  font-family: georgia;
  /*display: flex;
  flex-direction: column;*/
}


</style>