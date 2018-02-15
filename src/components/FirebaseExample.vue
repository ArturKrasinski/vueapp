

<template>

<v-layout>
    <v-flex xs12 sm3 v-for="product in products" :key="product.key">
      <v-card>
        <v-card-media src="product.image" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{product.name}}</h3>
            <div></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn  color="red">koszyk</v-btn>
          <v-btn  color="blue">wishlista</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import FirebaseConfig from '../../config/firebase'
import Firebase from 'firebase'

let apsasp = Firebase.initializeApp(FirebaseConfig);
let db = apsasp.database();
export default {
    firebase: {
        products: db.ref("products")
    },
    data() {
        return {
            products: []
        }
    },
    name: 'FirebaseExample'
}

</script>
