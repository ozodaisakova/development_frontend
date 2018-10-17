<template>
<div>
    <v-layout row wrap>
        <v-flex xs12 sm7 md7 d-flex class="pa-1">
            <v-card  >
                <v-carousel  class="product-carousel">
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src">
                    </v-carousel-item>
            </v-carousel>
            </v-card>
        </v-flex>
        <v-flex xs12 sm5 md5 d-flex class="pa-1">
            <v-card class="pa-3">
                <span class="headline font-weight-black">
                    Название товара
                </span>
            </v-card>

        </v-flex>
    </v-layout>
    
</div>    
</template>
<script>
import StoreBreadCrumbs from '~/components/StoreBreadCrumbs.vue'
export default{
    data(){
        return{
            items: [
          {
            src: 'http://mebel-park.kz/image/cache/catalog/krovati/naomi-2-venge2-738x494.jpg'
          },
          {
            src: 'http://mebel-park.kz/image/cache/catalog/krovati/Naomi-v-4-738x494.jpg'
          } ,
        //    {
        //     src: 'http://mebel-park.kz/image/cache/catalog/krovati/naomi-2-venge3-738x494.jpg'
        //   } 
        ]
        }
    },
    components:{
        StoreBreadCrumbs
    },
    created() {
        
    },
    mounted() {
        
    },
}
</script>
<style>
@media screen and (max-width:1024px){
    .product-carousel{
        height: 300px;
    }
}
@media screen and (max-width:768px){
    .product-carousel{
        height: 250px;
    }
}
@media screen and (max-width:520px){
    .product-carousel{
        height: 230px;
    }
}

.product-carousel{
    border: 10px solid white;
}

</style>
