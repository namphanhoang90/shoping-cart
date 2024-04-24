<template>
  <div @click="handleClick">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <button @click.stop="$emit('delete', product.id)">Delete</button>
    <button @click.stop="$emit('update', product)">Update</button>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('product-click', this.product.id);
    }
  }
}
</script>