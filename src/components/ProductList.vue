<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <button @click="$emit('delete', product.id)">Delete</button>
    <button @click="$emit('update', product)">Update</button>
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
  }
}
</script>