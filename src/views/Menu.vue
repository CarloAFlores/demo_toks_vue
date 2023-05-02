<template>
  <Header @cartActive="cartActive" :currentPage="2"/>  
  <Saludo/>
  <div class="seleccion">

    <div class="search">
        <div class="search__div input-wrapper">
            <input type="text" class="search__div__input" placeholder="Busca platillos, bebidas, promociones...">
            <img class="search__div__img" src="../assets/lupa.svg" alt="">
        </div>
    </div>

    <div class="sugerencias">
        <div class="sugerencias__informacion">
            <p class="sugerencias__informacion__h2"><b> Sugerencias para ti </b></p>
            <p class="sugerencias__informacion__p">Creamos sugerencias para ti basado
                en tus ultimos pedidos para ayudarte a elegir
            </p>
            <Slider_sugerencia class="sugerencias__informacion__slider"/>
        </div>
        
        <div class="sugerencias__informacion recomendaciones_chef">
            <p class="sugerencias__informacion__h2">Recomendaciones del Chef</p>
            <p class="sugerencias__informacion__p">Las mejores delicias</p>
            <Slider_recomendacion class="sugerencias__informacion__slider"/>
        </div>

        <div class="sugerencias__informacion recomendaciones_chef">
            <p class="sugerencias__informacion__h2">Promociones</p>
            <p class="sugerencias__informacion__p">Es momento de consentirse</p>
            <Slider_promociones class="sugerencias__informacion__slider"/>
        </div>


    </div>

    <div class="menu">
        <h2 class="menu__h2">{{currentCategory.categoria_nombre}}</h2>
        <p class="menu__p">{{currentCategory.categoria_descripcion}}</p>

        <div class="menu__eleccion">
            <button v-for="category in menuData" :key="category.categoria_id" @click="setCategory(category)" :class="{active: categorieSelected === category.categoria_id}" class="menu__eleccion--click">{{category.categoria_nombre}}</button>

        </div>
            <p v-if="activeCategory != currentCategory.categoria_id" class="not_active_category">*Está opción no se encuentra disponible en este momento</p>

        <div v-if="currentCategory" class="comida">

            <div v-for="subcategory in currentCategory.categoria_subcategorias" :key="subcategory.subcategoria_id" class="items" :class="{principal: subcategory.subcategoria_jerarquia === 1, secundaria_l: subcategory.subcategoria_jerarquia === 2, secundaria_c: subcategory.subcategoria_jerarquia === 3}"  @click="selectSubcategory(currentCategory.categoria_id,subcategory)">
                <div class="items__div">
                    <h2 class="items__div__h2"> {{subcategory.subcategoria_nombre}}</h2>
                    <p class="items__div__p">{{subcategory.subcategoria_descripcion}}</p>
                </div>
                <img :src='subcategory.subcategoria_img' class="items__img">
            </div>
            
        </div>
    </div>
  </div>
   <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Saludo from "@/components/Saludo.vue";
import Footer from "@/components/Footer.vue";
import CartOrders from '@/components/CartOrders.vue';

import Slider_recomendacion from "@/components/Slider_recomendacion.vue";
import Slider_sugerencia from "@/components/Slider_sugerencia.vue";
import Slider_promociones from "@/components/Slider_promociones.vue";
import axios from 'axios';
import store from '@/store';
import { mapState } from 'vuex';
import router from '@/router';

export default {
    components:{
        Header,
        Saludo,
        Slider_sugerencia,
        Slider_recomendacion,
        Slider_promociones,
        Footer,
        CartOrders,
    },
    data(){
        return{
            // No. de pantalla actual
            currentPage: 2,
            // Data general del menú
            menuData: [],
            // Id de categoria Seleccionada por defecto (Basada en el daypart)
            categorieSelected : 0,
            // Obj de categoria actual (Depende la hora )
            currentCategory: [],
            activeCategory: 0,
            
            // Información de la fecha y hora
            today: new Date("2022-11-22 08:59:00"),
            currentTime : null,

            subcategories:null,
            secondarySubcategories: null,
            vuexCart: null



        }
    },
    beforeMount(){
        // llamada para obtener la data
        this.getMenuData();
        // llamada para obtener la hora y fecha
        this.getHour();

        this.startCart();
    },
    methods:{
        startCart(){
            if(this.cart.length > 0){
                console.log('existe el carrito');
            }else{
                console.log('carrito vacio',this.cart.length);
                store.dispatch('setCart')

            }
        },
        getHour(){
            this.currentTime = this.today.toTimeString()
        },
        setCategory(categoria){
            const category = this.menuData.filter(obj =>{
                return obj.categoria_id === categoria.categoria_id;
            })

            this.currentCategory = category[0];
            this.subcategories = this.currentCategory.categoria_subcategorias;
            this.categorieSelected = this.currentCategory.categoria_id
            store.dispatch('setCurrentCategory',category[0])


        },
    
        async getMenuData(){
            // await axios.get('http://189.161.36.232:8000/api/menus/'+ this.$route.params.id).then(
            await axios.get(this.base_url_services+'/api/menus/'+ this.$route.params.id).then(
                response => this.menuData = response.data.menu.categorias
            ).then(
                response => {
                    const category = response.filter(obj => {
                    return this.currentTime > obj.categoria_horario_inicio && this.currentTime < obj.categoria_horario_fin;
                })

                     this.setCategory(category[0])
                     this.activeCategory = category[0].categoria_id
                     store.dispatch('setMenuData',response)
                     store.dispatch('setDayPartCategory',category[0].categoria_id)
                }
            )
        },
        selectSubcategory(categoria_id,subcategoria){
            // console.log({categoria_id,subcategoria});
            store.dispatch('setCurrentSubcategory',subcategoria)
            // TODO: Pasar a la siguiente pantalla con la data de la subcategoria seleccionada

            router.push({path:'/subcategoria/'+categoria_id+'/'+subcategoria.subcategoria_id})

        }
    },
    computed:{
        ...mapState(
            [
                'cart'
            ]
        )
    }

}
</script>

<style lang="scss" scoped>
.seleccion{
    background-color: white;
    width: 100%;
    // margin-top: 5em;
    height: 100%;
    .search{
    width: 100%;
    height: 6em;
    &__div{
        position: relative;
        width: 90%;
        top: 30%;
        left: 5%;
        &__input{
            box-sizing: border-box;
            color: #191919;
            padding: 10px 20px 10px 40px;
            background-color: #E5E5E5;
            width: 100%;
            border-radius: 10px;
        }
        &__img{
            color: #191919;
            position: absolute;
            width: 20px;
            height: 20px;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
  }
  .sugerencias{
    margin-top: 0;
    width: 100%;
    &__informacion{
        margin-top: 1%;
        position: relative;
        width: 90%;
        top: 25%;
        left: 5%;
        &__h2{
            font-family: var(--tipo-principal);
            font-size: 1.5em;
            font-weight: 800;
        }
        &__p{
            margin-top: 2%;
            font-family: var(--tipo-secundaria);
            font-weight: 100;
            color: #474747;
            font-size: 0.85em;
        }
        &__slider{
            margin-top: 3%;
        }
    }
  }
  .recomendaciones_chef{
            margin-top: 10%;
        }
  .menu{
    position: relative;
    width: 90%;
    top: 5%;
    left: 5%;
    margin-top: 10%;
    &__h2{
        font-size: 1.5em;
        font-weight: bold;
    }
    &__p{
        color: #666666;
        font-family: var(--tipo-secundaria);
        margin-top: 0.5em;
    }
    &__eleccion{
        display: flex;
        justify-content: space-evenly;
        font-family: var(--tipo-secundaria);
        font-size: 1em;
        border-bottom: solid 1px #dedede;
        
        &--click{
            width: 33.3%;
            margin-top: 5%;
            color: #666666;
            
            
        }
    }
    .not_active_category{
        font-size: 0.6em;
        color: #595959;
        font-weight: lighter;
    }
    .active{
                transition: all 0.4s ease-out;
                border-bottom: 3px solid orange;
                color: orange;
                padding-bottom: 0.3em;
            }
  }
  .items{
  position: relative;
  
  font-size: 1.25rem;
  background-color: #666;
  &__img{
    width: 100%;
    height: 7em;
  }
}
.items::before{
  background-color: rgba(0, 0, 0, 0.61);
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
}
.comida{
    display: grid;
    grid-template-columns: repeat(aut-fit,auto);
    gap: .8rem;
    margin-top: 4%;
    margin-bottom: 8%;
    
    
    .items{
        color: white;
        .items__div{
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            
            &__h2{
                font-size: 1em;
                font-weight: bolder;
            }
            &__p{
                font-size: 0.6em;
                font-family: var(--tipo-secundaria);
            }
        }
    }

    .principal{
        background: palevioletred;
        grid-column: span 4;
        color: white;
    }

    .secundaria_l{
        background: palevioletred;
        grid-column: span 2;
        color: white;
    }
    .secundaria_c{
        background: palevioletred;
        grid-column: span 2;
        color: white;
    }
}
}

</style>