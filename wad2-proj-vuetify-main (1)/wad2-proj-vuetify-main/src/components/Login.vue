<template>
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <v-sheet max-width="400" class="mx-auto">
            <v-form validate-on="submit lazy" @submit.prevent="submit">
                <v-text-field
                    v-model="userName"
                    :rules="userNamerules"
                    label="Username"
                ></v-text-field>

                <v-text-field
                    v-model="passWord"
                    :rules="passwordRules"
                    label="Password"
                    required
                ></v-text-field>

                <v-btn
                    :loading="loading"
                    :color="color"
                    type="submit"
                    block
                    class="mt-2"
                    text="Login"
                ></v-btn>
            </v-form>
        </v-sheet>
        <div class="mt-5">
            <a href="./Register">Register Here</a>
        </div>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    data: vm => ({
      loading: false,
      userNamerules: [value => vm.checkApi(value)],
      timeout: null,
      userName: '',
      color: 'secondary',
      passWord: '',
      passwordRules: [
        value => !!value || 'Please enter password.',
        value =>
          (value && value.length > 8) ||
          'Password must be more than 8 characters.',
        value =>
          /\d/.test(value) || 'Password must contain at least one number.',
        value =>
          /[a-zA-Z]/.test(value) ||
          'Password must contain at least one letter.',
        value =>
          /[!@#$%^&*]/.test(value) ||
          'Password must contain at least one special character (!@#$%^&*).',
      ],
    }),

    methods: {
      async submit(event) {
        this.loading = true

        const results = await event

        this.loading = false

        alert(JSON.stringify(results, null, 2))
      },
      async checkApi(userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.')

            return resolve(true)
          }, 1000)
        })
      },
    },
  }
</script>