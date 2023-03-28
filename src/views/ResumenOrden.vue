<template>
  <Header :currentPage="6" titleArticle="Resumen de tu orden" />
  <!-- MODAL -->
  <!-- Modal se te antoja algo más -->
<div :class="{'block': extraDialog}" id="myModal" class="modal">

  <!-- Modal content -->
  
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-header__close-title">
        <span @click="resetRecomendationSelection()" class="close">&times;</span>
        <h2>{{selectedRecomendation.nombre}}</h2>
      </div>
      <button class="modal-header__btn">
        Guardar
      </button>
    </div>
    <div class="modal-body">
      <div class="modal-body__image-content">
        <div class="modal-body__image-content__img-price">
            <img :src=selectedRecomendation.img alt="product_img" class="modal-body__image-content__img-price__img">
            <div class="modal-body__image-content__img-price__price">
                <span class="modal-body__image-content__img-price__price__span">
                    ${{selectedRecomendation.precio}}
                </span>
            </div>
        </div>
        <p class="modal-body__image-content__description">
            {{selectedRecomendation.descripcion}}
        </p>
      </div>
      <div class="divisor"></div>
      <div class="modal-body__product-options">
        <div v-for="option in selectedRecomendation.opciones_personalizacion" :key="option.id" class="modal-body__product-options__option">
            <p class="modal-body__product-options__option__p">
            {{option.nombre}}</p>
            <input v-model="recomendationOptionSelected" :value=option.id type="radio" name="" id="" class="radio">
        </div>
      </div>

      <div class="modal-body__product-extras">
        <div class="modal-body__product-extras__option">
            <p class="modal-body__product-extras__option__title">Completa tu postre</p>
            <div class="modal-body__product-extras__option__content">
                <p class="modal-body__product-extras__option__content__p">
            Café americano</p>
                <input type="checkbox" name="" id="" class="checkbox">
            </div>
        </div>
      </div>
    </div>
    <!-- <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div> -->
  </div>

</div>

<!-- Modal edit -->

<!-- Modal se te antoja algo más -->
<div :class="{'block': editDialog}" class="modal">

  <!-- Modal content -->
  
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-header__close-title">
        <span @click="closeEditDialog()" class="close">&times;</span>
        <h2>Menú</h2>
      </div>
      <button class="modal-header__btn" :class="{'save-btn-active': editOptionSelectedFlag}">
        Guardar
      </button>
    </div>
    <div class="modal-body">
        <div class="modal-body__categories">

        <div :class="{'title-category-active': editFlagCategorySelected}" @click="selectCategory()" class="modal-body__categories__category">
            <p class="modal-body__categories__category__p">
                Bebidas refrescantes
            </p>

            <!--TODO: Versión para cuando está active  -->
            <img v-if="!editFlagCategorySelected" class="modal-body__categories__category__img" src="@/assets/arrow-down.svg" alt="down-arrow">

            <img v-if="editFlagCategorySelected" class="modal-body__categories__category__img" src="@/assets/arrow-down-orange.svg" :class="{'arrow-active': editFlagCategorySelected}" alt="down-arrow">

        </div>

        <div @click="selectGroup()" v-if="editFlagCategorySelected"  class="modal-body__categories__category-groups">
                <div class="modal-body__categories__category-groups__group">
                    <div class="modal-body__categories__category-groups__group__container">
                        <p :class="{'title-group-active':editFlagGroupSelected}" class="modal-body__categories__category-groups__group__container__p">
                        Refresco
                        </p>

                        <img class="modal-body__categories__category-groups__group__container__img" src="@/assets/arrow-down.svg" :class="{'arrow-active':editFlagGroupSelected}" alt="down-arrow">
                    </div>

                    <input class="modal-body__categories__category-groups__group__radio" type="radio" name="" id="">
                </div>
        </div>

        <div  class="modal-body__categories__group-products">
                <div v-if="editFlagGroupSelected" class="modal-body__categories__group-products__product">
                    <div  class="modal-body__categories__group-products__product__container">
                        <p class="modal-body__categories__group-products__product__container__p">
                        Coca Cola Regular
                    </p>

                    <input class="modal-body__categories__group-products__product__container__radio" type="radio" name="" id="">
                    </div>

                    <div class="modal-body__categories__group-products__product__opciones-personalizacion">
                        <div class="modal-body__categories__group-products__product__opciones-personalizacion__title">
                            <p class="modal-body__categories__group-products__product__opciones-personalizacion__title__p">
                            Elige un tamaño</p>
                            <span class="modal-body__categories__group-products__product__opciones-personalizacion__title__span">
                            Obligatorio
                            </span>
                        </div>
                        <div class="modal-body__categories__group-products__product__opciones-personalizacion__opcion">
                            <div class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text">

                                <p class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text__p">
                                    Mediano
                                </p>
                                <b class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text__b">
                                    355ml
                                </b>
                                <q class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text__q">
                                    | +$10
                                </q>
                            </div>
                            <input type="radio" name="" id="" class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__input radio">

                        </div>
                    </div>

                     <div class="modal-body__categories__group-products__product__opciones-personalizacion">
                        <div class="modal-body__categories__group-products__product__opciones-personalizacion__title">
                            <p class="modal-body__categories__group-products__product__opciones-personalizacion__title__p">
                            Hielo</p>
                            <span class="modal-body__categories__group-products__product__opciones-personalizacion__title__span">
                            Obligatorio
                            </span>
                        </div>
                        <div class="modal-body__categories__group-products__product__opciones-personalizacion__opcion">
                            <div class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text">

                                <p class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text__p">
                                    Con hielo
                                </p>
                                <b class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text__b">
                                </b>
                                <q class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__text__q">
                                </q>
                            </div>
                            <input type="radio" name="" id="" class="modal-body__categories__group-products__product__opciones-personalizacion__opcion__input radio">

                        </div>
                    </div>
                </div>
        </div>

        </div>
    </div>
    <!-- <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div> -->
  </div>

</div>

<!-- Modal aviso para borrar -->
<GDialog border-radius="10px" persistent v-model="validDeleteDialog">
  <div class="modal-cart">
      <div class="modal-cart__content">
        <p class="modal-cart__content__p">
          ¿Estás seguro que quieres eliminar tu selección?
        </p>
        <button class="modal-cart__content__boton-carro separator-button">
            Si
        </button>

        <button @click="validDeleteDialog = false" class="modal-cart__content__boton-continuar">
            No
        </button>

      </div>

      
    </div>
</GDialog>

<!-- Modal para agregar invitado -->
<GDialog border-radius="10px" v-model="addGuestDialog">
  <div class="modal-cart">
      <div class="modal-cart__content">
        <p class="modal-cart__content__p">
          ¿Cuál es su nombre?
        </p>
        <input class="modal-cart__content__input" type="text" name="" id="" placeholder="Escribe el nombre del invitado">
        <div class="modal-cart__content__btns">
            <button class="modal-cart__content__btns__boton-carro">
            Omitir nombre
            </button>

            <button @click="addGuestDialog = false" class="modal-cart__content__btns__boton-continuar">
                OK
            </button>
        </div>

      </div>

      
    </div>
</GDialog>

<!-- Modal para agregar algo mas -->
<GDialog border-radius="10px" v-model="addOrderDialog">
  <div class="modal-cart">
      <div class="modal-cart__content">
        <p class="modal-cart__content__p">
          ¿Para quien es la orden?
        </p>
        <button class="modal-cart__content__boton-carro separator-button">
            Para mí
        </button>

        <button @click="addGuestDialog = true" class="modal-cart__content__boton-continuar">
            Nuevo invitado
        </button>

      </div>

      
    </div>
</GDialog>

<!-- Modal -->

  <div class="container">
  
    <div class="container__header">
        <img src="https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg" alt="bg-header" class="container__header__img">
        <span class="container__header__span">
            Imágen ilustrativa
        </span>
    </div>

    <div class="container__content">
    
        <div class="container__content__general-info">
            <h2 class="container__content__general-info__h2">
                Resumen de tu orden
            </h2>

            <div class="container__content__general-info__detail">
                <div class="container__content__general-info__detail__main-title">
                    <div class="container__content__general-info__detail__main-title__text">
                        <p class="container__content__general-info__detail__main-title__text__p">Hamburguesa de pavo a la parrilla</p>
                        <img class="container__content__general-info__detail__main-title__text__icon" src="./../assets/edit-pen.svg" alt="">
                        <img @click="deleteProduct()" class="container__content__general-info__detail__main-title__text__icon" src="./../assets/basura-icon-small.svg" alt="">
                    </div>
                    <div class="container__content__general-info__detail__main-title__price">
                        $195
                    </div>
                </div>
                <div class="container__content__general-info__detail__options">
                    <div class="container__content__general-info__detail__options__text">
                        <p class="container__content__general-info__detail__options__text__p">Ensalada del huerto</p>
                    </div>
                    <div class="container__content__general-info__detail__options__price">
                        $0
                    </div>
                </div>

                <div class="container__content__general-info__detail__total">
                    <div class="container__content__general-info__detail__total__text">
                        <p class="container__content__general-info__detail__total__text__p">Total a pagar
                        <b>&#9432;</b>
                        </p>
                    </div>
                    <div class="container__content__general-info__detail__total__price">
                        $195
                    </div>
                </div>
            </div>


        </div>

        <div class="container__content__buttons">
            <button @click="addOrderDialog = true" class="container__content__buttons__add">
                Agregar algo más
            </button>

            <button @click="addGuestDialog = true" class="container__content__buttons__add-guest">
                Agregar invitado
            </button>
        </div>
    
    </div>

    <div class="container__recomendation">
        <h4 class="container__recomendation__h4">
            ¿Se te antoja algo mas?
        </h4>
        <div class="container__recomendation__cards">
             <carousel class="container__recomendation__cards__carousel" :items-to-show="2.5">
                <slide @click="selectedRecomendation = slide; extraDialog = true" class="container__recomendation__cards__carousel__slide" v-for="slide in recomendaciones" :key="slide.id">
                <div class="container__recomendation__cards__carousel__slide__card">
                    <img :src=slide.img alt="" class="container__recomendation__cards__carousel__slide__card__img">
                    <p class="container__recomendation__cards__carousel__slide__card__title">
                    {{slide.nombre}}</p>
                </div>
                </slide>
            </carousel>
        </div>
    </div>

    <div class="container__footer">
        <button class="container__footer__button">
            Confirmar orden
        </button>
    </div>
  
  </div>
  <!-- <div class="container-extra">

  </div> -->
</template>

<script>
import Header from '@/components/Header.vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import recomendations from '../data/recomendations.json'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import { mapState } from 'vuex';


export default {
    components:{
        Header,
        Carousel,
        Slide,
        Navigation,
        Pagination,
        GDialog,
    },
    data(){
        return{
            recomendaciones: [],
            extraDialog: false,
            editDialog: true,
            validDeleteDialog: false,
            addGuestDialog: false,
            addOrderDialog: false,
            selectedRecomendation : {},
            recomendationOptionSelected: null,

            // Manejo de info en caso de editar
            editOptionSelectedFlag: false,

            // TODO: Propiedad para guardar la data actual del producto y reconocerla en las opciones seleccionadas

            // TODO: Propiedad para detectar la categoria seleccionada de la lista desplegable

            editFlagCategorySelected: false,
            editCategorySelected: [],


            // TODO: Propiedad para detectar el grupo seleccionada de la lista desplegable

            editFlagGroupSelected: false,
            editGroupSelected: [],

            // TODO: Propiedad para detectar el producto seleccionada de la lista desplegable

            editFlagProductSelected: false,
            editProductSelected: [],

            // TODO: Propiedad para detectar las opciones seleccionada de la lista desplegable

            // editFlagGroupSelected: false,
            // editGroupSelected: [],


        }
    },
    methods:{
        selectCategory(){
            this.editFlagCategorySelected = !this.editFlagCategorySelected
        },
        selectGroup(){
            this.editFlagGroupSelected = !this.editFlagGroupSelected
        },
        resetRecomendationSelection(){
            this.selectedRecomendation = {};
            this.extraDialog = false;
            this.recomendationOptionSelected = null;
        },
        closeEditDialog(){
            this.editDialog = false;
        },
        deleteProduct(){
            this.validDeleteDialog = true
        }
    },
    mounted(){
        this.recomendaciones = recomendations
    },


}
</script>

<style lang="scss" scoped>

.container{
    &__header{
        width: 100%;
        background-color:red;
        position: relative;
        &__img{
            width: 100%;
            max-height: 12em;

        }
        &__span{
            position: absolute;
            display: flex;
            background-color: white;
            color: #383838;
            width: 12em;
            height: 2em;
            border-radius: 1em;
            font-size: 0.6em;
            font-weight: lighter;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            padding: 0 1em;
            top:16.5em;
            left: 0.375em;
        }
    }
    &__content{
            padding: 2em 1.5em;
        &__general-info{
            &__h2{
                font-weight: 500;
                font-size: 1em;

            }
            &__detail{
                &__main-title{
                    display: flex;
                    justify-content: space-between;
                    &__text{
                    display: flex;
                    align-items: center;
                        &__p{
                        margin-right: 5px;
                        font-size: 0.75em;

                        }
                        &__icon{
                        margin-right: 4px;

                            width: 10px;
                            height: 10px;
                        }
                    }
                    &__price{
                        font-size: 0.75em;
                    }
                }
                &__options{
                    display: flex;
                    justify-content: space-between;
                    &__text{
                    display: flex;
                    align-items: center;
                        &__p{
                        margin-right: 5px;
                        font-size: 0.7em;
                        font-style: italic;
                        color: #595959;

                        }
                    }
                    &__price{
                        font-size: 0.75em;
                    }
                }
                &__total{
                    margin-top: 1em;
                    display: flex;
                    justify-content: space-between;
                    &__text{
                    display: flex;
                    align-items: center;
                    }
                }
            }
        }

        &__buttons{
            padding-top: 1.5em;
            display: flex;
            justify-content: space-between;
            &__add{
                color: black;
                border: 1px solid black;
                border-radius: 10px;
                width: 12em;
                font-size: 0.8em;
                padding: 0.7em 1em;
            }
            &__add-guest{
                color: black;
                border: 1px solid black;
                border-radius: 10px;
                width: 12em;
                font-size: 0.8em;
                padding: 0.7em 1em;


            }
        }
    }
    &__recomendation{
        border-top: 1px solid #e9e9e9;
        margin: 1em 1.5em;
        &__h4{
            margin-top: 1em;
        }
        &__cards{
            margin-top: 1em;
            &__carousel{
                &__slide{
                        justify-content: flex-start;
                    &__card{ 
                        border: 1px solid #f58220;
                        border-radius: 10px;

                        width: 90%;
                        &__img{
                            padding: 3px 2px;
                            border-radius: 10px;
                            height: 6em;
                        }
                        &__title{
                            padding: 1em 0;
                            font-size: 0.7em;
                        }          
                    }
                    
                }
            }
        }
    }

    &__footer{
        border-top: 1px solid #E1dede;
        display: flex;
        justify-content: center;
        &__button{
            color: white;
            background-color: black;
            border-radius: 10px;
            width: 90%;
            height: 2.75em;
            margin: 1em 0;
        }
    }

}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
}

/* Modal Content */
.modal-content {
  position: fixed;
  border-radius: 0.4em 0.4em 0 0;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s
}
.divisor{
    border-top: 1px solid #dddddd;
    margin: 0;
}

/* The Close Button */
.close {
    color: #000;
  float: left;
  font-size: 20px;
  font-weight: normal;
  margin-right: 0.6em;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  margin: 1.313em 1.125em;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__close-title{
    display: flex;
  }
  &__btn{
    background-color: #979797;
    color: white;
    font-weight: lighter;
    padding: 0.4em 1em;
    border-radius: 0.4em;

  }
}

.separator-button{
    margin-bottom: 0.6em;
}
.modal-cart{
    padding: 2em;
    &__content{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;

        &__btns{
            display: flex;
            justify-content: space-between;
            gap: 1em;
             &__boton-carro{
                font-size: 0.875em;
                border-radius: 0.7em;
                width: 9em;
                padding: 0.8em;
                border: 1px solid black;
            }
            &__boton-continuar{
                font-size: 0.875em;
                border-radius: 0.7em;
                width: 9em;
                padding: 0.8em;
                background-color: black;
                color: white;
            }
        }
            
        &__input{
            width: 21em;
            border: 1px solid #d9d9d9;
            padding: 0.8em 1em;
            border-radius: 10px;
            font-size: 0.8em;
            margin-bottom: 2em;

        }
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

.save-btn-active{
        background-color: #000 !important;
    }

.modal-body {
    margin: 0 1.125em;
    &__image-content{
        &__img-price{
            display: flex;
            align-items: flex-end;
            width: 60%;
            position: relative;
            left: 20%;
            &__img{
                max-width: 12.5em;
            }
            &__price{
                &__span{
                position: sticky;
                display: flex;
                margin-bottom: 1em;
                margin-left: -2em;
                justify-content: center;
                align-items: center;
                background-color: #f58220;
                color: white;
                font-weight: bold;
                font-size: 1em;
                width: 5em;
                height: 1.875em;
                border-radius: 12px;

                -webkit-box-shadow: -1px 17px 57px -14px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 17px 57px -14px rgba(0,0,0,0.75);
                box-shadow:1px 8px 16px -8px rgba(0, 0, 0, 0.75);
                }

            }
        }
        &__description{
            margin: 1em;
            font-size: 0.75em;
            color: #474747;
            text-align: center;
        }
    }

    &__product-options{
        margin: 1em 0;
        &__option{
            margin-top: 1em;
            display: flex;
            justify-content: space-between;
            align-content: center;
            &__p{
                font-size: 0.75em;
                color: #474747;
            }
        }
    }

    &__product-extras{
        margin: 1em 0;
        &__option{
            &__title{
                font-size: 0.75em;
                color: #474747;
                font-weight: bold;
            }
            &__content{
                display: flex;
                justify-content: space-between;
                align-content: center;
                &__p{
                    font-size: 0.75em;
                    color: #474747;
                }
            }
        }
    }

    .title-category-active{    
        font-weight: bold;
        color: #F58220;
    }

    .title-group-active{
        color: black;
        font-weight: bold;
    }

    .arrow-active{
        transform: rotate(180deg);
    }


    &__categories{
        margin: 1em 0;
        &__category{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.6em 0;
            border-bottom: 1px solid #e9e9e9;
            
            &__img{
                width: 12px;
                height: 10px;
            }
        }

        &__category-groups{
            margin-top: 1em;
            &__group{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1em 0;
                border-bottom: 1px solid #e9e9e9;
                    &__container{
                        align-items: center;
                        display: flex;
                        gap: 0.4em;
                        &__img{
                        width: 12px;
                        height: 10px;
                    }
                }
                &__radio{
                            appearance: none;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            width: 18px;
                            height: 18px;
                            border: 1px solid gray;
                            border-radius: 50%;
                            &[type=radio]:checked{
                                background:#F58220;
                                border-color: #FFFFFF;
                            }
                        }
            }
        }

        &__group-products{
            margin-top: 0.2em;
            &__product{
                &__container{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1em 0;                
                    &__radio{
                            appearance: none;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            width: 18px;
                            height: 18px;
                            border: 1px solid gray;
                            border-radius: 50%;
                            &[type=radio]:checked{
                                background:#F58220;
                                border-color: #FFFFFF;
                            }
                        }
                }
                &__opciones-personalizacion{
                    margin-bottom: 0.8em;
                    &__title{
                        display: flex;
                        align-items: center;
                        &__p{
                            color: #F58220;
                        }
                        &__span{
                            margin-left: 0.5em;
                            color: white;
                            background-color: #F58220;
                            font-size: 0.6em;
                           padding: 0.2em 2em;
                            border-radius: 30px;
                        }
                    }
                    &__opcion{
                            display: flex;
                            justify-content: space-between;
                        &__text{
                            display: flex;
                            font-size: 0.75em;
                            &__b{
                                color: #979797;
                                margin-left: 0.5em;
                            }
                            &__q{
                                margin-left: 0.4em;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }

}

.radio{
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 18px;
      height: 18px;
      border: 1px solid gray;
      border-radius: 50%;
      &[type=radio]:checked{
        background:#F58220;
        border-color: #FFFFFF;
      }
    }

    .checkbox{
      width: 18px;
      height: 18px;
      &[type=checkbox]:checked{
        background-color:white;
        border-color: #25A441;
      }
    }

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

/* Add Animation */
@-webkit-keyframes slideIn {
  from {bottom: -300px; opacity: 0} 
  to {bottom: 0; opacity: 1}
}

@keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@-webkit-keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}

@keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}

.block{
    display: block;
}


</style>