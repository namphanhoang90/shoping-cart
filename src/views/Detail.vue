<template>
  <div v-if="product">
    <DetailProduct :product="product" />
    <button @click="deleteProduct(product.id)">Delete</button>
    <button @click="updateProduct(product)">Update</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DetailProduct from '@/components/DetailProduct.vue'

export default {
  name: 'DetailView',
  components: {
    DetailProduct
  },
  computed: {
    ...mapState(['product'])
  },
  methods: {
    ...mapActions(['deleteProduct', 'updateProduct', 'fetchProduct'])
  },
  beforeRouteEnter(to, from, next) {
    // Fetch the product before this route is loaded
    next(vm => {
      vm.fetchProduct(to.params.id)
    })
  },
}
</script>