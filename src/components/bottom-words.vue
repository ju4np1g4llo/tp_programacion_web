<template>
  <div class="final-text-zone">
    <h1>Ordenar es
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "bottom-words",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Esencial", "Magnífico", "Increible", "Simple", "Fácil"],
      typingSpeed: 50,
      erasingSpeed: 100,
      newTextDelay: 1000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
            this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
            0,
            this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
}



</script>





<style scoped>
.final-text-zone{
  border: 2px solid black;
  width: 42.5%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  margin-left: 8.8%;
  padding-right: 20%;
  padding-bottom: 1.5%;
  background-color: white;
  margin-bottom: 6.7%;
  overflow-x: hidden;
}

h1 {
  font-size: 50px;
  font-weight: normal;
}
span.typed-text {
  color: deepskyblue;
}

  .blinking-cursor {
     font-size: 5rem;
     color: #2c3e50;
     -webkit-animation: 1s blink step-end infinite;
     -moz-animation: 1s blink step-end infinite;
     -ms-animation: 1s blink step-end infinite;
     -o-animation: 1s blink step-end infinite;
     animation: 1s blink step-end infinite;
   }

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}


</style>