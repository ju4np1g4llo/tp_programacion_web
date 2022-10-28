<template>
  <div id='app'>
    <v-calendar></v-calendar>
    <v-date-picker v-model='selectedDate' />
  </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  name: "calendar-block",
  components:{
    Calendar,
    DatePicker,
  },
}

new Vue({
  el: '#app',
  data: {
    selectedDate: null,
  })

</script>

<style scoped>



</style>