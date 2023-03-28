<template>
  <div v-if="carroActivado" class="cart">
    <div class="cart__header">
        <h6>Órdenes</h6>
    </div>

    <div class="cart__content">
        <p class="cart__content__p">Orden de {{comensal}}</p>

        <img class="cart__content__icon-arrow" src="./../assets/arrow-down.svg" alt="">
        <img class="cart__content__icon-pen" src="./../assets/edit-pen.svg" alt="">
        <img class="cart__content__icon-basura" src="./../assets/basura-icon.svg" alt="">
    </div>

    <div class="cart__footer">
        <button class="cart__footer__button">Ver orden</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import axios from 'axios'
export default {
    props: [
        'carroActivado'
    ],

    data(){
        return{
            orders: [],
            comensal:'',
        }
    },
    mounted(){
        this.customerDataService()
    },
    methods:{
        async customerDataService(){
            // await axios.get('http://189.161.36.232:8000/api/customers')
            await axios.get('http://localhost:8000/api/customers')
            .then( response => {
                this.customerData = JSON.parse(response.data.data)
                this.comensal = this.customerData.comensal
            })
            }
    }

}
</script>

<style lang="scss" scoped>

.cart{
    transition: visibility 0s, opacity 0.5s linear;
    background: white;
    box-shadow: 15px 17px 42px -6px rgba(0,0,0,0.61);
    -webkit-box-shadow: 15px 17px 42px -6px rgba(0,0,0,0.61);
    -moz-box-shadow: 15px 17px 42px -6px rgba(0,0,0,0.61);
    width: 11em;
    position: fixed;
    z-index: 99;
    top: 2.4em; 
    right: 3.2em;
    
    &__header{
        background-color: #ddd;
        padding: 0.3em 1em;
        font-size: 0.8em;
        font-weight: bold;

    }
    &__content{
        padding: 1em;
        font-size: 0.625em;
        display: flex;
        align-items: center;
        &__p{
            margin-right: 5px;

        }
        &__icon-arrow{
            margin-right: 5px;
            width: 12px;
            height: 10px;
        }
        &__icon-pen{
            margin-right: 5px;
            width: 10px;
            height: 10px;
        }
        &__icon-basura{
            margin-right: 5px;
            width: 12px;
            height: 16px;
        }
    }
    &__footer{
        display: flex;
        justify-content: center;
        &__button{
            width: 90%;
            background-color: #F58220;
            padding: 0.5em 2em;
            color: white;
            border-radius: 1em;
            margin: 1em;
            font-size: 0.625em;
            font-weight: bold;

        }

    }
}

</style>