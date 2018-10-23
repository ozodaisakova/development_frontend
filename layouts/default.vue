<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app>
      <v-list>
      <v-toolbar flat class="hidden-sm-and-up">
      <v-list >
        <v-list-tile class="" >
          <v-list-tile-title class="title">
            TAK-MEBEL
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      </v-toolbar>
      <v-subheader>Навигация сайта</v-subheader>
        <v-divider></v-divider>
        <v-list-tile 
        router
        to="/"
        exact        
        ripple>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Главная</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- ///////////////////////////////////////// -->
        <v-subheader>Каталог</v-subheader>
        <v-divider></v-divider>        
          <menu-item
            v-for="(catalog, i) in menu_items.catalogs"
            v-if="catalog.hidden==0"
            :key="`catalog-`+i"
            v-bind:name="catalog.name" 
            v-bind:icon="catalog.icon" 
            v-bind:tuda="`/catalog/`+catalog.id">
          </menu-item>
          <span v-if="error_catalog!=''" class="red--text lighten-3">
            Қатенің атауы: {{error_catalog.message}}<br>
            <h3>Бұл қате осы сайтқа арналған backend-пен байланыс жоғалғандығын білдіреді</h3>
            Бұл қатені туралау үшін 
            <b>development_backend </b> папкасына барып <b>php artisan serv</b> командасын орындау қажет.
            <br>
            Егер бұл команда көмектеспесе  Google Chrome браузерінде 
            <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?utm_source=chrome-ntp-icon">
            ссылкасы </a>бойынша расширениянені орнату қажет
            </span>
        <!-- ///////////////////////////////// -->
        <v-subheader>Информация</v-subheader>
        <v-divider></v-divider>
        <span v-if="error_information!=''" class="red--text lighten-3"> Қатенің атауы: {{error_information.message}}</span>
        <div 
          v-for="(item, i) in information_items.informations" 
          :key="`information-`+i">
          <menu-item v-if="item.hidden==0" v-bind:name="item.name" v-bind:icon="item.icon" v-bind:tuda="`/information/`+item.id"></menu-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="primary" dark class="toolbar-back">
        <v-btn @click="drawer = !drawer" icon>
          <v-icon>mdi-menu</v-icon>
          </v-btn>      
      <v-btn
        class="hidden-sm-and-down"
        icon
        @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'mdi-format-horizontal-align-right' : 'mdi-format-horizontal-align-left'">
          </v-icon>
        
      </v-btn>
      <v-toolbar-title v-text="title" class="hidden-sm-and-down"></v-toolbar-title> 
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center hidden-sm-and-down py-4 " >
          <v-text-field 
            solo
            label="Поиск"
            append-icon="mdi-magnify"
            light
            style="width:50%; display:inline-block">
          </v-text-field>
        </v-flex>
      </v-layout> 
          
      <v-tooltip bottom>
      <v-btn
        slot="activator"
        icon>
        <v-badge color="error" v-if="cart!=0">
          <span slot="badge" >{{cart}}</span>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>
      <span>Корзина</span>
    </v-tooltip>

      <v-tooltip bottom>
      <v-btn
        slot="activator"
        icon>
      <v-icon>mdi-account</v-icon>
      </v-btn>
      <span>Личный кабинет</span>
    </v-tooltip>
      
    </v-toolbar>
    <v-content>
      <v-container class="main-back">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MenuItem from '~/components/menu/MenuItem.vue'
import {mapState, mapGetters} from "vuex"

  export default {
    data () {
      return {
        base_category_link: '',
        clipped: true,
        drawer: true,
        fixed: false,
        menu_items: [],
        information_items:[],
        preloader:false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'TAK - MEBEL',
        error_catalog:'',
        error_information: '',
        cart_count: 0
      }
    },
    components:{
      MenuItem
    },
    mounted(){
      if(process.browser){
        if(!localStorage.cart_product_count) localStorage.setItem('cart_product_count', '0');
        this.$store.dispatch('increment_cart', parseInt(localStorage.getItem('cart_product_count')));
      }     
      this.preloader=true
      this.$axios.$get("catalog")
          .then(response=>{
            this.menu_items=response
          })
          .catch(error=>{
            this.error_catalog=error
          });
      this.$axios.$get("information")
          .then(response=>{
            this.information_items=response
            this.preloader=false            
          })
          .catch(error=>{
            this.error_information=error
          });
    },
    
    computed:{
      cart(){
        if(process.browser){          
          return this.$store.getters.cart_count
        }
      }
    }   
   
  }
</script>
<style scoped>
.toolbar-back{
  background-color: red;
}
::-webkit-scrollbar{
    background-color: rgb(219, 217, 217);    
    width:6px;
}

::-webkit-scrollbar-thumb{
    border-width:1px 1px 1px 2px;
    border-radius: 4px;
    border-color: rgb(119, 118, 118);
    background-color: rgb(170, 169, 169);
}
::-webkit-scrollbar-thumb:hover{
    border-width: 1px 1px 1px 2px;
    border-color: #555;
    background-color: #777;
}
::-webkit-scrollbar-track{
    border-width:0;
}
::-webkit-scrollbar-track:hover{
    border-left: solid 1px #aaa;
    background-color: rgb(173, 172, 172);
}
</style>