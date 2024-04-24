<template>
  <div>
    <select v-model="selectedSort" @change="handleSort">
      <option value="">Sort by...</option>
      <option value="asc">Name (A-Z)</option>
      <option value="desc">Name (Z-A)</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SortComponent',
  data() {
    return {
      selectedSort: ''
    }
  },
  methods: {
    handleSort() {
      this.$emit('sort', this.selectedSort);
    }
  }
}
</script>