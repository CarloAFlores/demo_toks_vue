<template>
  <Header :currentPage="7" titleArticle="Resumen de cuenta" />
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

        <div>
        <div :class="{'active-border': editFlagCategorySelected}"></div>
        <div :class="{'title-category-active': editFlagCategorySelected}" @click="selectCategory()" class="modal-body__categories__category">
            <p class="modal-body__categories__category__p">
                Bebidas refrescantes
            </p>

            <!--TODO: Versión para cuando está active  -->
            <img v-if="!editFlagCategorySelected" class="modal-body__categories__category__img" src="@/assets/arrow-down.svg" alt="down-arrow">

            <img v-if="editFlagCategorySelected" class="modal-body__categories__category__img" src="@/assets/arrow-down-orange.svg" :class="{'arrow-active': editFlagCategorySelected}" alt="down-arrow">

        </div>
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

<!-- Modal pago por persona -->
<div :class="{'block': pagoPorPersonaDialog}" class="modal">

  <!-- Modal content -->
  
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-header__close-title">
        <span @click="pagoPorPersonaDialog = false" class="close">&times;</span>
        <div class="modal-header__close-title__text">
            <h2>Pago por persona</h2>
            <p class="modal-header__close-title__text__p">Selecciona las cuentas que quieres pagar o envíalas a 
    través de un código QR a quiénes quieran pagarla en caja.</p>
        </div>
      </div>
      <!-- <button class="modal-header__btn" :class="{'save-btn-active': editOptionSelectedFlag}">
        Guardar
      </button> -->
    </div>
    <div class="modal-body-pago-pago">
            <div class="modal-body-pago__all">
                <div class="modal-body-pago__all__element">
                    <input class="modal-body-pago__all__element__input" type="checkbox" name="" id="">
                    <p class="modal-body-pago__all__element__p">Seleccionar todas las cuentas disponibles</p>
                </div>
            </div>
        <div class="modal-body-pago__elements">
            <div class="modal-body-pago__elements__element">
                <div class="modal-body-pago__elements__element__left">
                    <input class="modal-body-pago__elements__element__left__input" type="checkbox" name="" id="">
                    <p class="modal-body-pago__elements__element__left__p">Cuenta de Lucas</p>
                    <img class="modal-body-pago__elements__element__left__img" src="@/assets/icon-acomer.svg" alt="a-comer-icon">
                    <div v-if="false" class="modal-body-pago__elements__element__left__special">
                        <img class="modal-body-pago__elements__element__left__special__img" src="@/assets/watch.svg" alt="process-icon">
                        <p class="modal-body-pago__elements__element__left__special__p">En proceso de pago</p>
                    </div>
                </div>
                <div class="modal-body-pago__elements__element__right">
                    <img class="modal-body-pago__elements__element__right__img" src="@/assets/arrow-down.svg" alt="arrow-down-icon">
                </div>
            </div>

            <div class="modal-body-pago__elements__element">
                <div class="modal-body-pago__elements__element__left">
                    <input class="modal-body-pago__elements__element__left__input" type="checkbox" name="" id="">
                    <p class="modal-body-pago__elements__element__left__p">Cuenta de Andrés</p>
                    <img v-if="false" class="modal-body-pago__elements__element__left__img" src="@/assets/icon-acomer.svg" alt="a-comer-icon">
                    <div class="modal-body-pago__elements__element__left__special">
                        <img class="modal-body-pago__elements__element__left__special__img" src="@/assets/watch.svg" alt="process-icon">
                        <p class="modal-body-pago__elements__element__left__special__p">En proceso de pago</p>
                    </div>
                </div>
                <div class="modal-body-pago__elements__element__right">
                    <img class="modal-body-pago__elements__element__right__img" src="@/assets/arrow-down.svg" alt="arrow-down-icon">
                </div>
            </div>

            <div class="modal-body-pago__elements__element">
                <div class="modal-body-pago__elements__element__left">
                    <input class="modal-body-pago__elements__element__left__input" type="checkbox" name="" id="">
                    <p class="modal-body-pago__elements__element__left__p">Cuenta de Sofía</p>
                    <img class="modal-body-pago__elements__element__left__img" src="@/assets/icon-acomer.svg" alt="a-comer-icon">
                    <div v-if="false" class="modal-body-pago__elements__element__left__special">
                        <img class="modal-body-pago__elements__element__left__special__img" src="@/assets/watch.svg" alt="process-icon">
                        <p class="modal-body-pago__elements__element__left__special__p">En proceso de pago</p>
                    </div>
                </div>
                <div class="modal-body-pago__elements__element__right">
                    <img class="modal-body-pago__elements__element__right__img" src="@/assets/arrow-down.svg" alt="arrow-down-icon">
                </div>
            </div>

        </div>
    </div>
    <div class="modal-footer">
      <button class="modal-footer__button">
        Siguiente
      </button>
    </div>
  </div>

</div>

<!-- Modal aviso para borrar -->
<GDialog border-radius="10px" persistent v-model="popUpPedirMas">
  <span @click="popUpPedirMas = false" class="close-popup">&times;</span>
  <div class="modal-cart">
      <div class="modal-cart__content">
        <p class="modal-cart__content__p">
          Antes de irte, ¿no se te olvida pedir algo más?
        </p>

        <button @click="popUpPedirMas = false" class="modal-cart__content__boton-continuar separator-button">
            Ver menú
        </button>

        <button @click="popUpPedirMas = false"  class="modal-cart__content__boton-carro">
            Ir a pagar
        </button>

      </div>

      
    </div>
</GDialog>

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
          ¿Cómo quieres tu pedido?
        </p>
        <button class="modal-cart__content__boton-carro separator-button">
            Para llevar
        </button>

        <button class="modal-cart__content__boton-continuar">
            Para comer aquí
        </button>

      </div>

      
    </div>
</GDialog>

<!-- Modal -->

  <div class="container">
    <div class="container__content">
    
        <div class="container__content__general-info">
            <h2 class="container__content__general-info__h2">
                Tu cuenta
            </h2>

            <p class="container__content__general-info__p">
            Revisa la orden de cada persona. Puedes pagar el total o dividir cuentas y pagar por persona.
            </p>

            <div class="container__content__general-info__detail">

                <div class="container__content__general-info__detail__header">
                <Carousel :items-to-show="3.5" >
                    <Slide slide="1">
                    <div @click="totalSelected = true; customerTabSelected = false" class="container__content__general-info__detail__header__title" :class="{'active': totalSelected}">
                        <p class="container__content__general-info__detail__header__title__p ">
                        Total
                        </p>
                        <img v-show="false" class="container__content__general-info__detail__header__title__img" src="@/assets/icon-acomer.svg" alt="icon-a-comer-club">
                    </div>
                    </Slide>
                    <Slide slide="2">
                    <div @click="totalSelected = false; customerTabSelected = true" class="container__content__general-info__detail__header__title" :class="{'active': customerTabSelected}">
                        <p class="container__content__general-info__detail__header__title__p">
                        Lucas
                        </p>
                        <img class="container__content__general-info__detail__header__title__img" src="@/assets/icon-acomer.svg" alt="icon-a-comer-club">
                    </div>
                    </Slide>
                    <Slide slide="3">
                    <div @click="totalSelected = false; customerTabSelected = true" class="container__content__general-info__detail__header__title" :class="{'active': customerTabSelected}">
                        <p class="container__content__general-info__detail__header__title__p">
                        Andrés
                        </p>
                        <img v-show="false" class="container__content__general-info__detail__header__title__img" src="@/assets/icon-acomer.svg" alt="icon-a-comer-club">
                    </div>
                    </Slide>
                    <Slide slide="4">
                    <div @click="totalSelected = false; customerTabSelected = true" class="container__content__general-info__detail__header__title" :class="{'active': customerTabSelected}">
                        <p class="container__content__general-info__detail__header__title__p">
                        Juan
                        </p>
                        <img v-show="false" class="container__content__general-info__detail__header__title__img" src="@/assets/icon-acomer.svg" alt="icon-a-comer-club">
                    </div>
                    </Slide>

                    <template>
                    <Navigation />
                    </template>
                </Carousel>
                </div>

                <div v-if="totalSelected" class="container__content__general-info__detail__content">

                    <div v-if="totalSelected" class="container__content__general-info__detail__content__clients">
                        <div class="container__content__general-info__detail__content__clients__client">
                            <p class="container__content__general-info__detail__content__clients__client__p">
                            Lucas
                            </p>
                            <span class="container__content__general-info__detail__content__clients__client__span">
                            $320
                            </span>
                        </div>

                        <div class="container__content__general-info__detail__content__clients__client">
                            <p class="container__content__general-info__detail__content__clients__client__p">
                            Andrés
                            </p>
                            <span class="container__content__general-info__detail__content__clients__client__span">
                            $180
                            </span>
                        </div>

                        <div class="container__content__general-info__detail__content__clients__client">
                            <p class="container__content__general-info__detail__content__clients__client__p">
                            Juan
                            </p>
                            <span class="container__content__general-info__detail__content__clients__client__span">
                            $340
                            </span>
                        </div>
                    </div>

                    
                </div>

                <div v-if="totalSelected" class="container__content__general-info__detail__total">
                    <div class="container__content__general-info__detail__total__text">
                        <p class="container__content__general-info__detail__total__text__p">Total a pagar
                        
                            <b>
                                <button v-tooltip="{
                                    content: 'Todos nuestros precios incluyen IVA y se expresan en M.N.',
                                    theme: 'tooltip-menu'
                                    }"><img src="@/assets/info-icon-orange.svg" alt="" class="icon-tooltip">
                                </button>
                            </b>
                        </p>
                    </div>
                    <div class="container__content__general-info__detail__total__price">
                        $1000
                    </div>
                </div>

            
            </div>

            <div v-if="customerTabSelected" class="container__content__general-info__detail">
                        <div> 
                            <div class="container__content__general-info__detail__main-title">
                            <div class="container__content__general-info__detail__main-title__text">
                            <span class="icon-llevar-container"><img src="@/assets/para-llevar-icon.svg" alt=""></span>
                                <p class="container__content__general-info__detail__main-title__text__p custom-totakeaway">Paquete enchiladas zacatecanas</p>
                            </div>
                            <div class="container__content__general-info__detail__main-title__price">
                                $ 149
                            </div>
                        </div>
                        
                        <!-- TODO: Determinar si se trata de un producto con mas de una opcion seleccionada -->

                        <div>
                            <div>
                                <div class="container__content__general-info__detail__options">
                                    <div class="container__content__general-info__detail__options__text">
                                    <p class="container__content__general-info__detail__options__text__p">Coca Cola</p>
                                    </div>
                                    <div class="container__content__general-info__detail__options__price">
                                        $0
                                    </div>
                                </div>
                                <p class="container__content__general-info__detail__item">- Grande</p>
                            </div>
                            
                        </div>



                        </div>

                        <div class="container__content__general-info__detail__total">
                    <div class="container__content__general-info__detail__total__text">
                        <p class="container__content__general-info__detail__total__text__p">Total a pagar
                        
                            <b>
                                <button v-tooltip="{
                                    content: 'Todos nuestros precios incluyen IVA y se expresan en M.N.',
                                    theme: 'tooltip-menu'
                                    }"><img src="@/assets/info-icon-orange.svg" alt="" class="icon-tooltip">
                                </button>
                            </b>
                        </p>
                    </div>
                    <div class="container__content__general-info__detail__total__price">
                        $1000
                    </div>
                </div>
            </div>

            


        </div>

        <div class="container__content__buttons">
            <button @click="addOrderDialog = true" class="container__content__button">
                Agregar algo más
            </button>
        </div>

        <!-- <div class="divisor"></div> -->

    
    </div>

    <div class="container__recomendation">
        <h4 class="container__recomendation__h4">
            ¿Se te antoja algo mas?
        </h4>
        <div class="container__recomendation__cards">
             <carousel class="container__recomendation__cards__carousel" :items-to-show="2.5" >
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
        <button @click="pagoPorPersonaDialog = true" class="container__footer__button">
            Pago por persona
        </button>

        <button class="container__footer__button">
            Pago total
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
import 'floating-vue/dist/style.css'
import { mapState } from 'vuex'



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
            editDialog: false,
            validDeleteDialog: false,
            addGuestDialog: false,
            addOrderDialog: false,
            selectedRecomendation : {},
            recomendationOptionSelected: null,
            tooltipInfoActive: false,
            currentPage: 7,
            totalSelected: true,
            customerTabSelected: false,
            pagoPorPersonaDialog: false,
            popUpPedirMas: false,

            // Data

            ordenData: [],
            productsSort: [],
            totalBill: 0,

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
        totalCalculate(){
            let prices = []
            const sum = (arr) => arr.reduce((a, b) => a + b, 0);

            this.productsSort.forEach(element => {
                prices.push(element.producto.producto_precio);
                if (element.opciones_seleccionadas.producto_precio > 0) {
                    prices.push(element.opciones_seleccionadas.producto_precio);
                }
            });

            this.totalBill = sum(prices);


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

                this.productsSort = products;

                

            }).then( () =>{
                this.totalCalculate()
            }) 
        },
        findOrder(){
            let ordenes = this.cart[0].ordenes;

            let result = ordenes.filter(obj => {
                return obj.comensal_id === this.Comensal_ID;
            });

            return result;
        },
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
    beforeMount(){
        this.getOrderData()
        
    },
    mounted(){
        this.recomendaciones = recomendations
    },
    computed:{
        ...mapState(
            [
                'cart',
                'Comensal_ID',
                'Unidad_ID'
            ]
        )
    }


}
</script>

<style lang="scss" scoped>

.active{
    border-bottom: #F58220 1px solid;
    color: #f58220;
}

.divisor{
    border-top: #979797 1px solid;

}


.container{
    &__content{
            padding: 2em 1.5em;
        &__general-info{
            &__h2{
                font-weight: bolder;
                font-size: 1em;

            }
            &__p{
                font-size: 0.8em;
                margin-bottom: 1.5em;
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
                    margin-bottom: 2em;
                    display: flex;
                    justify-content: space-between;
                    &__text{
                    display: flex;
                    align-items: center;
                    &__p{
                        display: flex;
                        gap: 0.5em;
                        align-items: center;
                        font-weight: bold;
                        color: #F58220;

                    }
                    }
                    &__price{
                        font-weight: bold;
                        color: #f58220;
                    }
                }
                &__item{
                    margin-left: 5px;
                    font-size: 0.7em;
                    font-style: italic;
                    color: #595959;
                }
                &__header{
                    margin-bottom: 0.4em;
                    border-bottom: #E1E1E1 1px solid;
                    width: 100%;
                    &__title{
                        display: flex;
                        font-size: 0.8em;
                        font-weight: bold;
                        align-items: center;
                        width: 6em;
                        justify-content: center;
                        padding: 0.5em 0;
                        
                        &__img{
                            width: 15px;
                            height: 14px;
                        }
                    }
                    } 
                &__content{
                    margin-top: 0.8em;
                    &__clients{
                        &__client{
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 0.8em;
                        &__p{
                            font-weight: bold;
                        }
                    }
                    }
                }
            }
        }

        &__button{
            margin-top: 0.6em;
            border: 1px solid black;
            padding: 0.5em 0;
            width: 19.875em;
            border-radius: 6px;
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
        background-color: white;
        border-top: 1px solid #E1dede;
        display: flex;
        position: sticky;
        bottom: 0;
        justify-content: center;
        &__button{
            color: black;
            background-color: white;
            border-radius: 10px;
            border: 1px solid black;
            width: 60%;
            height: 2.75em;
            margin: 1em 0.5em;
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

.active-border{
    border-top: 1px solid #f58220;
    transform: scale(1.5);
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

.close-popup {
    color: #000;
  float: left;
  font-size: 20px;
  font-weight: normal;
  margin-left: 1em;
  margin-top: 0.7em;
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
    &__text{
        &__p{
            font-size: 0.65em;
            line-height: 1.125em;
            color: #333333;
        }
    }
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
.modal-body-pago{
    &__all{
        margin-top: -0.5em; 

        border-top: 1px solid #dddddd;
        &__element{
        margin: 0 1.125em;
        padding: 0.8em 0;


            display: flex;
            &__p{
                margin-left: 0.5em;
                font-size: 0.8em;

            }
        }
    }
    &__elements{
        
        &__element{
        border-top: 1px solid #dddddd;

        padding: 1em 0;


            display: flex;
            align-items: center;

            justify-content: space-between;

            &__left{
                margin: 0 1.125em;

                display: flex;
                align-items: center;
                font-size: 1em;
                &__p{
                    margin-left: 0.5em;
                }
                &__img{
                    margin-left: 0.5em;
                    width: 20px;
                }
                &__special{
                    margin-left: 0.5em;

                    display: flex;
                    align-items: center;
                    font-size: 0.5em;
                    &__img{
                    margin-right: 0.5em;

                        width: 12px;
                    }
                    &__p{
                        color: #f58220;
                    }
                }
            }

            &__right{
        margin: 0 1.125em;

            }
        }

    }
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
  border-top: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  padding: 0.8em 1.2em;
  &__button{
    font-size: 0.85em;
    width: 100%;
    padding: 0.6em 0;
    border-radius: 6px;
    color: white;
    background-color: #979797;

  }
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

.icon-llevar-container{
    background-color: #F58220;
    position: absolute;
    display: flex;
    padding: 0.2em 0.5em;
    border-radius: 0.7em;

}

.custom-totakeaway{
    margin-left: 3em;
}



</style>