<template>
<GDialog v-model="value">
  <div class="wrapper">
  <div class="actions">
        <button
          class="btn btn--outline-gray"
          @click="value = false"
        >
          X
        </button>
      </div>
      <div class="content">
        <p>
          {{subcategory.subcategoria_descripcion_detalle}}
        </p>
      </div>

      
    </div>
</GDialog>
  <div class="seleccion">
    <div class="header">
        <img :src=subcategory.subcategoria_img class="header__img">
        <div class="header__btn" @click="$router.go(-1)"><img src="@/assets/atras.svg" alt=""></div>
        <div class="header__div">
            <p>{{subcategory.subcategoria_nombre}}</p>
        </div>
    </div>

    <div class="opciones">
        <div class="opciones__btn">
            <button class="opciones__btn__button btn--click">Promociones</button>
            <button class="opciones__btn__button btn--click2">Recomendado para ti</button>
        </div>
        <div class="opciones__slider">
            <Slider_recomendacion/>
        </div>
    </div>

    <div class="informacion">
        <div class="informacion__h2"><h2>{{subcategory.subcategoria_nombre}}</h2></div>
        <div v-if="subcategory.subcategoria_informacion_adicional" class="informacion__div">
            <div class="horario">
                <p>{{subcategory.subcategoria_informacion_adicional}}
                </p>
            </div>
        </div> 
        <div v-if="subcategory.subcategoria_descripcion" class="informacion__p">
            <p>{{subcategory.subcategoria_descripcion}}<b v-if="subcategory.subcategoria_descripcion_detalle" @click="onOpen">&#9432;</b> </p>
            
        </div>
    </div>

    <div v-for="producto in products" :key="producto.producto_id" class="card">
        <div class="card__div"  @click="selectProduct(producto)">
            <img :src=producto.producto_img class="card__div__img">
            <div class="informe">
                <div class="informe__div">
                    <p>{{producto.producto_nombre}}</p>
                    <span class="informe__div__span">${{producto.producto_precio}}</span>
                </div>
                <div class="informe__descripcion">
                    <p>{{producto.producto_descripción}}</p>

                    <p v-if="producto.producto_info_aclaracion" class="informe__descripcion__adicional">
                        {{producto.producto_info_aclaracion}}
                    </p>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import Slider_recomendacion from "@/components/Slider_recomendacion.vue";
import store from '@/store';

// MODAL
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import router from '@/router';

// Toast


export default {
    components:{
        Slider_recomendacion,
        GDialog,
    },
    data(){
        return{
            subcategory: {},
            subcategoryID: null,
            categoryData: null,
            value: false,
            products: {}

        }
    },
    created(){
        this.subcategoryID = this.$route.params.subcategory
        this.categoryID = this.$route.params.category

        this.getSubcategory()
    },
    methods:{
        onOpen() {
        this.value = true
        },
        getSubcategory(){

            const setSubcategory = new Promise((resolve, reject) => {
                this.subcategory = store.state.subCategoryData
                resolve()
            
            })

            setSubcategory.then( () => {
                this.setProducts()
            })
        },
        setProducts(){
            this.products = this.subcategory.productos
        },
        selectProduct(producto){
            let isCategoryActive = store.state.categoryData.categoria_id === store.state.dayPartCategory ? true : false;

            isCategoryActive ? this.goToProductPage(producto) : this.notAvailableProduct();
        },
        goToProductPage(producto){
            store.dispatch('setProduct',producto)
            router.push({path:'/producto/' + producto.producto_id})
        },
        notAvailableProduct(){
            this.$toast('Esta opción no se encuentra disponible en este momento', {
                                                duration: 3000,
                                                styles:{
                                                    font: '10px Avenir, sans-serif',
                                                    padding: '0',
                                                    margin: '120px 0px',
                                                    'background-color': '#D02C2F',
                                                    color:'white',

                                                },
                                                disableClick: true,
                                                });
        }
    }

}
</script>

<style lang="scss" scoped>
.seleccion{
    background-color: #ECECEC;
    width: 100%;
    // margin-top: 5em;
    height: 100%;
    .header{
        position: relative;
        font-size: 1.8em;
        background-color: #666;
        font-weight: 900;
        color: white;
        &__img{
        max-height: 9em;
        }
        &__btn{
        position: absolute;
        width: 6%;
        top: 50%;
        left: 4%;
        transform: translate(-10%, -50%);
        z-index: 999;
        }
        &__div{
            width: 70%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            line-height: 1.2em;
            
        }
    }
    .opciones{
        margin-top: 1.2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        &__btn{
            width: 90%;
            display: flex;
            font-size: 1.1rem;
            font-weight: 500;
            &__button{
                &:hover{
                    transition: all 0.4s ease-out;
                    border-bottom: 3px solid orange;
                    color: orange;
                    padding-bottom: 0.3em;
                }
            }
            .btn--click2{
                margin-left: 1rem;
            }
        }
        &__slider{
            width: 90%;
        }
    }
    .informacion{
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__h2{
            margin-top: 5%;
            width: 90%;
            font-size: 1.2rem;
            font-weight: 900;
            color: black;
        }
        &__div{
            margin-top: 5%;
            border-radius: 12px;
            border: 1px solid #F58220;
            background:  linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.532)), rgba(255, 211, 145, 0.201);
            width: 90%;

            .horario{
                margin-left: .5rem;
                padding: 1em;
                width: 86%;
                font-size: 0.8em;
            }
        }
        &__p{
            margin-top: 5%;
            width: 90%;
            font-weight: 500;
        }
    }
    .card{
        padding: 0.5em 0;
        display: flex;
        justify-content: center;

        &__div{
            width: 90%;
            display: flex;
            border: 1px solid #D6D6D6;
            &__img{
                width: 6.125em;
            }
            .informe{
                background-color: #FFFFFF;
                width: 80%;
                padding: 0.5em 1em;
                &__div{
                    display: flex;
                    justify-content: space-between;

                    &__p{
                        width: 90%;
                    }

                    &__span{
                        background: #F58220;
                        width: 5em;
                        height: 2em;
                        text-align: center;
                        font-size: 0.75em;
                        font-weight: 800;
                        color: white;
                        border-radius: 12px;
                    }
                }
                &__descripcion{
                    padding: 0.5rem 0;
                    font-size: 0.8em;
                    color: #666666;

                    &__adicional{
                        padding-top: 0.6em;
                        color: #666666;
                        font-size: 0.438em;
                        font-style: italic;
                        font-weight: 300;
                        line-height: 1em;
                    }

                }
            }
        }
    }
}

.wrapper {
  color: #000;
}

.content {
  padding: 0 2em 2em 2em;
  font-size: 0.75em;
  font-weight: 500;
}

.actions {
    display: flex;
    justify-content: flex-end;
    padding: 1em 1em 0 0;
    font-size: 1em;

}
</style>