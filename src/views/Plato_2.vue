<template>
  <Header/>
  <Plato_eleccion_2/>
  <div class="comenzar">
    <button class="comenzar__btn">Comenzar mi orden</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Plato_eleccion_2 from "@/components/Plato_eleccion_2.vue";
export default {
components:{Header, Plato_eleccion_2}
}
</script>

<style lang="scss" scoped>
.comenzar{
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding-bottom: 1em;
    padding-top: 1em;
    border-top: #DDDDDD solid 0.5px;
    &__btn{
        background: black;
        color: white;
        width: 50%;
        height: 3em;
        border-radius: 12px;
        margin-top: 20%;
    }
}

</style>