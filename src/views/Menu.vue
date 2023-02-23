<template>
  <Header/>  
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
        <h2 class="menu__h2">Comida</h2>
        <p class="menu__p">Servicios de 12 a 18 horas</p>

        <div class="menu__eleccion">
            <button class="menu__eleccion--click">Desayunos</button>
            <button class="menu__eleccion--click">Comidas</button>
            <button class="menu__eleccion--click">Cenas</button>
        </div>

        <div class="comida">
            <div class="items"  @click="$router.push('platillo')">
                <img src="@/assets/arroz.png" class="items__img">
                <div class="items__div">
                    <h2> Comida del dia</h2>
                    <p class="items__div__p">Platillo especial del Chef</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_1.jpg" class="items__img">
                <div class="items__div">
                    <h2>Sabores de temporada</h2>
                    <p class="items__div__p">Conoce los sabores que tenemos para ti</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_2.jpg" class="items__img">
                <div class="items__div">
                    <h2>Entradas y Tacos</h2>
                    <p class="items__div__p">Comparte el plap y el momento</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_3.jpg" class="items__img">
                <div class="items__div">
                    <h2>Sopas y Caldos</h2>
                    <p class="items__div__p">Con nuestro sazon</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_4.jpg" class="items__img">
                <div class="items__div">
                    <h2>Ensaladas</h2>
                    <p class="items__div__p">El perfecto balance de ingredientes</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_5.jpg" class="items__img">
                <div class="items__div">
                    <h2>Hamburguesa y Sandwiches</h2>
                    <p class="items__div__p">Autenticas combinaciones en nuestro pan casero</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_6.jpg" class="items__img">
                <div class="items__div">
                    <h2>Carnes al Grill</h2>
                    <p class="items__div__p">Cortes de alta calidad que se disfruta</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_7.jpg" class="items__img">
                <div class="items__div">
                    <h2>Aves</h2>
                    <p class="items__div__p">Para toda la ocasion frescura y sabor</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_8.jpg" class="items__img">
                <div class="items__div">
                    <h2>Pesca del dia</h2>
                    <p class="items__div__p">Lo mejor del mar para disfrutar en casa</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_9.jpg" class="items__img">
                <div class="items__div">
                    <h2>Enchiladas</h2>
                    <p class="items__div__p">Recetas creadas para traer devuelta al presente</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_10.jpg" class="items__img">
                <div class="items__div">
                    <h2>Postres</h2>
                    <p class="items__div__p">Consientete con un dulce antojo</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_11.jpg" class="items__img">
                <div class="items__div">
                    <h2>Cafes y bebidas calientes</h2>
                    <p class="items__div__p">100% mexicanos</p>
                </div>
            </div>

            <div class="items">
                <img src="@/assets/comida_12.jpg" class="items__img">
                <div class="items__div">
                    <h2>Toks a Mano</h2>
                    <p class="items__div__p">Disfruta de nuestos productos artesanales</p>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import Saludo from "@/components/Saludo.vue";
import Slider_recomendacion from "@/components/Slider_recomendacion.vue";
import Slider_sugerencia from "@/components/Slider_sugerencia.vue";
import Slider_promociones from "@/components/Slider_promociones.vue";
export default {
    components:{Header,Saludo,Slider_sugerencia,Slider_recomendacion,
    Slider_promociones}

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
            font-size: 1.2em;
            font-weight:900;
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
    margin-top: 12%;
    &__h2{
        font-size: 1.5em;
        font-weight: bold;
    }
    &__p{
        color: #666666;
        font-family: var(--tipo-secundaria);
    }
    &__eleccion{
        display: flex;
        justify-content: space-evenly;
        font-family: var(--tipo-secundaria);
        font-size: 1.3em;
        &--click{
            width: 33.3%;
            margin-top: 5%;
            color: #666666;
            
            &:focus{
                transition: all 0.2s ease-out;
                border-bottom: 5px solid orange;
                color: orange;
            }
        }
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
    gap: .9rem;
    margin-top: 8%;
    
    .items:nth-child(1){
        background: palevioletred;
        grid-column: span 4;
        color: white;
        .items__div{
            position: absolute;
            top: 40%;
            left: 20%;
            text-align: center;
            &__p{
                font-size: 90%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(2){
        background: palevioletred;
        grid-column: span 4;
        color: white;
        .items__div{
            position: absolute;
            top: 30%;
            left: 8%;
            text-align: center;
            &__p{
                font-size: 90%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(3){
        background: palevioletred;
        grid-column: span 3;
        color: white;
        .items__div{
            position: absolute;
            top: 24%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(4){
        color: white;
        .items__div{
            position: absolute;
            top: 30%;
            left: 8%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(5){
        color: white;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(6){
        color: white;
        background: palevioletred;
        grid-column: span 3;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(7){
        color: white;
        background: palevioletred;
        grid-column: span 3;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(8){
        color: white;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(9){
        color: white;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(10){
        color: white;
        background: palevioletred;
        grid-column: span 3;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(11){
        color: white;
        background: palevioletred;
        grid-column: span 3;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(12){
        color: white;
        .items__div{
            position: absolute;
            top: 20%;
            text-align: center;
            &__p{
                font-size: 70%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
    .items:nth-child(13){
        color: white;
        background: palevioletred;
        grid-column: span 4;
        .items__div{
            position: absolute;
            top: 40%;
            left: 10%;
            text-align: center;
            &__p{
                font-size: 80%;
                font-family: var(--tipo-secundaria);
            }
        }
    }
}

}
</style>