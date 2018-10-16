<template>
<div>
    <div v-if="productloader==true">
        <product-card-loader></product-card-loader>
    </div>
    <div v-else>
        <div v-if="error==true">
                <v-layout row wrap>
                    <v-flex xs12 sm3 md3>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <page-not-found></page-not-found>
                    </v-flex>
                    <v-flex xs12 sm3 md3>
                    </v-flex>
                </v-layout>               
            </div>
        <v-container fluid grid-list-md class="container_products" v-else>
            <div  v-if="products.data!=''">            
            <v-layout row wrap >
                <v-flex d-flex xs12 sm8 md8>
                    <store-bread-crumbs 
                        class="hidden-sm-and-down"
                        v-bind:title="category.title" 
                        v-bind:slug="``" 
                        v:bind:product_name="">                        
                    </store-bread-crumbs>                    
                </v-flex>
                <v-flex d-flex xs12 sm4 md4>
                    <v-select
                        v-model="select"
                        :items="order_items"
                        item-text="report"
                        item-value="order"
                        return-object
                        persistent-hint
                        v-on:change="doSorting(`${select.order.sort}`, `${select.order.column}`)"
                        label="Сортировка">
                    </v-select>
                </v-flex>                
            </v-layout>
                <v-layout 
                    row
                    wrap>
                    <ProductCard 
                    v-bind:product="i"
                    v-for="i in products.data"
                    :key="i.id">
                    </ProductCard>     
                </v-layout>
                <div class="text-xs-center mt-5">
                    <v-pagination
                    v-model="current_page"
                    :value="current_page"
                    :length="total_page"
                    @input="goPage"
                    ></v-pagination>
                </div>
            </div>        
            <div v-else>
                <span class="title">Извините, но в данном разделе временно отсутсвует товары</span>
            </div>
        </v-container>
        <!-- <h1> {{total_page}} </h1>
        <h2>{{category}}</h2>
        <h4> {{products}} </h4> -->
    </div>    
</div>
</template>
<script>
import ProductCard from '~/components/ProductCard.vue'
import ProductCardLoader from '~/components/ProductCardLoader.vue'
import StoreBreadCrumbs from '~/components/StoreBreadCrumbs.vue'
import PageNotFound from '~/components/PageNotFound.vue'
export default {
    data(){
        return{
            slug: '',
            error: false,
            productloader: false,
            category_id:0,
            category:[],
            products:[],
            for_breadcrumd:[],
            scrollToTop: true,
            page: 1,
            select: {"report":"Наименование А -> Я", "order":{"column":"name", "sort":"asc"}},
            order_items:[
                {"report":"По новизне", "order":{"column":"updated_at", "sort":"asc"}},
                {"report":"Наименование А -> Я", "order":{"column":"name", "sort":"asc"}}, 
                {"report":"Наименование Я -> А", "order":{"column":"name", "sort":"desc"}},
                {"report":"Сначала дешевые", "order":{"column":"price", "sort":"asc"}},
                {"report":"Сначала дорогие", "order":{"column":"price", "sort":"desc"}},
                ],
            total_page: 1,
            current_page: 1
        }
    },
    components:{
        ProductCard,
        ProductCardLoader,
        StoreBreadCrumbs,
        PageNotFound
    },
    mounted() {
        this.productloader=true;
        this.category_id=this.$route.params.id;
        Promise.all([this.getCategory(this.category_id), this.getProducts(this.category_id)])
                    .then(values=>{
                        this.category=values[0];
                        this.products=values[1];
                        this.total_page=values[1].last_page
                        this.current_page=values[1].current_page
                        this.productloader=false;
                        })  
                    .catch(error=>{
                        this.productloader=false;
                        this.error=true;
                        })      
    },
    methods:{
        async getCategory(id){
            const response = await this.$axios.$get("category/"+id);
            return response;
        },
        async getProducts(id, page, column, order){
            if(!page) page=1; 
            if(!column) column="id";
            if(!order) order="asc";
            const response = await this.$axios.$get("products_of_category?category_id="+
                                                    id+"&page="+page+"&column="+column+"&order="+order);
            return response
        },
        goPage(page){
            window.scroll(0,0,'smooth')
            this.productloader=true
            Promise.all([this.getProducts(this.category_id, page, this.select.order.column, this.select.order.sort)])
                        .then(values=>{
                            this.products=values[0]
                            this.current_page=values[0].current_page
                            this.productloader=false                            
                        })
                        .catch(error=>{
                            this.productloader=false;
                            this.error=true;
                        }) 
            console.log("Page="+page);
        },
        doSorting(sort, column){
            window.scroll(0,0,'smooth')
            this.productloader=true
            Promise.all([this.getProducts(this.category_id, this.current_page, column, sort)])
                        .then(values=>{
                            this.products=values[0]
                            this.current_page=values[0].current_page
                            this.productloader=false                            
                        })
                        .catch(error=>{
                            this.productloader=false;
                            this.error=true;
                        }) 
            
        }
    }
}
</script>
<style scoped>
.image-test{
    width: 200px;
    height: 200px;
}
.pagination-div{
    widows: 100%;
    text-align: center;
}
.container_products {
  scroll-behavior: smooth;
}


</style>