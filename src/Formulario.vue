<template>
  <header-top></header-top>
  <Form></Form>
</template>

<script>
import HeaderTop from "@/App";
import Form from "@/components/Form";


export default {
  name: 'Formulario',
  components: {
    Form,
    HeaderTop,
  }
}
</script>
