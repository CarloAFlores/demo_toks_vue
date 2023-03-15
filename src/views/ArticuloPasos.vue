<template>
  <Header :currentPage="5" :titleArticle=product.producto_nombre />  

    <div class="section">
        <img :src="product.producto_img" class="section__img">
        <div class="section__info-img">
            <span class="section__aviso-imagen">Imágen ilustrativa</span>        
        </div>

        <div class="content">

            <div class="content__steps-section">
        

                <div v-for="(tiempo, index) in product.tiempos" :key="tiempo.tiempo_id" class="content__steps-section__steps">
                    <div class="content__steps-section__step">
                        <span :class="{'active-step__span': index + 1 === this.tiempo.tiempo_id}" class="content__steps-section__step__span">{{index + 1}}</span>
                        <p :class="{'active-step__p': index + 1 === this.tiempo.tiempo_id}" class="content__steps-section__step__p">{{tiempo.tiempo_nombre_extracto}}</p>                
                    </div>
                    <div  v-if="index != product.tiempos.length - 1" class="hl"></div>
                </div>
            
            </div>

            <div v-for="seccion in tiempo.secciones_tiempo" :key="seccion.seccion_tiempo_id" class="content__steps-info">
                <div class="content__steps-info__title">
                    <div class="content__steps-info__title__header">
                        <h4 class="content__steps-info__title__header__h4">
                            {{seccion.seccion_tiempo_nombre}}
                        </h4>

                        <span class="content__steps-info__title__header__span">Obligatorio</span>
                    </div>

                    <p class="content__steps-info__title__p">{{seccion.seccion_tiempo_descripcion}}</p>
                </div>

                <div class="content__steps-info__options">
                
                    <div v-for="grupo in seccion.grupos" :key="grupo.grupo_id" class="content__steps-info__options__card">
                        <img class="content__steps-info__options__card__img" v-if="grupo.type === 1" :src=grupo.grupo_img alt="img-grupo">
                        <img class="content__steps-info__options__card__img" v-if="grupo.type === 2" :src=grupo.producto_img alt="img-grupo">
                        <h5 class="content__steps-info__options__card__h5" v-if="grupo.type === 1">{{grupo.grupo_nombre}}</h5>
                        <h5 class="content__steps-info__options__card__h5" v-if="grupo.type === 2">{{grupo.producto_nombre}}</h5>
                        <p class="content__steps-info__options__card__p" v-if="grupo.type === 1">{{grupo.grupo_descripcion}}</p>
                        <p class="content__steps-info__options__card__p" v-if="grupo.type === 2">{{grupo.producto_descripcion}}</p>
                    </div>

                
                </div>
            </div>
                  
        
        </div>

        <div class="footer">
                <button class="footer__btn">Siguiente | {{product.producto_precio}}</button>
        </div>
    </div> 


  
</template>

<script>

import Header from '@/components/Header.vue'
import store from '@/store';
export default {

    components:{
        Header
    },

    data(){
        return{
            currentPage: 5,
            product:{},
            tiempo:{},
            sinGuarnicionOption: false
        }
    },
    created(){
        this.getProduct()
        this.getCurrentTime()
    },
    methods:{
        getProduct(){
            this.product = store.state.productData
        },
        getCurrentTime(){
            this.tiempo = store.state.tiempoData
        }
    }

}
</script>

<style lang="scss" scooped>

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

.section{
    &__img{
        height: 12em;
    }
    &__info-img{
        position: absolute;
        top: 13.8em;
        display: flex;
        width: 100%;
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

    &__steps-section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__steps{
            display: flex;
            align-items: center;
        }
        &__step{
            text-align: center;
            width: 2.1em;
            &__span{
                width: 0.8em;
                height: 0.8em;
                border-radius: 50%;
                border:2px solid #D9D9D9;
                padding: 0.8em;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 0.625em;
                color: #D9D9D9;
            }
            &__p{
                font-size: 0.563em;
                color: #D9D9D9;

            }
        }
    }

    &__steps-info{
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
                text-align: center;
                padding: 1em;
                border: #666666 1px solid;
                border-radius: 10px;
                background: white;
                &__h5{
                    font-size: 0.9em;
                }
                &__p{
                    font-size: 0.5em;
                }
            }
        }

    }

    @media (min-width: 360px) {
        .content__steps-info{
            &__options{ 
                grid-template-columns: repeat(3, 1fr); 
            } 
        }
    }

    @media (max-width: 360px) {
        .content__steps-info{
            &__options{ 
                grid-template-columns: repeat(2, 1fr); 
            } 
        }
    }
}

.active-step{
    &__span{
        border:2px solid #25A441;
        color: #25A441;

    }
    &__p{
        color: #25A441;
    }
}

.hl {
    width: 6.2em;
    border-top: 2px solid #D9D9D9;
    margin-bottom: 1.1em;

}


</style>