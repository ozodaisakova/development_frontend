<template>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item :to="`/`">Главная</v-breadcrumbs-item>
      <v-breadcrumbs-item >{{title}}</v-breadcrumbs-item>
    </v-breadcrumbs>
</template>
<script>
export default {
  props:['title', 'slug','product_name'],
  data(){
    return{
      to_category:"",
      to_product:""
    }
  },
  created() {
    this.to_category="/category/"+this.slug
  },
}
</script>

