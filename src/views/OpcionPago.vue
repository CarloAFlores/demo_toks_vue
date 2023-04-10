<template>
<!-- TODO: agregar header -->
<Header />


  <div class="container">
    <div class="container__logo">
        <img src="@/assets/logo-toks-pago.svg" alt="logo_toks">
    </div>

    <div class="container__content">
        <div class="container__content__title">
            <p class="container__content__title__p">
                ¡Estás a <b class="container__content__title__p__b"> un click de pagar </b> y evitarte la fila!
            </p>
        </div>
        <div class="container__content__btn-info">
            <button class="container__content__btn-info__btn">
                <img src="@/assets/icon-pay-club.svg" alt="icon-payclub" class="container__content__btn-info__btn__icon">
                <p class="container__content__btn-info__btn__text">Pago por PayClub<b class="container__content__btn-info__btn__registered">®</b></p>
            </button>
            <p class="container__content__btn-info__info">
                <b class="container__content__btn-info__info__b">Conoce más sobre Payclub</b>, ¡paga tu cuenta, rápido y sin filas!
            </p>
        </div>
        <div class="container__content__footer">
            <p class="container__content__footer__p">
                O si prefieres <b class="container__content__footer__p__b">pagar en caja</b>, da clic en el siguiente botón.
            </p>
            <button class="container__content__footer__btn">
                Genera Código QR
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {

    components:{
        Header
    }

}
</script>

<style lang="scss" scoped>

.container{
    margin-top: 3em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5em;
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2em;

        &__title{
            width: 12.625em;
            text-align: center;
            &__p{
                &__b{
                    color: #F58220;
                    font-weight: bold;
                }
            }
        }
        &__btn-info{
            text-align: -webkit-center;
            &__btn{
                margin-bottom: 1.5em;
                background-color: black;
                color: white;
                font-weight: bold;
                display: flex;
                align-items: center;
                gap: 0.2em;
                width: 13.75em;
                height: 3.5em;
                border-radius: 10px;
                justify-content: center;
                font-size: 0.85rem;
                &__text{
                    display: flex;
                }
                &__icon{
                    width: 1em;
                }
                &__registered{
                    font-size: 8px;
                }
            }
            &__info{
                font-size: 0.7em;
                width: 20em;
                
                &__b{
                    text-decoration: underline;
                    color: #0f85f2;
                }
            }
        }
        &__footer{
            display: flex;
            flex-direction: column;
            width: 70%;
            text-align: center;
            align-items: center;
            &__p{
                margin-bottom: 1.5em;

                &__b{
                    font-weight:bold;
                }
            }
            &__btn{
                border: 1px solid black;
                border-radius: 10px;
                width: 80%;
                height: 3.5em;
            }
        }
    }
}
</style>