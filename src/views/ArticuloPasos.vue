<template>
  <Header :currentPage="5" :titleArticle=product.producto_nombre />  

  <GDialog border-radius="10px" persistent v-model="modalValue">
  <div class="modal-cart">
      <div class="modal-cart__content">
        <p class="modal-cart__content__p">
          ¡Tu orden ha sido agregada al carrito!
        </p>
        <button @click="$router.push({path: '/resumen'})" class="modal-cart__content__boton-carro">
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
        </div>

        <div class="content">

            <div class="content__steps-section">
        

                <div v-for="(tiempo, index) in product.producto_pasos" :key="tiempo.paso_id" @click="backStep(tiempo)" class="content__steps-section__steps">
                    <div class="content__steps-section__step">
                        <span :class="{'active-step__span': tiempo.paso_orden === this.tiempo.paso_orden}" class="content__steps-section__step__span">{{index + 1}}</span>
                        <p :class="{'active-step__p': tiempo.paso_orden === this.tiempo.paso_orden}" class="content__steps-section__step__p">{{tiempo.paso_nombre_extracto}}</p>                
                    </div>
                    <div  v-if="index != product.producto_pasos.length - 1" class="hl"></div>
                </div>
            
            </div>

            <div v-for="seccion in tiempo.paso_secciones" :key="seccion.seccion_paso_id" class="content__steps-info">
                <div class="content__steps-info__title">
                    <div class="content__steps-info__title__header">
                        <h4 class="content__steps-info__title__header__h4">
                            {{seccion.seccion_paso_nombre}}
                        </h4>

                        <span class="content__steps-info__title__header__span">Obligatorio</span>
                    </div>

                    <p class="content__steps-info__title__p">{{seccion.seccion_paso_descripcion}}</p>
                </div>

                <div class="content__steps-info__options">
                
                    <div v-for="grupo in seccion.seccion_paso_grupos" :key="grupo.grupo_id" class="content__steps-info__options__card" @click="selectGroup(grupo)">
                        <img class="content__steps-info__options__card__img" v-if="grupo.grupo_tipo === 1" :src=grupo.grupo_img alt="img-grupo">
                        <img class="content__steps-info__options__card__img" v-if="grupo.grupo_tipo === 2" :src=grupo.producto_img alt="img-grupo">
                        <h5 class="content__steps-info__options__card__h5" v-if="grupo.grupo_tipo === 1">{{grupo.grupo_nombre}}</h5>
                        <h5 class="content__steps-info__options__card__h5" v-if="grupo.grupo_tipo === 2">{{grupo.producto_nombre}}</h5>
                        <p class="content__steps-info__options__card__p" v-if="grupo.grupo_tipo === 1">{{grupo.grupo_descripcion}}</p>
                        <p class="content__steps-info__options__card__p" v-if="grupo.grupo_tipo === 2">{{grupo.producto_descripcion}}</p>
                    </div>

                
                </div>

                <!--En caso de ser un grupo de productos  -->
                <div v-if="groupSelected && groupSelected.grupo_tipo === 1" class="content__steps-info__group-items">
                    <div class="content__steps-info__group-items__header">
                        <h5 class="content__steps-info__group-items__header__title">{{groupSelected.grupo_title}}</h5>

                        <span class="content__steps-info__group-items__header__span">Obligatorio</span>
                    </div>
                    <div v-if="groupSelected" class="content__steps-info__group-items__cards">
                        <div  @click="selectItem(item)" v-for="item in groupSelected.grupo_productos" :key="item.producto_id" class="content__steps-info__group-items__cards__card">

                            <img class="content__steps-info__group-items__cards__card__img" :src=item.producto_img alt="card_img">

                            <h5 class="content__steps-info__group-items__cards__card__h5">{{item.producto_nombre}}</h5>
                            
                        </div>
                    </div>
                </div>

                <div v-if="itemSelected" class="content__steps-info__customizable">
                    <div v-for="(opcion, index) in itemSelected.producto_opciones_personalizacion" :key="opcion.opcion_personalizacion_id" class="content__steps-info__customizable__custom-section">
                        <div class="content__steps-info__customizable__custom-section__header">
                            <h5 class="content__steps-info__customizable__custom-section__header__title">{{opcion.opcion_personalizacion_nombre}}</h5>

                            <span v-if="opcion.opcion_personalizacion_obligatorio" class="content__steps-info__customizable__custom-section__header__span">Obligatorio</span>
                        </div>

                        <section class="content__steps-info__customizable__custom-section__content__grid" v-if="opcion.opcion_personalizacion_vista === 1" >
                            <div v-for="item in opcion.opcion_personalizacion_items" :key="item.item_opcion_personalizacion_id" @click="arrayChanges(arrayOptions),addItemName(index,item.item_opcion_personalizacion_nombre),clickInCard(index, item.item_opcion_personalizacion_id)" class="content__steps-info__customizable__custom-section__content__grid__item" :class="{'card-active': item.item_opcion_personalizacion_id == this.arrayOptions[0].item_opcion_personalizacion_id}">
                                    <img :src=item.item_opcion_personalizacion_img alt="img-opcion-personalizacion" class="content__steps-info__customizable__custom-section__content__grid__item__img">
                                    <p class="content__steps-info__customizable__custom-section__content__grid__item__p">
                                        {{item.item_opcion_personalizacion_nombre}}
                                    </p>
                            </div>
                        </section>

                        <section v-if="opcion.opcion_personalizacion_vista === 2">
                            <div v-for="item in opcion.opcion_personalizacion_items" :key="item.item_opcion_personalizacion_id" class="content__steps-info__customizable__custom-section__content">
                                <div class="content__steps-info__customizable__custom-section__content__text">
                                    <p class="content__steps-info__customizable__custom-section__content__text__p">{{item.item_opcion_personalizacion_nombre}}</p>
                                    <q class="content__steps-info__customizable__custom-section__content__text__q">{{item.item_opcion_personalizacion_descripcion}}</q>
                                    <b v-if="item.item_precio > 0" class="content__steps-info__customizable__custom-section__content__text__b">| +${{item.item_opcion_personalizacion_precio}}</b>
                                </div>
                                <div class="content__steps-info__customizable__custom-section__content__input">
                                    <input class="content__steps-info__customizable__custom-section__content__input__radio" v-model="arrayOptions[index].item_opcion_personalizacion_id" @change="arrayChanges(arrayOptions),addItemName(index,item.item_opcion_personalizacion_nombre)" :value=item.item_opcion_personalizacion_id type="radio" name="" id="">
                                    <!-- v-model="itemOpciones[index].opcion_personalizacion_selected" -->
                                </div>
                            </div>
                        </section>


                    </div>

                </div>

                <!-- En caso de ser un producto -->

            </div>
                  
        
        </div>

        <div v-if="tiempo.tiempo_nombre_extracto != 'Postre'" class="footer">
                <button v-if="tiempo.orden < currentProductSteps[currentProductSteps.length -1].orden" @click="nextStep()" :disabled="!requiredOptionsSelected" :class="{active: requiredOptionsSelected}" class="footer__btn">Siguiente | ${{product.producto_precio}}</button>

                <button v-if="tiempo.orden == currentProductSteps[currentProductSteps.length -1].orden" @click="nextStep()" :disabled="!requiredOptionsSelected" :class="{active: requiredOptionsSelected}" class="footer__btn">Agregar al carrito | ${{product.producto_precio}}</button>
        </div>

        <div v-if="tiempo.tiempo_nombre_extracto == 'Postre'" class="footer-2">

                <button class="footer-2__btn-remember-later">Recordarme mas tarde</button>

                <button v-if="tiempo.orden == currentProductSteps[currentProductSteps.length -1].orden" @click="nextStep()" :disabled="!requiredOptionsSelected" :class="{active: requiredOptionsSelected}" class="footer-2__btn">Agregar al carrito | ${{product.producto_precio}}</button>

                <button v-if="tiempo.orden < currentProductSteps[currentProductSteps.length -1].orden" @click="nextStep()" :disabled="!requiredOptionsSelected" :class="{active: requiredOptionsSelected}" class="footer-2__btn">Siguiente | ${{product.producto_precio}}</button>
        </div>
    </div> 


  
</template>

<script>

import Header from '@/components/Header.vue'
import store from '@/store';
// MODAL
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'

export default {

    components:{
        Header,
        GDialog
    },

    data(){
        return{
            currentPage: 5,
            product:{},
            tiempo:{},
            groupSelected:{},
            itemSelected:null,
            itemOpciones:null,
            arrayOptions: [],
            requiredOptionsSelected: false,
            selectionData: [],
            partialOrder: [],
            showGrid: false,
            productStepsCount: 0,
            currentProductSteps: 0,
            modalValue: false,
            seleccion:[]

        }
    },
    created(){
        this.getProduct()
        this.getCurrentStep()

        // Recién carga el componente, hay que asignar el producto a la selección actual
        if (this.seleccion.length == 0) {
            this.agregarProductoInicial()
        }
    },
    methods:{
        agregarProductoInicial(){
            let productoSeleccionado = {
                "producto_seleccionado" :{},
                "opciones_selecciondas": []
            }

            productoSeleccionado.producto_seleccionado = this.product

            this.seleccion = productoSeleccionado

        },
        addItemName(index,name){
            // console.log({index,name});
            this.arrayOptions[index].item_nombre = name
        },
        countSteps(){
            this.productStepsCount = this.product.producto_pasos.length
            const sortSteps = new Promise ( (resolve) => {
                this.currentProductSteps = this.product.producto_pasos

                resolve()
            });

            sortSteps.then(() => {
                // console.log(this.currentProductSteps.length)
                this.currentProductSteps.sort((a, b) => a.orden - b.orden);
            }).then( ()=>{
                
            })
        },
        getProduct(){
            this.product = store.state.productData
            this.partialOrder = store.state.partialOrder

            this.countSteps()
        },
        getCurrentStep(){
            const stepData = new Promise((resolve, reject) => {
                this.tiempo = store.state.tiempoData
                resolve()
            })

        },
        changeNextStep(){
            const changeStep = new Promise( (resolve) =>{
                // TODO: error al pasar al siguiente paso

                // funcion para buscar el paso que sigue dentro de los pasos del producto
               const index = this.product.producto_pasos.findIndex(item => item.paso_id === this.tiempo.paso_id);
                console.log('currentStep',index);

                const nextElement = this.product.producto_pasos[index + 1]

                store.dispatch('setTiempo', nextElement);
                
                this.itemSelected = null
                this.itemOpciones = null
                this.arrayOptions= []
                this.requiredOptionsSelected = false;
                this.groupSelected = null



                resolve()
            })

            changeStep.then( () => {
                this.tiempo = store.state.tiempoData
            })


        },
        backStep(tiempo){
            const index = this.product.producto_pasos.findIndex(item => item.paso_id === this.tiempo.paso_id);

            console.log({"currentStep":this.tiempo,"selectedStep":tiempo});

            this.isBeforeStep(this.tiempo,tiempo)

            // const changeStep = new Promise( (resolve) =>{
            //     // TODO: error al pasar al siguiente paso

            //     // funcion para buscar el paso que sigue dentro de los pasos del producto
            //    const index = this.product.producto_pasos.findIndex(item => item.paso_id === this.tiempo.paso_id);

            //     const beforeElement = this.product.producto_pasos[index - 1]

            //     store.dispatch('setTiempo', beforeElement);
                
            //     this.itemSelected = null
            //     this.itemOpciones = null
            //     this.arrayOptions= []
            //     this.requiredOptionsSelected = false;
            //     this.groupSelected = null



            //     resolve()
            // })

            // changeStep.then( () => {
            //     this.tiempo = store.state.tiempoData
            // })


        },
        isBeforeStep(currentStep, selectedStep){
            console.log({"currenStepOrden":currentStep.paso_orden,"selectedStepOrden":selectedStep.paso_orden});
        },
        selectGroup(grupo){
            this.itemSelected = null
            this.itemOpciones = null
            this.arrayOptions= []
            this.requiredOptionsSelected = false;


            this.groupSelected = grupo
            this.groupSelected.grupo_tipo == 2 ? this.selectItem(this.groupSelected) : ''


        },
        selectItem(item){
            this.itemSelected = item
            this.itemOpciones = this.itemSelected.producto_opciones_personalizacion
           if(this.itemOpciones.length>0){
             this.arrayChanges(this.itemOpciones)

            this.generateOptionSelectModel(this.itemOpciones.length)
           }else{
            this.requiredOptionsSelected = true
           }

            
        },
        generateOptionSelectModel(itemOpcionesCount){
            this.arrayOptions= []
            for (let index = 0; index < itemOpcionesCount; index++) {
                let opcionesElegidas = 
                {
                    "opcion_id":this.itemOpciones[index].opcion_personalizacion_id,
                    "opcion_nombre":this.itemOpciones[index].opcion_personalizacion_nombre,
                    "required":this.itemOpciones[index].opcion_personalizacion_obligatorio,
                   "orden":index,
                   "item_id":0,
                   "item_nombre":''
                }

                this.arrayOptions.push(opcionesElegidas)
                
            }
        },
        isRequired(option){
            return option.required
        },
        isSelected(option){
            return option.item_opcion_personalizacion_id > 0
        },
        arrayChanges(value){
            console.log(value.length);
            console.log({value});
            let statusRequiredOptions = [];
            if(value.length > 0){
                value.forEach(option => {
                    if (this.isRequired(option)) {
                        this.isSelected(option) ? statusRequiredOptions.push(true) : statusRequiredOptions.push(false)
                    }
                });
                console.log(statusRequiredOptions);

                if (statusRequiredOptions.length > 0) {
                    statusRequiredOptions.every(this.isTrue) ? this.requiredOptionsSelected = true : this.requiredOptionsSelected = false;
                }else{
                    this.requiredOptionsSelected = false
                }
            }

        },
        isTrue(value){
            return value === true;
        },
        nextStep(){
            this.resumeStep()
        },
        resumeStep(){

            let partialOpciones = []
            let productoSeleccionado = null;
            let personalizacionSeleccionada = null;

            personalizacionSeleccionada = 
            [
                this.arrayOptions
            ]
            
            productoSeleccionado = 
            {
                "id_producto": this.itemSelected.producto_id,
                "nombre_producto": this.itemSelected.producto_nombre,
                "personalizacion": personalizacionSeleccionada

            }


            partialOpciones = productoSeleccionado

            store.dispatch('addOptionsProductOrder',partialOpciones).then( ()=>{
                const lastElement = this.currentProductSteps[this.currentProductSteps.length - 1];

                if (this.tiempo.paso_id != lastElement.paso_id) {
                    this.changeNextStep()
                }else{
                    this.addToCart()
                }
            }) 

            

            
        },
        addToCart(){
            store.dispatch('addProduct',{"producto":this.partialOrder[0].producto_principal,"opciones_seleccionadas":this.partialOrder[0].opciones_seleccionadas,"para_llevar":false}).then( ()=> {
                     this.modalValue = true

            })
        },
        clickInCard(index,value){
            // console.log({"index": index,"value":value});
            this.arrayOptions[index].item_opcion_personalizacion_id = value
        }
    },
    watch:{
        
        
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


.footer{
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: 0;
    position: sticky;
    padding-bottom: 1em;
    padding-top: 1em;
    background: white;
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

.footer-2{
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1em;
    border-top: #DDDDDD solid 0.5px;
    font-size: 0.875em;
    gap: 1em;
    &__btn{
      color: #FFFFFF;
      background-color: #AFAFAF;
      padding-top: 0.3em;      
      padding-bottom: 0.3em;
      border-radius: 0.3em;
      align-items: center;
      width: 100%;
      height: 2.5em;
    }
    &__btn-remember-later{
        color: black;
      background-color: white;
      padding-top: 0.3em;      
      padding-bottom: 0.3em;
      border-radius: 0.3em;
      align-items: center;
      width: 100%;
      height: 2.5em;
      border: 1px solid black;
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
                padding: 1em 1em 0;
                border: #dddddd 1px solid;
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

        &__group-items{
            padding-top: 1em;
            &__header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                    &__title{
                    font-size: 1.2em;
                    font-weight: 400;
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
            &__cards{
                width: 100%;
                display: grid;
                gap: .8rem;
                &__card{
                    text-align: center;
                    padding: 1em 1em 0;
                    border: #dddddd 1px solid;
                    border-radius: 10px;
                    background: white;
                    &__h5{
                        padding: 0.5em 0;
                        font-size: 0.8em;
                        font-weight: 200;
                        line-height: 1em;
                    }
                }
            }
            
        }


        &__customizable{
            &__custom-section{
            padding-top: 1em;
            &__header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                    &__title{
                    font-size: 1.2em;
                    font-weight: 400;
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
            &__content{
                padding-top: 0.5em;
                display: flex;
                justify-content: space-between;
                &__text{
                    display: flex;
                    &__p{
                        font-size: 0.8em;
                        padding-right: 0.3em;
                    }
                    &__q{
                        font-size: 0.8em;
                        color: #808080;
                        padding-right: 0.3em;

                    }
                    &__b{
                        font-size: 0.8em;
                        color: black;
                        font-weight: bold;
                    }
                }
                &__input{
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
                &__cards{
                    width: 100%;
                    display: grid;
                    gap: .8rem;
                    &__card{
                    text-align: center;
                    padding: 1em 1em 0;
                    border: #dddddd 1px solid;
                    border-radius: 10px;
                    background: white;
                        &__h5{
                            padding: 0.5em 0;
                            font-size: 0.8em;
                            font-weight: 200;
                            line-height: 1em;
                        }
                    }

                }
                &__grid{
                    margin-top: 0.5em;
                    width: 100%;
                    display: grid;
                    gap: .8rem;
                    &__item{
                        text-align: center;
                        padding: 1em;
                        border: #dddddd 1px solid;
                        border-radius: 10px;
                        background: white;
                        width: 6.25em;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        &__img{
                            width: 3.5em;
                            height: 3.5em;
                        }
                    }
                }
                
            }
        }
        }

        @media (min-width: 360px) {
            .content__steps-info__group-items{
                &__cards{ 
                    grid-template-columns: repeat(3, 1fr); 
                } 
            }
        }

        @media (max-width: 360px) {
            .content__steps-info__group-items{
                &__cards{ 
                    grid-template-columns: repeat(2, 1fr); 
                } 
            }
        }

        @media (min-width: 360px) {
            .content__steps-info__customizable__custom-section__content{
                &__cards{ 
                    grid-template-columns: repeat(3, 1fr); 
                } 
            }
        }

        @media (max-width: 360px) {
            .content__steps-info__customizable__custom-section__content{
                &__cards{ 
                    grid-template-columns: repeat(2, 1fr); 
                } 
            }
        }

         @media (min-width: 360px) {
            .content__steps-info__customizable__custom-section__content{
                &__grid{ 
                    grid-template-columns: repeat(3, 1fr); 
                } 
            }
        }

        @media (max-width: 360px) {
            .content__steps-info__customizable__custom-section__content{
                &__grid{ 
                    grid-template-columns: repeat(2, 1fr); 
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

.card-active{
    border: #F58220 1px solid;
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