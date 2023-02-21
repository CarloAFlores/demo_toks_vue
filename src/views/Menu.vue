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

    <div class="sugerencias">
        <div class="sugerencias__informacion">
            <h2 class="sugerencias__informacion__h2"><b> Recomendacion del chef </b></h2>
            <p class="sugerencias__informacin__p">Es momento de consentirse</p>
            <Slider_recomendacion/>
        </div>

        <div class="sugerencias__informacion">
            <h2 class="sugerencias__informacion__h2"><b> Sugrencias para ti </b></h2>
            <p class="sugerencias__informacin__p">Creamos sugerencias para ti basado
                en tus ultimos pedidos para ayudarte a elegir
            </p>
            <Slider_sugerencia/>
        </div>
    </div>

    <div class="menu">
        <h2>Comida</h2>
        <p>Servicios de 12 a 18 horas</p>

        <div class="menu__eleccion">
            <button class="menu__eleccion--click">Desayuno</button>
            <button class="menu__eleccion--click">Comida</button>
            <button class="menu__eleccion--click">Cena</button>
        </div>

        <div class="comida">
            <div class="items">Grid item1</div>
            <div class="items">Grid item2</div>
            <div class="items">Grid item3</div>
            <div class="items">Grid item4</div>
            <div class="items">Grid item5</div>
            <div class="items">Grid item6</div>
            <div class="items">Grid item7</div>
            <div class="items">Grid item8</div>
            <div class="items">Grid item9</div>
            <div class="items">Grid item10</div>
            <div class="items">Grid item11</div>
            <div class="items">Grid item12</div>
        </div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import Saludo from "@/components/Saludo.vue";
import Slider_recomendacion from "@/components/Slider_recomendacion.vue";
import Slider_sugerencia from "@/components/Slider_sugerencia.vue";
export default {
    components:{Header,Saludo,Slider_sugerencia,Slider_recomendacion}

}
</script>

<style lang="scss" scoped>
.seleccion{
    background-color: white;
    width: 100%;
    // margin-top: 5em;
    height: 100%;
    .search{
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
  .sugerencias{
    margin-top: 1%;
    width: 100%;
    &__informacion{
        margin-top: 10%;
        position: relative;
        width: 90%;
        top: 25%;
        left: 5%;
        &__h2{
            font-size: 1.5em;
        }
    }
  }
  .menu{
    position: relative;
    width: 90%;
    top: 5%;
    left: 5%;
    &__eleccion{
        display: flex;
        justify-content: space-evenly;
        
        &--click{
            &:focus{
                transition: all 0.2s ease-out;
                border-bottom: 5px solid orange;
                color: orange;
            }
        }
    }
  }
  .items{
  padding: 1rem;
  font-size: 1.25rem;
  background-color: #666;
}
.comida{
    display: grid;
    grid-template-columns: repeat(aut-fit,auto);
    gap: .5rem;
    .items:nth-child(1){
        background: rgb(46, 224, 40);
        grid-column: span 2;
    }
    .items:nth-child(12){
        background: rgb(46, 224, 40);;
        grid-column: span 2;
    }
}

}
</style>