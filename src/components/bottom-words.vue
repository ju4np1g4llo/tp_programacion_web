<template>
  <div class="final-text-zone">
    <p class="p">Ordenar es </p>
    <p class="parrafo">
      <span class="word wisteria"> perfecto</span>
      <span class="word belize"> increible</span>
      <span class="word pomegranate"> poderoso</span>
      <span class="word green"> hermoso</span>
      <span class="word midnight"> sencillo</span>
    </p>

  </div>
</template>

<script>
export default {
  name: "bottom-words"
}



</script>

<style scoped>
.final-text-zone{
  border-radius: 5px 5px 0 0;
  width:42.5%;
  height: auto;
  padding-top: 1%;
  padding-bottom: 1%;
  border: 3px solid black;
  background: rgb(255, 255, 255);
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 40px;
  padding-left: 42%;
  margin-left: 7.5%;

}

.parrafo {
  display: inline-block;
  vertical-align: top;
  margin: 0;
  margin-right: 265px;
}

.p{
  display: inline-block;
  vertical-align: top;
  margin: 0;
  margin-left: -195px;
}

.word {
  position: absolute;
  width: 220px;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  float: left;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
  color: #8e44ad;
}

.belize {
  color: #2980b9;
}

.pomegranate {
  color: #c0392b;
}

.green {
  color: #16a085;
}

.midnight {
  color: #2c3e50;
}


</style>