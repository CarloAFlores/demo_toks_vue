<template>
  <div v-for="plato in platillo.slice(1,2)" :key="plato">
    <div class="section" v-for="sub_plato in plato.productos.slice(1,2)" :key="sub_plato">
        <img :src="sub_plato.producto_img" class="section__img">
        <span class="section__precio">$ {{sub_plato.producto_precio}}</span>

        <div class="titulo">
            <div class="titulo__div">
                <p>{{sub_plato.producto_nombre}}</p>
            </div>
        </div>

        <div class="descripcion">
            <div class="descripcion__div">
                <p>{{sub_plato.producto_descripción}}</p>
                <p class="descripcion__div__info">
                    <img src="@/assets/atras.svg" class="info_img">
                    {{sub_plato.producto_info_aclaracion}}</p>
            </div>
        </div>

        <div class="empezar">
            <div class="empezar__div">
                <p>!Completa tu orden en tan solo 1 paso!</p>
                <p class="empezar__div__p">
                    <img src="@/assets/atras.svg" class="num_img">!Elige la guarnicion y solicita tus pedidos</p>
            </div>
        </div>
    </div>    
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
export default {
setup(){
    const store = useStore()
    const platillo = computed(()=>{
        return store.state.Platillos
    })
    onMounted(()=>{
        store.dispatch('setPaltillo')
    })
    return{
        platillo
    }
}
}
</script>

<style lang="scss" scoped>
.section{
    &__img{
        height: 15em;
    }
    &__precio{
        background:#F58220;
        color: white;
        padding: .4rem;
        border-radius: 10px;
        position: absolute;
        top: 24%;
        left: 86%;
        transform: translate(-86%, -24%);
    }
    .titulo{
        margin-top: 2em;
        width: 100%;
        display: flex;
        justify-content: center;
        font-weight: bolder;
        font-size: 1.2em;
        &__div{
            width: 90%;
        }
    }
    .descripcion{
        width: 100%;
        display: flex;
        justify-content: center;
        &__div{
            margin-top: 1em;
            width: 90%;
            font-family: var(--tipo-secundaria);
            font-weight: 200;
            font-size: .9em;
            &__info{
                margin-top: .8em;
                color: #666666;
                font-size: .8em;
                display: flex;
                align-items: center;
                .info_img{
                    width: 5%;
                    height: 5%;
                }
            }
        }
    }
    .empezar{
        display: flex;
        justify-content: center;
        font-size: 1.2em;
        &__div{
            margin-top: 2.2em;
            width: 90%;
            &__p{
                font-family: var(--tipo-secundaria);
                font-size: .8em;
                display: flex;
                align-items: center;
                margin-top: .5em;
                .num_img{
                    width: 5%;
                    height: 5%;
                }
            }
        }
    }
}
</style>