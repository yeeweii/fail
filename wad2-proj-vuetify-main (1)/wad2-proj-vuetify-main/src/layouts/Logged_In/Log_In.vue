<template>
    <v-app>
      <DefaultView />
      <BottomNav />
    </v-app>
  </template>
  
  <script>
    import BottomNav from "./Bottom_Nav.vue"
    import DefaultView from '../default/View.vue'
    export default{
      components: {
        BottomNav,
        DefaultView,
      }
    }
  </script>