<template>
<v-flex
d-flex
xs12
sm4
md3>
<v-card class="product-card" router :to="to_product">
    <v-img
        :src="product.image"
        :lazy-src="`~/assets/images/image_placeholder.png`"
        aspect-ratio="1.3"
        class="grey lighten-2"
        mb-2>
        <v-layout
            slot="placeholder"
            fill-height
            align-center
            justify-center
            ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
    </v-img>
    <v-divider></v-divider>
    <div class="title mt-3 text-capitalize" >
        <center >{{product.name}} </center>    
    </div>
    <v-card-text >
       <center class="display-1 font-weight-medium">{{product.price}} тг </center>   
       <center v-if="product.available==1" class="caption " >Есть в наличии</center>
        <center v-else class="caption">Нет в наличии</center>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>        
        <v-btn outline  color="warning" :to="to_cart">В корзину</v-btn>
        <v-btn  color="error" :to="to_buy">&#160;&#160;Купить&#160;&#160;</v-btn>
        <v-spacer></v-spacer>
        
    </v-card-actions>
    
</v-card>
</v-flex>
</template>
<script>
export default {
    props: ["product"],
    data(){
        return{
            to_buy: "",
            to_cart: "",
            to_product: ""
        }
    },
    created() {
        if(this.product.image==null){
            this.product.image=""
        }
        this.to_buy="/buy/"+this.product.slug
        this.to_cart="/cart/"+this.product.slug
        this.to_product="/product/"+this.product.slug

    },
}
</script>

<style>
.product-card:hover{
    transform: translateY(-10px);
    box-shadow: 0px 0px 10px gray;    
}
</style>
