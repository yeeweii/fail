<template>
    <v-app>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <v-card>
          <v-card-title class="headline">{{ selectedCard.title }}</v-card-title>
          <v-card-subtitle>{{ selectedCard.subtitle }}</v-card-subtitle>
          <v-img :src="selectedCard.src" height="300" contain></v-img>
          <v-card-text> {{ selectedCard.description }} </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card @click="showDetails(card)">
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
                width="100%"
                cover
              >
                <v-card-title
                  class="text-white font-weight-bold"
                  v-text="card.title"
                ></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-heart"
                ></v-btn>
                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-bookmark"
                ></v-btn>
                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-share-variant"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({
        cards: [
          {
            title: 'About Us',
            subtitle: 'Learn more about Pharma-Save',
            src: require('@/assets/about.jpg'),
            flex: 12,
            description: 'This is a detailed description of our company.',
          },
          {
            title: 'Favorite road trips',
            subtitle: 'Discover great road trip destinations',
            src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
            flex: 6,
            description: 'Explore the best road trips around the world.',
          },
          {
            title: 'Best airlines',
            subtitle: 'Find the top airlines for your travels',
            src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            flex: 6,
            description: 'Learn about the best airlines and their services.',
          },
        ],
        dialog: false,
        selectedCard: null,
      }),
      methods: {
        showDetails(card) {
          this.selectedCard = card
          this.dialog = true
        },
      },
    }
  </script>
  