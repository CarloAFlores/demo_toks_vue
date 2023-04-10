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
                <b class="container__content__title__p__b"> Muestra tu código QR</b>
            </p>
        </div>
        <div class="container__content__btn-info">
            <p class="container__content__btn-info__info">
                Muestra el siguiente código QR en caja para hacer el pago de tu cuenta.
            </p>
        </div>
        <div class="container__content__qr">
            <img src="@/assets/qr-md.png" alt="codigo_qr">
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
                font-size: 0.7em;
                width: 20em;
                line-height: 1.3em;
                
                &__b{
                    text-decoration: underline;
                    color: #0f85f2;
                }
            }
        }
        &__qr{
            width: 20em;
        }
    }
}
</style>