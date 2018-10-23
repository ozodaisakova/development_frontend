<template>
    <v-breadcrumbs divider="/" large>
      <v-breadcrumbs-item :key="item.src" v-for="item in data" :to="item.src">{{ item.name}}</v-breadcrumbs-item>
    </v-breadcrumbs>
</template>
<script>
export default {
  props:['data']
}
</script>

