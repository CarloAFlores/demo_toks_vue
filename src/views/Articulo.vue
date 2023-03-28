<template>
  <Header :currentPage="4" :titleArticle=product.producto_nombre />  
  <GDialog border-radius="10px" persistent v-model="modalValue">
  <div class="modal-cart">
      <div class="modal-cart__content">
        <p class="modal-cart__content__p">
          ¡Tu orden ha sido agregada al carrito!
        </p>
        <button class="modal-cart__content__boton-carro">
            Ver carrito
        </button>

        <button @click="$router.push({ path: '/menu/'+this.Unidad_ID })" class="modal-cart__content__boton-continuar">
            Agregar algo más
        </button>

      </div>

      
    </div>
</GDialog>

    <div class="section">
        <img :src="product.producto_img" class="section__img">
        <div class="section__info-img">
            <span class="section__aviso-imagen">Imágen ilustrativa</span>
            <span class="section__precio">${{product.producto_precio}}</span>
        
        </div>

        <div class="content">
        
            <div class="content__general-info">
                <h3 class="content__general-title">{{product.producto_nombre}}</h3>
                <p class="content__general-detalle">{{product.producto_info_detalle}}</p>
                <p class="content__general-descripcion">{{product.producto_descripción}}</p>
            </div>

            <div v-if="product.tiempos.length === 1" class="steps">
                <!-- TODO: Variantes cuando sea un solo paso -->
                <div class="steps__title">
                    <div class="steps__title__header">
                        <h4 class="steps__title__header__h4">
                            {{product.tiempos[0].seccion_tiempo_nombre}}
                        </h4>

                        <span class="steps__title__header__span" v-if="product.tiempos[0].seccion_tiempo_obligatorio">Obligatorio</span>
                    </div>

                    <p class="steps__title__p">{{product.tiempos[0].seccion_tiempo_descripcion}}</p>
                </div>

                <div class="steps__options">
                
                    <div :class="{'card-inactive' : grupo.producto_id != optionSelected.producto_id, 'card-active' : grupo.producto_id === optionSelected.producto_id}" @click="selectOption(grupo)" v-for="grupo in product.tiempos[0].grupos" :key="grupo.grupo_id" class="steps__options__card">
                        <img class="steps__options__card__img" v-if="grupo.type === 1" :src=grupo.grupo_img alt="img-grupo">
                        <img class="steps__options__card__img" v-if="grupo.type === 2" :src=grupo.producto_img alt="img-grupo">
                        <h5 class="steps__options__card__h5" v-if="grupo.type === 1">{{grupo.grupo_nombre}}</h5>
                        <h5 class="steps__options__card__h5" v-if="grupo.type === 2">{{grupo.producto_nombre}}</h5>
                        <p class="steps__options__card__p" v-if="grupo.type === 1">{{grupo.grupo_descripcion}}</p>
                        <p class="steps__options__card__p" v-if="grupo.type === 2">{{grupo.producto_descripcion}}</p>
                    </div>

                
                </div>

                    <div class="guarnicion-option">
                        <input class="guarnicion-option__input" type="checkbox" id="checkbox" v-model="sinGuarnicionOption" />
                    <label for="checkbox">Sin guarnición</label>
                    </div>
            </div>

            <div v-if="product.tiempos.length > 1" class="steps">
                 <div class="steps__title">
                    <div class="steps__title__header">
                        <h4 class="steps__title__header__h6">
                            ¡Completa tu orden en tan sólo {{product.tiempos.length}} pasos!
                        </h4>
                    </div>
                </div>

                <div class="steps__content">    
                    <div v-for="(step, index) in product.tiempos" :key="step.tiempo_id" class="steps__content__list-element">
                        <div class="steps__content__list-element__div">
                            <span class="steps__content__list-element__span"> {{index + 1}} </span> 
                            <p>{{step.tiempo_nombre}}</p>
                        </div>

                        <div v-if="index != product.tiempos.length - 1" class="vl"></div>
                    </div>
                </div>
            </div>            
        
        </div>

        <div class="footer">
                <button @click="addToCart()" :class="{'active': optionSelected.producto_id || sinGuarnicionOption}" :disabled="sinGuarnicionOption" v-if="product.tiempos.length === 1" class="footer__btn">Agregar al carrito | ${{product.producto_precio}}</button>

                <button v-if="product.tiempos.length > 1" class="footer__btn active" @click="goToSteps()">Agregar a la orden</button>
        </div>
    </div> 


  
</template>

<script>

import Header from '@/components/Header.vue'
import store from '@/store';
import router from '@/router';

// MODAL
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import { mapState } from 'vuex';


export default {

    components:{
        Header,
        GDialog,

    },

    data(){
        return{
            currentPage: 4,
            product:{},
            sinGuarnicionOption: false,
            productStepsCount: 0,
            currentProductSteps: 0,
            optionSelected: {},
            modalValue: false,

        }
    },
    created(){
        this.getProduct()
    },
    methods:{
        addToCart(){
            store.dispatch('addProduct',{"producto":this.product,"opciones_seleccionadas":this.optionSelected}).then( ()=> {
                     this.modalValue = true

            })
        },
        selectOption(option){
            this.optionSelected = option
            this.sinGuarnicionOption = false
        },
        getProduct(){
            this.product = store.state.productData
            this.countSteps()

        },
        goToSteps(){
            let currentStep = 0;
            switch (this.currentPage) {
                case 4:
                    currentStep = 1;
                    break;
            
                default:
                    break;
            }

            store.dispatch('setTiempo',this.product.tiempos[currentStep - 1]);

            let currentDish = {
                "producto_principal": this.product,
                "opciones_seleccionadas": []
            }


            store.dispatch('setPartialOrder',currentDish)

            router.push({path:'/producto/'+this.product.producto_id+'/'+currentStep})
        },
        countSteps(){
            this.productStepsCount = this.product.tiempos.length
            this.currentProductSteps = this.product.tiempos
        },
    },
    watch:{
        sinGuarnicionOption(value){
            value ? this.optionSelected = {} : ''
        }
    },
    computed:{
        ...mapState(
            [
                'Unidad_ID'
            ]
        )
    }
    
    

}
</script>

<style lang="scss" scooped>

.modal-cart{
    padding: 2em;
    &__content{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        row-gap: 1em;
            
        &__p{
            font-size: 0.875em;
            width: 18em;
            font-weight: bold;
            text-align: center;
            padding-bottom: 1.5em;
        }
        &__boton-carro{
            font-size: 0.875em;
            border-radius: 0.7em;
            width: 12em;
            padding: 0.8em;
            border: 1px solid black;
        }
        &__boton-continuar{
            font-size: 0.875em;
            border-radius: 0.7em;
            width: 12em;
            padding: 0.8em;
            background-color: black;
            color: white;
        }
    }
}

.vl {
  border-left: 1px solid lightgray;
  height: 2em;
  margin:.2em .4em;
}


.footer{
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: 0;
    padding-bottom: 1em;
    padding-top: 1em;
    border-top: #DDDDDD solid 0.5px;
    &__btn{
      color: #FFFFFF;
      background-color: #AFAFAF;
      padding-right: 4em;
      padding-left: 4em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      border-radius: 0.3em;
      
    }
    .active{
      background: black;
    }
}

.guarnicion-option{
    padding-top: 0.5em;
    display: flex;
    &__input{
        margin-right: 0.5em;
    }
}

.section{
    &__img{
        height: 12em;
    }
    &__info-img{
        position: absolute;
        top: 13.8em;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0 1em;

    }
    &__precio{
        background:#F58220;
        color: white;
        padding: .3rem .7rem;
        border-radius: 12px;
        font-size: 0.8em;
        font-weight: bold;
    }
    &__aviso-imagen{
        font-size: 0.6em;
        font-weight: lighter;
        background:white;
        color: black;
        padding: 0.04em 1.5em;
        border-radius: 10px;
        align-self: center;
    }

}

.content{
        padding: 2em 1.875em;
    
    &__general-title{
        font-weight: 800;
        font-size: 1.2em;
        
    }
    &__general-detalle{
        font-size: 0.650em;
        color: #666666;
        padding-bottom: 0.5em;
    }
    &__general-descripcion{
        color: #666666;
        font-size: 0.75em;
        font-style: italic;
        font-weight: 400;
        padding-bottom: 2em;
        border-bottom: #E4E4E4 1px solid;
    }
}

.card-active{
    border: #F58220 0.5px solid;
}

.card-inactive{
    border: #ddd 0.5px solid;
}

.steps{
   &__title{
        padding-top: 1em;
        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
                &__h4{
                font-size: 1.2em;
                font-weight: 400;
                color: black;
                }
                &__h6{
                    font-size: 1em;
                    font-weight: 600;
                    color: black;
                }
            
                &__span{
                color: #F58220;
                background-color: #f8f5f2;
                padding: 0.4em 1em;
                border-radius: 10px;
                font-size: 0.7em;
                 }
        }
        &__p{
            font-size: 0.8em;
        }
   } 

   &__options{
        width: 100%;
        display: grid;
        gap: .8rem;
        &__card{
            width: 6.25em;
            text-align: center;
            padding: 1em 1em 0;
            border-radius: 10px;
            background: white;
            &__h5{
                padding: 0.5em 0;
                font-size: 0.8em;
                font-weight: 200;
                line-height: 1em;
            }
            &__p{
                font-size: 0.5em;
            }
        } 
   }

   &__content{
    padding-top: 0.8em;
        &__list-element{
            align-items: center;
            &__div{
                display: flex;
            }
            &__span{
                width: 0.875em;
                height: 0.875em;
                border-radius: 50%;
                background-color: #25A441;
                padding: 0.8em;
                line-height: 0.875em;
                text-align: center;
                font-size: 0.625em;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                margin-right: 1em;
            }
        }
   }

   @media (min-width: 360px) {
        .steps{
            &__options{ 
                grid-template-columns: repeat(3, 1fr); 
            } 
        }
    }

    @media (max-width: 360px) {
        .steps{
            &__options{ 
                grid-template-columns: repeat(2, 1fr); 
            } 
        }
    }

}

</style>