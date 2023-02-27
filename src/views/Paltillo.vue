<template>
  <div class="seleccion">
    <div class="header">
        <img src="@/assets/desayunos.png" class="header__img">
        <button class="header__btn"  @click="$router.go(-1)"><img src="@/assets/atras.svg" alt=""></button>
        <div class="header__div">
            <p>Huevos y Omelettes</p>
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
        <div class="informacion__h2"><h2>Huevos y Omelettes</h2></div>
        <div class="informacion__div">
            <div class="horario">
                <p>Servidos de lunes a viernes de 7 a 12 horas y
                    sabados y domingos hasta las 13 horas
                </p>
            </div>
        </div>
        <div class="informacion__p"><p>Todos los huevos y omeletes incluyen <b>jugo</b> o <b>fruta</b>
        + <b>cafe americano</b> o <b>te caliente</b></p>
        </div>
    </div>

    <div class="card">
        <div class="card__div">
            <img src="@/assets/comida_1.jpg" class="card__div__img">
            <div class="informe">
                <div class="informe__div">
                    <p>Huevos al gusto</p>
                    <span class="informe__div__span">$ 199</span>
                </div>
                <div class="informe__descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card__div">
            <img src="@/assets/comida_1.jpg" class="card__div__img">
            <div class="informe">
                <div class="informe__div">
                    <p>Huevos al gusto</p>
                    <span class="informe__div__span">$ 199</span>
                </div>
                <div class="informe__descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card__div">
            <img src="@/assets/comida_1.jpg" class="card__div__img">
            <div class="informe">
                <div class="informe__div">
                    <p>Huevos al gusto</p>
                    <span class="informe__div__span">$ 199</span>
                </div>
                <div class="informe__descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita </p>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import Slider_recomendacion from "@/components/Slider_recomendacion.vue";
export default {
    components:{Slider_recomendacion}

}
</script>

<style lang="scss" scoped>
.seleccion{
    background-color: white;
    width: 100%;
    // margin-top: 5em;
    height: 100%;
    .header{
        position: relative;
        font-size: 1.5em;
        background-color: #666;
        color: wheat;
        &__btn{
        position: absolute;
        width: 6%;
        top: 50%;
        left: 10%;
        transform: translate(-10%, -50%);
        }
        &__div{
            width: 100%;
            position: absolute;
            font-size: 1.8rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            
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
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__h2{
            margin-top: 5%;
            width: 90%;
            font-size: 1.5rem;
            color: black;
        }
        &__div{
            margin-top: 8%;
            border-radius: 12px;
            border: 1px solid #F58220;
            background:  linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), rgba(255, 211, 145, 0.3);
            width: 90%;

            .horario{
                margin-left: .5rem;
                width: 84%;
            }
        }
        &__p{
            margin-top: 5%;
            width: 90%;
        }
    }
    .card{
        margin-top: 5%;
        display: flex;
        justify-content: center;


        &__div{
            width: 90%;
            display: flex;
                    box-shadow: 2px 0px 35px -12px rgba(0,0,0,1) inset;
            &__img{
                width: 30%;
            }
            .informe{
                width: 80%;
                &__div{
                    display: flex;
                    justify-content: space-between;
                    padding: .5rem;
                    &__span{
                        background: #F58220;
                        width: 30%;
                        text-align: center;
                        color: white;
                        border-radius: 10px;
                    }
                }
                &__descripcion{
                    padding: .8rem;
                }
            }
        }
    }
}
</style>