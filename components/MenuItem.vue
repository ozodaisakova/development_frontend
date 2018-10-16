<template>
    <v-list-tile
        router
        :to="{path: '/category/'+item.id }"
        exact>
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-content v-text="item.title">
          </v-list-tile-content>
        </v-list-tile-content>
        </v-list-tile>
</template>
<script>
  export default{
    props:['item'],
    data(){
      return{
        to_category: ''
      }
    },
    created() {
      this.to_category=this.$store.state.base_url+"category/"+this.item.slug
    },
  }
</script>
