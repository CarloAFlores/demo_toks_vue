<template>
<!-- TODO: agregar header -->
<Header />


  <div class="container">

    <div class="container__content">
        <div class="container__content__title">
            <p class="container__content__title__p">
                <b class="container__content__title__p__b"> Envía tu código</b>
            </p>
        </div>
        <div class="container__content__btn-info">
            <p class="container__content__btn-info__info">
                Envía el código a Andrés para que pueda hacer su pago en caja.
            </p>
        </div>
        <div class="container__content__qr">
            <img src="@/assets/qr-md.png" alt="codigo_qr">
        </div>
        <div class="container__content__footer">
            <p class="container__content__footer__p">
            ¿Por dónde compartimos el código QR?
            </p>
            <div class="container__content__footer__buttons">
            <button class="container__content__footer__buttons__button">
                Whatsapp
            </button>

            <button class="container__content__footer__buttons__button">
                SMS
            </button>

            </div>
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
    gap: 2em;
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title{
            width: 12.625em;
            text-align: center;
            &__p{
                &__b{
                    color: black;
                    font-weight: bold;
                    font-size: 1.1em;
                }
            }
        }
        &__btn-info{
            text-align: -webkit-center;
            &__info{
                margin-top: 1em;
                font-size: 1em;
                width: 20em;
                line-height: 1.3em;
                
                &__b{
                    text-decoration: underline;
                    color: #0f85f2;
                }
            }
        }
        &__qr{
            width: 25em;
        }
        &__footer{
            width: 100%;
            &__p{
                font-size: 1em;
                text-align: center;
            }
            &__buttons{
                margin-top: 0.7em;
                display: flex;
                justify-content: space-evenly;
                &__button{
                    width: 9.5em;
                    padding: 0.5em 0;
                    color: black;
                    border-radius: 10px;
                    border: 1px solid black;        
                }
            }
        }
    }
}
</style>