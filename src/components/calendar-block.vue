<template>
  <div id="calendario">
    <div id="anterior" onclick="mesantes()"></div>
    <div id="posterior" onclick="mesdespues()"></div>
    <h2 id="titulos"></h2>
    <table id="diasc">
      <tr id="fila0"><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>
      <tr id="fila1"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr id="fila2"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr id="fila3"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr id="fila4"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr id="fila5"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr id="fila6"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
    <div id="fechaactual"><i onclick="actualizar()">HOY: </i></div>
    <div id="buscafecha">
      <form action="#" name="buscar">
        <p><strong> Buscar ... MES</strong>
          <select name="buscames">
            <option value="0">Enero</option>
            <option value="1">Febrero</option>
            <option value="2">Marzo</option>
            <option value="3">Abril</option>
            <option value="4">Mayo</option>
            <option value="5">Junio</option>
            <option value="6">Julio</option>
            <option value="7">Agosto</option>
            <option value="8">Septiembre</option>
            <option value="9">Octubre</option>
            <option value="10">Noviembre</option>
            <option value="11">Diciembre</option>
          </select>
          <strong> ... AÑO ... </strong>
          <input type="text" name="buscaanno" maxlength="4" size="4" />
          <strong>...</strong>
          <input type="button" value="BUSCAR" onclick="mifecha()" />
        </p>
      </form>
    </div>

  </div>
</template>

<script>


export default {
  name: "calendar-block"
}
</script>

<style scoped>

#calendario { border: 4px double black ; max-width: 536px;
  background-color:rgb(255, 255, 255); text-align: center;
  margin-left: 35.5%;}

#diasc { border: 1px solid black; border-collapse:
    separate; border-spacing: 4px; }
#diasc th,#diasc td { font: normal 14pt arial; width: 70px; height: 30px; }
#diasc th { color: black; background-color: #8a8a8a; border: 1px solid black; }
#diasc td { color: #0a0a0a; background-color: white; border: 1px solid black; }


#fechaactual { font: bold 12pt arial; padding: 0.4em }
#fechaactual i { cursor: pointer ; }
#fechaactual i:hover { color: blue; text-decoration: underline; }

#buscafecha {color: rgb(0, 0, 0); padding: 5px; background-color: #8a8a8a; }
#buscafecha select, #buscafecha input  { background-color: whitesmoke;
  color: #000000; font: bold 10pt arial;  }
#buscafecha [type=text]  { text-align: center; }
#buscafecha  [type=button] { cursor: pointer; }

#anterior { float: left; width: 100px; font: bold 12pt arial;
  padding: 0.5em 0.1em; cursor: pointer ; }
#posterior { float: right; width: 100px; font: bold 12pt arial;
  padding: 0.5em 0.1em; cursor: pointer ;}

#anterior:hover {color: blue;text-decoration: underline;}
#posterior:hover {color: blue; text-decoration: underline;}
#titulos { font: normal 20pt "arial black"; padding: 0.2em; }

</style>