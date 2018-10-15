<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      >
      <v-list>
      <v-toolbar flat class="hidden-sm-and-up">
      <v-list>
        <v-list-tile class="" >
          <v-list-tile-title class="title">
            TAK-MEBEL
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
      <v-subheader>Навигация сайта</v-subheader>
            <v-divider key="02"></v-divider>
        <v-list-tile 
        router
        to="/"
        key="1"
        exact>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Главная</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- ///////////////////////////////////////// -->
        <div
        v-for="(item) in menu_items.categories"
        :key=item.slug>
        <v-subheader>{{item.title}}</v-subheader>
        <v-divider></v-divider>
        <div
        v-if="item.children!=''">
        <v-list-tile
        router
        v-for="i in item.children"
        :to="i.slug"
        :key="i.id"
        exact>
        <v-list-tile-action>
          <v-icon v-html="i.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-content v-text="i.title">
          </v-list-tile-content>
        </v-list-tile-content>
        </v-list-tile>
        </div>
        <div
        v-else>
        {{item.slug}}
        </div> 
        </div>
        
        <!-- ///////////////////////////////////////// -->
        <v-subheader>Каталог</v-subheader>
        <v-divider key="02"></v-divider>
        <!-- Начало списка каталог товаров -->
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items_catalog"
          exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Конец списка каталог товаров -->

        
          <v-subheader>Информация</v-subheader>
       
        <v-divider key="077"></v-divider>

        <!-- Начало списка информации -->
        <v-list-tile
          router
          :to="item.to"
          :key="i+56"
          v-for="(item,i) in items_information"
          exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Конец списка информации -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="primary" dark class="toolbar-back">
      <v-btn @click="drawer = !drawer" icon><v-icon>mdi-menu</v-icon></v-btn>
      <v-btn
        class="hidden-sm-and-down"
        icon
        @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'mdi-format-horizontal-align-right' : 'mdi-format-horizontal-align-left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" class="hidden-sm-and-down"></v-toolbar-title> 
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center hidden-sm-and-down py-4 " >
          <v-text-field 
            solo
            label="Поиск"
            append-icon="mdi-magnify"
            light
            style="width:50%; display:inline-block"
          >
          </v-text-field>
        </v-flex>
      </v-layout> 
          
      <v-tooltip bottom>
      <v-btn
        slot="activator"
        icon>
      <v-icon>mdi-cart</v-icon>
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
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        menu_items: [],
        preloader:false,
        items_catalog:[
          {icon: 'mdi-checkbox-intermediate', title: 'Столы', to:'/1'},
          {icon:'mdi-seat-recline-normal', title: 'Стулья', to:'/2'},
          {icon: 'mdi-sofa', title:'Диваны', to:'/3'},
          {icon: 'mdi-stove', title:'Шкафы', to:'/4'},
          {icon: 'mdi-hotel', title: 'Кроваты', to:'/5'}
        ],
        items_information: [
          { icon: 'mdi-credit-card', title: 'Оплата', to: '/6' },
          { icon: 'mdi-truck-delivery', title: 'Доставка', to: '/7' },
          { icon: 'mdi-phone', title: 'Контакты', to: '/8' },
          { icon: 'mdi-newspaper', title: 'Новости', to: '/9' },
          { icon: 'mdi-information', title: 'О нас', to: '/10' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'TAK - MEBEL'
      }
    },
    mounted(){
      this.preloader=true
      this.$axios.$get("category")
          .then(response=>{
            this.menu_items=response
            this.preloader=false
            console.log(this.menu_items)
          });

    },
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

























<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      >
      <v-list>
      <v-toolbar flat class="hidden-sm-and-up">
      <v-list>
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
        key="1"
        exact>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Главная</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- ///////////////////////////////////////// -->
        <div
        v-for="(item) in menu_items.categories"
        :key=item.slug>
        <v-subheader>{{item.title}}</v-subheader>
        <v-divider></v-divider>
        <div
        v-if="item.children!=''">
        <v-list-tile
        router
        v-for="i in item.children"
        :to="i.slug"
        :key="i.id"
        exact>
        <v-list-tile-action>
          <v-icon v-html="i.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-content v-text="i.title">
          </v-list-tile-content>
        </v-list-tile-content>
        </v-list-tile>
        </div>
        <div
        v-else>       
        </div> 
        </div>
        <!-- ///////////////////////////////// -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="primary" dark class="toolbar-back">
      <v-btn @click="drawer = !drawer" icon><v-icon>mdi-menu</v-icon></v-btn>
      <v-btn
        class="hidden-sm-and-down"
        icon
        @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'mdi-format-horizontal-align-right' : 'mdi-format-horizontal-align-left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" class="hidden-sm-and-down"></v-toolbar-title> 
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center hidden-sm-and-down py-4 " >
          <v-text-field 
            solo
            label="Поиск"
            append-icon="mdi-magnify"
            light
            style="width:50%; display:inline-block"
          >
          </v-text-field>
        </v-flex>
      </v-layout> 
          
      <v-tooltip bottom>
      <v-btn
        slot="activator"
        icon>
      <v-icon>mdi-cart</v-icon>
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
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        base_category_link: '',
        clipped: true,
        drawer: true,
        fixed: false,
        menu_items: [],
        preloader:false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'TAK - MEBEL'
      }
    },
    mounted(){
      this.preloader=true
      this.$axios.$get("category")
          .then(response=>{
            this.menu_items=response
            this.preloader=false
            console.log(this.menu_items)
          });

    },
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