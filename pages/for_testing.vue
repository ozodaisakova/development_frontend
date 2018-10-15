<template>
<div>
    <hr>
    <p>{{url}}</p>
</div>
</template>
<script>
export default {
    data(){
        return{
            url: this.$store.state.base_url+"posts",
            posts:[]            
        }
    }, 
    created() {
        
    },
    methods:{
        
    }
}
</script>
