<template>
    <v-container>
      <!-- Medication Search Bar -->
      <v-toolbar
        dense
        floating>
      <v-text-field
        v-model="searchQuery"
        label="Search Medications"
        outlined
        @input="searchMedications"
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  
      <!-- Search Results -->
      <v-list>
        <v-list-item v-for="medication in searchResults" :key="medication.id"
          @click="selectMedication(medication)"
        >
          <v-list-item-title>{{ medication.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        medications: [
          { id: 1, name: 'Medication 1' },
          { id: 2, name: 'Medication 2' },
          { id: 3, name: 'Medication 3' },
          // Add more medications to the list
        ],
        searchResults: [],
      };
    },
    methods: {
      searchMedications() {
        // Perform the search based on this.searchQuery and update this.searchResults
        const query = this.searchQuery.toLowerCase();
        if (!query) {
          this.searchResults = [];
        return;
        }
        this.searchResults = this.medications.filter((medication) =>
          medication.name.toLowerCase().includes(query)
        );
      },
      selectMedication(medication) {
        // Handle the selection of a medication (e.g., show details or perform an action)
        console.log('Selected Medication:', medication);
      },
    },
  };
  </script>
  