<template>
<v-flex d-flex xs12 sm4 md3>
    <v-card class="product-card my-2 mx-2" router :to="to_product" ripple>
        <v-img
            :src="product.image"
            lazy-src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEXx7/DIyMjS0tLh4ODn5ub08vPX1tbLy8vc29zFxsXk4+Ts6uvOzs7Y2Njq6Oni4eEhT4QPAAAB9ElEQVR4nO3bzXaCMBBA4fATZAzq+79tjaCG2KIkC09n7reUsph7iIKNzgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzDj3tc7fHqGWb6VW6789RCXfNrVooKXBoZyWBtL5Up2oaVB8Og3UNdi9DuJJuhp0u+8L5rN0Ndj5kUgD/Q3ipW67gbSXEI7DmwqqG8jxNpQPB7MNpH/MZLbB8BzpsrUcFDeQkBy0eh1kB002SCbyg9EG2UGLDaRPjqbvifknpeIGyUh+lHTkwU4DGZeZ/Hl1++yCmGnQyMn5+HXC+ilq8tm7g+oGjTRD140HyScOL6/obRAHzO8Q463T+kJQ3+DFFAddXQjmGixfObb5S6YazE8RYfVh6Ww1mOY5/WS3weM/EMldk7kG9wfqYLaBTPcxk8VgqcH1jil5jHouBjMNbgHSGYOxBi8BXLoYTDQ49f6X6R6LQX8DaX8L4JLFoL7B35vNHotBe4Ot/Xb3xaC8weaWw2CiwfauS38S/Q3ebTxdImhu8H7v7RxBZYPPtx9fI6jcjxSOi4/Oin8YnyV1NShDA1UNSqfQs1+5acdSt7NVNGiKf8PS6GlQRUGDvftTc///90xuHGqN3x6hXvFvWNI9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI34A7YsmQqqJfVgAAAAASUVORK5CYII='
            aspect-ratio="1.3"
            class="grey lighten-2 "
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
        <v-card-text>
            <center class="display-1 font-weight-medium">{{product.price}} тг </center>   
            <center v-if="product.available==1" class="caption " >Есть в наличии</center>
            <center v-else class="caption">Нет в наличии</center>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>        
            <v-btn small outline  color="warning" :to="to_cart">В корзину</v-btn>
            <v-btn  small color="error" :to="to_buy">&#160;&#160;Купить&#160;&#160;</v-btn>
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
        this.to_product="/product/"+this.product.id

    },
}
</script>

<style scoped>
.product-card:hover{
    transform: translateY(-10px);
    box-shadow: 0px 0px 20px gray;    
}
</style>
