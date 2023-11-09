<template>
    <v-app>
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation v-model="value" :bg-color="color" mode="shift"
      style="position: fixed; bottom: 0; width: 100%;">
        <v-btn :to="'/login/home'">
          <v-icon>mdi-home</v-icon>
  
          <span>Home</span>
        </v-btn>
  
   
        <v-btn :to="'/login/medication-search'">
          <v-icon>mdi-magnify</v-icon>
  
          <span>Medication Search</span>
        </v-btn>
  
  
        <v-btn>
          <v-icon>mdi-share</v-icon>
  
          <span>Donate Medication</span>
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-help</v-icon>
  
          <span>Help/FAQ</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({ value: 1 }),
  
      computed: {
        color() {
          switch (this.value) {
            case 0:
              return 'light-blue'
            case 1:
              return 'teal'
            case 2:
              return 'pink'
            case 3:
              return 'indigo'
            default:
              return 'blue-grey'
          }
        },
      },
    }
  </script>
  