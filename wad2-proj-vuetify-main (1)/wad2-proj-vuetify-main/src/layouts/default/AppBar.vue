<template>

  <v-app-bar :elevation="2" rounded color="#EC407A">
    <v-app-bar-title class="text-center shift_left">
      <v-icon icon="mdi-circle-slice-6" />
      <h2 >{{useStore.webName}}</h2>
    </v-app-bar-title>
  <v-btn @click="toggleTheme" small color="#EC407A" class="dark-mode-button">
    Dark Mode
  </v-btn>
</v-app-bar>
</template>

<style>
.dark-mode-button {
  background-color: white; /* Set the background color */
  color: black; /* Set the text color */
}

.shift_left {
  padding-left:9%;
}
</style>

<script setup>
import { useUserStore } from "@/store/user";
import { useTheme } from 'vuetify'

const useStore = useUserStore();

const theme = useTheme()

    function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<script>

</script>