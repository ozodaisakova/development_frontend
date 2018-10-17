<template>
    <div>
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
</template>
<script>
import PageNotFound from '~/components/PageNotFound.vue'
export default{
    components: {PageNotFound}
}
</script>
