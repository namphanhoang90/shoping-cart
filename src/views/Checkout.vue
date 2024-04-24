<template>
  <div>
    <div v-for="item in cart" :key="item.product.id">
      <h2>{{ item.product.name }}</h2>
      <p>{{ item.product.description }}</p>
      <p>Quantity: {{ item.quantity }}</p>
    </div>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CheckoutView',
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    ...mapActions(['checkout'])
  }
}
</script>