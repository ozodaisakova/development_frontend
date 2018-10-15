<template>
<div>
    <v-container fluid grid-list-md>
        <store-bread-crumbs v-bind:title="products.title" v-bind:slug="products.slug" v:bind:product_name=""></store-bread-crumbs>
        <v-layout 
            row
            wrap
            v-if="products.category_products!=''">
            <ProductCard 
            v-bind:product="i"
            v-for="i in products.category_products"
            :key="i.id">
            </ProductCard>            
        </v-layout>        
        <div v-else>
                No products
                {{ products.title}}
                {{$route.params.slug}}
        </div>
    </v-container>    
</div>
</template>
<script>
import ProductCard from '~/components/ProductCard.vue'
import StoreBreadCrumbs from '~/components/StoreBreadCrumbs.vue'
export default {
    data(){
        return{
            slug: '',
            products:[],
            for_breadcrumd:[],
            scrollToTop: true
        }
    },
    components:{
        ProductCard,
        StoreBreadCrumbs
    },
    mounted() {
        this.slug=this.$route.params.slug
        this.$axios.$get('category/'+this.slug)
        .then(response=>{
            this.products=response[0]         
        });
    },
}
</script>
<style>
.image-test{
    width: 200px;
    height: 200px;
}
</style>

