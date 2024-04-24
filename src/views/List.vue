<template>
  <div>
    <ProductList
      v-for="product in products"
      :key="product.id"
      :product="product"
      @delete="deleteProduct"
      @update="updateProduct"
      @click="goToDetail(product.id)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'ListView',
  components: {
    ProductList
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['deleteProduct', 'updateProduct', 'fetchProducts']),
    goToDetail(id) {
      this.$router.push({ name: 'Detail', params: { id } })
    }
  },
  created() {
    this.fetchProducts()
  }
}
</script>