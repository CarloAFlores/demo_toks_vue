<template>
  <div v-for="plato in platillo.slice(1,2)" :key="plato">
    <div class="section" v-for="sub_plato in plato.productos.slice(1,2)" :key="sub_plato">
        <img :src="sub_plato.producto_img" class="section__img">
        <span class="section__precio">$ {{sub_plato.producto_precio}}</span>


        <div v-for="tiempo in sub_plato.tiempos" :key="tiempo">
            <div class="tiempos">
                <div class="tiempos__div">
                    <p>{{tiempo.seccion_tiempo_nombre}}</p>
                    <p class="tiempo__p">Obligatorio</p>
                </div>
            </div>

            <div class="frase">
                <div class="frase__div">
                    <p>Elige lo que mas te gusta</p>
                </div>    
             </div>
            
            <div class="guarnicion">
                <div class="guarnicion__div">
                    <div v-for="grupo in tiempo.grupos" :key="grupo">
                        <input type="radio" name="guarnicion" :id="grupo.producto_id" class="radio__color">
                        <label :for="grupo.producto_id" class="label_color"><img :src="grupo.producto_img" class="guarnicion_img"></label>
                    </div>
                </div>
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
    .titulos{
        background: red;
    }
    .tiempos{
        margin-top: 10%;
        display: flex;
        justify-content: center;
        font-size: 1.5em;
        &__div{
            width: 90%;
            display: flex;
            justify-content: space-between;
        }
        .tiempo__p{
            color: #F58220;
            font-size: .8em;
        }
    }
    .frase{
        display: flex;
        justify-content: center;
        &__div{
            width: 90%;
        }
    }
    .guarnicion{
        margin-top: 5%;
        display: flex;
        justify-content: center;
        font-family: var(--tipo-secundaria);
        &__div{
            display: flex;
            width: 90%;
        }
        .guarnicion_img{
            width: 80%;
            text-align: center;
        }
        .radio__color{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 50%;
        &[type=radio]:checked + label{
            border: 4px solid #F58220;
        }
        }
        .label_color{
            width: 40%;
            display: flex;
            justify-content: center;
        }
    }
}
</style>