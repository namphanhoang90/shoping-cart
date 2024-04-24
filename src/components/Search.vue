<template>
  <div>
    <input v-model="searchTerm" @input="handleInput" placeholder="Search products..." />
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    handleInput() {
      this.$emit('search', this.searchTerm);
    }
  }
}
</script>