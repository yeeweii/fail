// Utilities
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    //
    
    webName: "Pharma-Save",


  }),
  actions: {
    getLastName() {
      return this.webName;
      
    },
  }
})


