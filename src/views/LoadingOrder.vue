<template>
  <div class="container">
    <div class="container__content">
        <div class="container__content__icon">
        <img src="@/assets/icon-loading.svg" alt="icon_loading">
    </div>

    <div v-show="charged" class="container__content__text">
        <p class="container__content__text__title">
        ¡Listo!
        </p>

        <p class="container__content__text__p">
            Tu mesero vendrá pronto a confirmar tu orden
        </p>
    </div>
    </div>

    <div v-show="charged" class="footer">
        <button class="footer__btn">
            Ver orden
        </button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            charged: true ,
        }
    }

}
</script>

<style lang="scss" scoped>

.container{
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__content{
        margin-top: -5em;
        gap: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &__icon{
        margin-left: 1.4em;
        width: 5em;
        height: 5em;
        }
        &__text{
            display: flex;
            flex-direction: column;

            text-align: center;
            width: 13.25em;
            gap: 1.5em;
            &__title{
                font-weight: bold;
            }
        }
    }
    .footer{
        bottom: 0;
        position: absolute;
        margin-bottom: 2.5em;
        &__btn{
            border: 1px solid white;
            border-radius: 10px;
            width: 19.753em;
            height: 2.75em;
        }
    }
}

</style>