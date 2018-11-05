<template>
        <v-layout row align-center  style="height: 100vh;">
              <!-- <v-flex xs12 md4 sm3  class="hidden-s-and-down"></v-flex> -->
              <v-spacer></v-spacer>
              <v-flex xs12 md4 sm6  >
                  <v-card class="pa-2 py-5">
                  <v-form v-model="valid">
                        <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        :counter="10"
                        label="Name"
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>
                    </v-form>
                  <v-btn color="error">CARD</v-btn>
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
        </v-layout>
</template>
<script>
export default {
     data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
        layout: 'particle',

}
</script>
