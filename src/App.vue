<template>
  <div id="main">
    <home-page/>
  </div>

</template>

<script>
import homePage from "@/views/home-page";


export default {
  name: 'App',
  components: {
    homePage,

  }

}
</script>

<style>
#main{
  overflow-x: hidden;

}

</style>
