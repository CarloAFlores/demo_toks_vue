<template>
  <Header/>  
  <Saludo/>
  <div class="seleccion">

    <div class="search">
        <div class="search__div input-wrapper">
            <input type="text" class="search__div__input" placeholder="Busca platillos, bebidas, promociones...">
            <img class="search__div__img" src="../assets/lupa.svg" alt="">
        </div>
    </div>

    <div>

    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import Saludo from "@/components/Saludo.vue";
export default {
    components:{Header,Saludo}

}
</script>

<style lang="scss" scoped>
.seleccion{
    position: absolute;
    background-color: white;
    width: 100%;
    margin-top: 5em;
    height: 100%;
    z-index: -1;
    .search{
    margin-top: 1%;
    width: 100%;
    height: 6em;
    &__div{
        position: relative;
        width: 90%;
        top: 25%;
        left: 5%;
        &__input{
            box-sizing: border-box;
            color: #191919;
            padding: 10px 20px 10px 40px;
            background-color: #E5E5E5;
            width: 100%;
            border-radius: 10px;
        }
        &__img{
            color: #191919;
            position: absolute;
            width: 20px;
            height: 20px;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
  }

}
</style>