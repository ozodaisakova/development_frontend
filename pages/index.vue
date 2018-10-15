<template>
<div>
  <div v-if="preloader" class="preloader">
    <center>
      <div>
        <Preloader></Preloader>
      </div>
    </center>
  </div>
  <p v-else>    
    {{posts}} 
    <v-img :src="`~/assets/images/image_placeholder.png`"></v-img>
    </p>
</div>
</template>
<script>
import Preloader from '~/components/Preloader.vue'
export default {
  data(){
    return{
      posts: [],
      status:0,
      preloader: true
    }
  }, 
  components:{
    Preloader
  },
  mounted() {
    this.preloader=true
    setTimeout(()=>{
      this.preloader=false
    }, 3000)
        // this.$axios.$get("category")
        // .then(response =>{
        //   this.posts=response
        //   // console.log(response.status)
        //   // this.status=response.status
        //   this.preloader=false
        //   });
  },
}
</script>
<style scoped>
.preloader{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: beige;
  position: fixed;
  z-index: 99999;
  text-align: center;
  display: table-cell;
}
.preloader>center{
  vertical-align: middle;
  height: 100vh;
}
.preloader>center>div{
  width: 200px;
  top: 50%;
  position: relative;
  background-color: black;
  color: aliceblue;
}


</style>
