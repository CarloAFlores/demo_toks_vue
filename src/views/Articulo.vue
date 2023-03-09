<template>
  <Header :currentPage="4" :titleArticle=product.producto_nombre />  

  
</template>

<script>
import Header from '@/components/Header.vue'
import router from '@/router';
import store from '@/store';
export default {

    components:{
        Header
    },

    data(){
        return{
            currentPage: 4,
            product:{},
        }
    },
    created(){
        this.getProduct()
    },
    methods:{
        getProduct(){
            const setProduct = new Promise( (resolve, reject) => {
                this.product = store.state.productData
                resolve()
            });
        }

    }

}
</script>

<style lang="scss" scooped>

</style>