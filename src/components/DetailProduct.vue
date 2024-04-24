<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <!-- Add more product details as needed -->
  </div>
</template>

<script>
export default {
  name: 'DetailProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-detail {
  /* Add styles for your product detail component here */
}
</style>