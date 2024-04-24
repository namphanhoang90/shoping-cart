<template>
  <div>
    <Search @search="searchProducts" />
    <Sort @sort="sortProducts" />
    <ProductList
      v-for="product in sortedAndFilteredProducts"
      :key="product.id"
      :product="product"
      @delete="deleteProduct"
      @update="updateProduct"
      @product-click="goToDetail"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductList from '@/components/ProductList.vue'
import Search from '@/components/Search.vue'
import Sort from '@/components/Sort.vue'

export default {
  name: 'ListView',
  components: {
    ProductList,
    Search,
    Sort
  },
  data() {
    return {
      searchTerm: '',
      sortTerm: ''
    }
  },
  computed: {
    ...mapState(['products']),
    sortedAndFilteredProducts() {
      let products = [...this.products];
      if (this.searchTerm) {
        products = products.filter(product => product.name.includes(this.searchTerm));
      }
      if (this.sortTerm === 'asc') {
        products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortTerm === 'desc') {
        products.sort((a, b) => b.name.localeCompare(a.name));
      }
      return products;
    }
  },
  methods: {
    ...mapActions(['deleteProduct', 'updateProduct', 'fetchProducts']),
    goToDetail(id) {
      this.$router.push({ name: 'Detail', params: { id } })
    },
    searchProducts(searchTerm) {
      this.searchTerm = searchTerm;
    },
    sortProducts(sortTerm) {
      this.sortTerm = sortTerm;
    }
  },
  created() {
    this.fetchProducts()
  }
}
</script>