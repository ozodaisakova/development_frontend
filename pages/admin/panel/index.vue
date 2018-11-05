<template>
<v-layout row wrap>
    <panel-card 
        v-for="(item, i) in panels"
        :key="i"
        v-bind:title="item.title" 
        v-bind:icon="item.icon" 
        v-bind:count="item.count" 
        v-bind:src="item.src" 
        ></panel-card>
    
</v-layout>    
</template>
<script>
import PanelCard from '~/components/admin/PanelCard.vue'
export default {
    layout: 'admin',
    data(){
        return{
            count: 89,
            panels: [
                {title: 'Всего продаж', icon: 'shopping_cart', count: '122K', src: '/admin/catalog/product'},
                {title: 'Всего товаров', icon: 'book', count: '78', src: '/admin/catalog/sdvhdjsk'},
                {title: 'Всего покупателей', icon: 'people', count: '196', src: '/admin/catalog/product'},
                {title: 'Всего отзывов', icon: 'message', count: '21', src: '/admin/catalog/product'},
            ]
        }
    },
    components:{
        PanelCard
    }

}
</script>

