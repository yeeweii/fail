<template>
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <v-card
    class="mx-auto"
    color="#E0F7FA"
    max-width="344"
    title="Registration Form"
  >
    <v-container>
      <v-text-field
        dense
        v-model="first"
        color="pink"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        dense
        v-model="last"
        color="pink"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        dense
        v-model="email"
        color="pink"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        dense
        v-model="password"
        color="pink"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        dense
        v-model="confirm_Password"
        color="pink"
        label="Confirm Password"
        placeholder="Re-enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        dense
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn href="Profile" color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      first: null,
      last: null,
      email: null,
      password: null,
      confirm_Password: null,
      terms: false,
    }),
  }
</script>