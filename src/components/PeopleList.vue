<template>
  <div v-if="listaPersonasActivado" class="list">
    <div class="list__header">
        <h6>Personas</h6>
    </div>

    <div class="list__content">
        <div class="list__content__element active">
            <p class="list__content__element__p">Lucas</p>
            <p class="list__content__element__b"></p>
        </div>

        <div class="list__content__element">
            <p class="list__content__element__p">Sofía</p>
            <p class="list__content__element__b">Orden en carrito</p>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    props: [
        'listaPersonasActivado'
    ]

}
</script>

<style lang="scss" scoped>

.active{
    background-color: #F58220;
    font-weight: bold;
    font-size: 1.1em;
    color: white;
}

.list{
    transition: visibility 0s, opacity 0.5s linear;
    background: white;
    box-shadow: 15px 17px 42px -6px rgba(0,0,0,0.61);
    -webkit-box-shadow: 15px 17px 42px -6px rgba(0,0,0,0.61);
    -moz-box-shadow: 15px 17px 42px -6px rgba(0,0,0,0.61);
    width: 11em;
    position: fixed;
    z-index: 99;
    top: 2.4em; 
    right: 6em;
    
    &__header{
        background-color: #ddd;
        padding: 0.3em 1em;
        font-size: 0.8em;
        font-weight: bold;

    }
    &__content{
        font-size: 0.7em;
        &__element{
            padding: 1em;
            display: flex;
            &__p{
                margin-right: 0.4em;
            }
            &__b{
                color: #474747;
                font-size: 0.68em;

            }
        }
    }
    &__order{
        font-weight: bold;
        font-size: 0.6em;
        padding: 0 1em;
        &__opciones{
            margin-left: 0.8em;

        }

    }
    &__footer{
        display: flex;
        justify-content: center;
        &__button{
            width: 90%;
            background-color: #F58220;
            padding: 0.5em 2em;
            color: white;
            border-radius: 1em;
            margin: 1em;
            font-size: 0.625em;
            font-weight: bold;

        }

    }
}
</style>