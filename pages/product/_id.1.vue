<template>
<v-layout>
    <v-layout v-if="preloader==true"  align-center   style="height:80vh;">
        <v-flex d-flex>
            <div class="text-xs-center">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="primary"
                    indeterminate></v-progress-circular>
            </div>
        </v-flex>
    </v-layout>
    <v-layout  v-else>
            <page-not-found v-if="error==true"></page-not-found>
        <v-layout row wrap v-else>
             <v-flex d-flex xs12 sm12 md8>
                    <store-bread-crumbs 
                        class="hidden-sm-and-down"
                        v-bind:data="for_breadcrumd">                        
                    </store-bread-crumbs>                    
            </v-flex>
            <v-flex xs12 sm6 md7 d-flex  align-center class=" v-card theme--light mt-3"   color="primary">
            <v-flex>
                <v-carousel  
                    class="product-carousel" 
                    light
                    prev-icon="mdi-arrow-left-drop-circle"
                    next-icon="mdi-arrow-right-drop-circle"
                    >
                    <v-carousel-item  
                        v-for="(item, i) in images"
                        :key="i"
                        :src="item.image">
                    </v-carousel-item>
                    
                </v-carousel>
            </v-flex>                
        </v-flex>
        <v-flex xs12 sm6 md5 d-flex class="mt-3">
            <v-flex class="pa-3 v-card theme--light mx-2">
                <h1 class="headline font-weight-bold  mb-2">{{product.name}}</h1>
                <h1 class="headline font-weight-bold grey--text darken-2 mb-3">{{product.price}} тг</h1>
                <v-divider class="md-4"></v-divider>  
                            
                <v-flex xs12 md12 sm12  class="text-xs-center my-4">
                    Выберите количество товара
                </v-flex>                
                <v-layout row wrap>
                    <v-flex  xs4 sm4 md4 class="text-xs-right">
                        <v-btn 
                            fab
                            icon
                            small
                            @click="minusItem(item)"
                            color="secondary">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex  xs4 sm4 md4 class="text-xs-center" fill-height align-center>                        
                        <v-btn
                            readonly
                            color="secondary"
                            outline>
                            {{item}}
                        </v-btn>
                    </v-flex>
                    <v-flex  xs4 sm4 md4>
                        <v-btn
                            fab
                            icon
                            small
                            color="secondary"
                            @click="plusItem(item)">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex xs12 md12 sm12 class="mt-5">
                        <v-select
                            label="Выберите цвет товара"
                            :items="colors"
                            item-text="color"
                            item-value="color"
                            class="mx-5">
                        </v-select>
                    </v-flex>  
                    
                    <v-flex xs12 sm6 md6 class="pa-1 mt-4">
                        <v-btn
                            color="warning"
                            block
                            outline>
                            В корзину
                        <v-icon  right>mdi-cart</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex xs12 sm6 md6 class="pa-1 mt-4">
                        <v-btn
                            block
                            color="error">
                            Купить сейчас
                        </v-btn>
                    </v-flex>
                    
                </v-layout>
                <div class="mt-3"></div>
                <v-divider></v-divider>
            </v-flex>
        </v-flex> 
        <v-flex xs12 sm12 md12 class="mt-4">
         <v-card>             
            <v-tabs
                slider-color="primary"
                style="background-color: #7F7F7F !important;"
                color="tabscolor"
                fixed-tabs
                dark>
            <v-tab ripple>
                Описание
            </v-tab>
            <v-tab ripple>
                Характеристики
            </v-tab>            
            <v-tab ripple>
                Отзывы
            </v-tab>
            <v-tab-item>
                <v-card flat>
                <v-card-text>
                  <p class="text-xs-justify" v-if="product.description!=null" v-text="product.description"></p>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <p v-if="colors!=null"> 
                            <b>Цвета:</b> 
                            <span 
                                :key="i"
                                v-for="(color, i) in colors">
                                {{color.color}},
                            </span> 
                        </p>
                        <p v-if="product.height!=null"> <b>Высота:</b> <span>{{product.height}} мм</span> </p>
                        <p v-if="product.width!=null"> <b>Ширина:</b> <span>{{product.width}} мм</span> </p>
                        <p v-if="product.length!=null"> <b>Длина:</b> <span>{{product.length}} мм</span> </p>
                        <p v-if="product.material!=null"> <b>Материалы:</b> <span>{{product.material}} </span> </p>
                        <p v-if="product.complect!=null"> <b>Комплектация:</b> <span>{{product.complect}} </span> </p>
                        <p v-if="product.karkas!=null"> <b>Каркас:</b> <span>{{product.karkas}} </span> </p>
                        <p v-if="product.compound!=null"> <b>Соединение:</b> <span>{{product.compound}} </span> </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                <v-card-text>
                  
                  Сайт находиться в режиме разработки
                </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>
        </v-card>
        </v-flex>
    </v-layout>   

    </v-layout>
        
</v-layout>    
</template>
<script>
import StoreBreadCrumbs from '~/components/StoreBreadCrumbs.vue'
import PageNotFound from '~/components/errors/PageNotFound.vue'
export default{
    data(){
        return{
            item: 1,
            product:[],
            images:[],
            colors:[{"color":"Нет вариантов"}],
            recommendation:[], 
            preloader: false,
            error: false,
            for_breadcrumd: [{src: "/", name:"Главная"}]
        }    
    },
    components:{
        StoreBreadCrumbs,
        PageNotFound
    },
    mounted() {
        this.preloader=true
        var id=this.$route.params.id
        Promise.all([this.getProduct(id)])
                    .then(values=>{
                        this.product=values[0][0];
                        this.images=JSON.parse(values[0][0].images)
                        this.for_breadcrumd.push({"src":"/catalog/"+values[0][0].catalog.id, "name": values[0][0].catalog.name})
                        this.for_breadcrumd.push({"src":"/product/"+values[0][0].id, "name": values[0][0].name})
                        if(values[0][0].colors!=null) this.colors=JSON.parse(values[0][0].colors)
                        this.preloader=false
                    })
                    .catch(error=>{
                        this.error=true
                        this.preloader=false
                    });
    },
    methods:{
        plusItem(item){
            if(item<20)
            this.item=item+1
        },
        minusItem(item){
            if(item>1){
                this.item=item-1;
            }
        },
        async getProduct(id){
            const response=await this.$axios.$get("product/"+id);
            return response;
        },
        async getCatalog(id){
            const response = await this.$axios.$get("catalog/"+id);
            return response;
        },
    }
}
</script>
<style scoped>
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

</style>
