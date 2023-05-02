<template>
  <div v-if="carroActivado" class="cart">
    <div class="cart__header">
        <h6>Órdenes</h6>
    </div>

    <div v-if="orders.length > 0" class="cart__content">
        <p class="cart__content__p">Orden de {{comensal}}</p>

        <img @click="openList = true" v-if="!openList" class="cart__content__icon-arrow" src="./../assets/arrow-down.svg" alt="">
        <img @click="openList = false" v-if="openList" class="cart__content__icon-arrow active-arrow" src="./../assets/arrow-down-orange.svg" alt="">
        <img class="cart__content__icon-pen" src="./../assets/edit-pen.svg" alt="">
        <img class="cart__content__icon-basura" src="./../assets/basura-icon.svg" alt="">
    </div>

    <div v-if="orders.length === 0" class="empty-cart">
        <h5>No hay articulos en el carrito</h5>
    </div>

    <div v-if="openList">
        <div  v-for="product in orders" :key="product" class="cart__order">
            <p class="cart__order__product">{{product.producto.producto_nombre}}</p>
            <!-- <p class="cart__order__opciones">Producto</p> -->
        </div>
    </div>

    <div class="cart__footer">
        <button @click="$router.push({ path: '/resumen' })" class="cart__footer__button">Ver orden</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    props: [
        'carroActivado'
    ],

    data(){
        return{
            orders: [],
            comensal:'',
            ordenData: [],
            openList: false
        }
    },
    mounted(){
        this.customerDataService()
        this.getOrderData();
    },
    methods:{
        async customerDataService(){
            // await axios.get('http://189.161.36.232:8000/api/customers')
            await axios.get(this.base_url_services+'/api/customers')
            .then( response => {
                console.log(response);
                this.customerData = JSON.parse(response.data.data)
                this.comensal = this.customerData.comensal_nombre
            })
            },
        getOrderData(){
            const setOrderData = new Promise ( (resolve) =>{
                this.ordenData = this.findOrder()
                resolve()
            });

            setOrderData.then( () =>{
                let products = [];

                this.ordenData.forEach(element => {
                    products.push(element.productos_seleccionados[0])
                });

                this.orders = products;

            })
        },
        findOrder(){
            let ordenes = this.cart[0].ordenes;

            let result = ordenes.filter(obj => {
                return obj.comensal_id === this.Comensal_ID;
            });

            return result;
        },
    },
    computed:{
        ...mapState(
            [
                'cart',
                'Comensal_ID'
            ]
        )
    }

}
</script>

<style lang="scss" scoped>

.empty-cart{
    text-align:  center;
    font-size: 0.8em;
    color: #3e3e3e;
    padding: 0.3em 0.1em;
}

.active-arrow{
    transform: rotate(180deg);
}

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
        padding: 1em 0 0 1em;
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
    &__order{
        font-weight: bold;
        font-size: 0.6em;
        padding: 0 1em;
        &__opciones{
            margin-left: 0.8em;

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