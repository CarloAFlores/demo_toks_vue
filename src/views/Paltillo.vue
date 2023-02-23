<template>
  <div class="seleccion">
    <div class="header">
        <img src="@/assets/desayunos.png" class="header__img">
        <button class="header__btn"><img src="@/assets/atras.svg" alt=""></button>
        <div class="header__div">
            <p>Huevos y Omelettes</p>
        </div>
    </div>

    <div class="btn">
        <button class="btn--click">Promociones</button>
        <button class="btn--click2">Recomendado para ti</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.seleccion{
    background-color: white;
    width: 100%;
    // margin-top: 5em;
    height: 100%;
    .header{
        &__btn{
        position: absolute;
        width: 8%;
        top: 10%;
        left: 5%;
        }
        &__div{
            position: absolute;
            font-size: 1.8em;
            font-weight: bold;
            color: white;
            top: 11%;
            left: 16%;
        }
    }
    
    .btn{
        background:rebeccapurple;
        margin-top: 10%;
        position: relative;
        width: 90%;
        top: 25%;
        left: 5%;
    }

}
.btn{
    position: relative;
    width: 90%;
    top: 5%;
    left: 5%;
    margin-top: 12%;
    display: flex;
    justify-content:initial;
    &--click{
        background: goldenrod;
        font-size: 1em;
        width: 34%;
        font-family: var(--tipo-secundaria);
    }
    &--click2{
        background: goldenrod;
        font-size: 1em;
        width: 48%;
        font-family: var(--tipo-secundaria);
    }
}
</style>