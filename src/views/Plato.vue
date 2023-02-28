<template>
  <Header/>
  <div class="seleccion">
    <div v-for="platillo in plato" :key="platillo.id">
        <div v-for="subcategoria in platillo.subcategorias.slice(1,2)" :key="subcategoria.id">
            <div v-for="producto in subcategoria.productos.slice(1,2)" :key="producto.id">
                <div class="producto">
                    <img :src="producto.producto_img" class="producto__img">
                    <span class="producto__precio">$ {{producto.producto_precio}}</span>
                </div>

                <div class="informacion">
                    <div class="informacion__titulo">
                        <h2>{{producto.producto_nombre}}</h2>
                    </div>

                    <div class="informacion__descripcion">
                        <p>{{producto.producto_descripción}}</p>
                    </div>

                    <div class="informacion__aclaracion">
                        <p>{{producto.producto_info_aclaracion}}</p>
                    </div>

                    <div v-for="tiempo in producto.tiempos" :key="tiempo" class="eleccion">
                        <div class="eleccion__guarnicion">
                            <p class="eleccion__guarnicion__titulo">{{tiempo.seccion_tiempo_nombre}}</p>
                            <p class="eleccion__guarnicion__advertencia">Obligatorio</p>
                        </div>

                        <div class="informacion__descripcion">
                            <p>{{tiempo.seccion_tiempo_descripcion}}: </p>
                        </div>

                        <div v-for="grupo in tiempo.grupos" :key="grupo" class="eleccion__div">
                            <input type="checkbox" name="" id="sugerencia_1">
                            <label for="sugerencia_1"><img :src="grupo.producto_img" class="eleccion__div__img"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
export default {
    components:{Header},
    setup(){
        const store = useStore()

        const plato = computed(()=>{
            return store.state.Platillos
        })

        onMounted(()=>{
            store.dispatch('setPaltillo')
        })
        return{
            plato
        }
    }

}
</script>

<style lang="scss" scoped>
.seleccion{
    background-color: white;
    width: 100%;
    // margin-top: 5em;
    height: 100%;
    .producto{
        &__img{
        height: 14rem;
        }
        &__precio{
            position: absolute;
            color: white;
            background: #F58220;
            width: 18%;
            height: 2em;
            text-align: center;
            line-height: 30px;
            border-radius: 10px;
            top: 25%;
            left: 90%;
            transform: translate(-90%, -25%);
        }
    }
    .informacion{
        margin-top: 8%;
        width: 100%;
        display: flex;
        font-size: 1.1rem;
        font-weight: 500;
        background: goldenrod;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__titulo{
            background: red;
            width: 90%;
            font-size: 1.1em;
            font-weight: bolder;
        }
        &__descripcion{
            margin-top: 5%;
            background: #F58220;
            width: 90%;
            font-size: .9em;
            font-family: var(--tipo-secundaria);
        }
        &__aclaracion{
            margin-top: 2%;
            background: #F58220;
            color: #666666;
            width: 90%;
            font-size: .7em;
            font-family: var(--tipo-secundaria);
        }
    }
    .eleccion{
        margin-top: 4%;
        background: greenyellow;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__guarnicion{
            background: blueviolet;
            width: 90%;
            display: flex;
            justify-content: space-between;
            &__titulo{
                font-size: 1.1em;
                font-weight: bolder;
            }
            &__advertencia{
                font-size: .8em;
                color: #F58220;
            }
        }
        &__div{
            background: hotpink;
            width: 90%;
            display: flex;
            &__img{
                width: 10%;
            }
        }
    }
}
</style>