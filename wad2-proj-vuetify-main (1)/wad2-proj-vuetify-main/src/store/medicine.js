import { defineStore } from 'pinia'

export const useMedicationStore = defineStore('medicine', {
  state: () => ({
    //
    
    medList: [
        {
            name: Medication
        }
    ]


  }),
  actions: {
    getLastName() {
      return this.webName;
      
    },
  }
})