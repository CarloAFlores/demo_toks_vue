<template>
  <Header/>
  <Saludo/>

  <div class="seleccion">
    <p class="seleccion__pregunta">¿Cuantas personas ordenarán desde tu aplicación?</p>
    <form action="" method="post" class="seleccion__form">
      <div class="seleccion__form__input">
        <p>1 persona</p>
        <input type="radio" name="num_person" value="1" v-model="optionSelected">
      </div>
      <div class="seleccion__form__input">
        <p>2 personas</p>
        <input type="radio" name="num_person" value="2" v-model="optionSelected">
      </div>
      <div class="seleccion__form__input">
        <p>3 personas</p>
        <input type="radio" name="num_person" value="3" v-model="optionSelected">
      </div>
      <div class="seleccion__form__input">
        <p>4 personas</p>
        <input type="radio" name="num_person" value="4" v-model="optionSelected">
      </div>
      <div class="seleccion__form__input">
        <p>5 o mas personas</p>
        <input type="radio" name="num_person" value="5" v-model="optionSelected">
      </div>
    </form>
  </div>

  <div class="footer">
    <button class="footer__btn" :class="{active: goMenuBtnActive}" :disabled="!goMenuBtnActive" @click="$router.push('menu')">Ir al menu</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Saludo from "@/components/Saludo.vue";
import store from '@/store';
export default {
    components:{
      Header,
      Saludo
      },
    data(){
      return{
        optionSelected: null,
        }
    },
    mounted(){
      this.optionSelected = store.state.dinersCount;
    },
    computed:{
      // Determina si existe una opción seleccionada para activar o desactivar el botón de ir al menu
      goMenuBtnActive(){
        return this.optionSelected > 0 ? true : false;
      }
    },
    methods:{
      // Setea la selección de manera global a través del store de VUEX
      changeDinersCount(){
        store.commit('setDinersCount',this.optionSelected)
      }
    },
    watch:{
      optionSelected(value){
        this.changeDinersCount()
      }
    }
    
}
</script>

<style lang="scss" scoped>
.seleccion{
  font-size: .9em;
  padding: 0 1.5em;
  &__pregunta{
    padding: 2em 0;
    text-align: center;
  }
  &__form{
    font-weight: 500;
    &__input{
      display: flex;
      justify-content: space-between;
      padding: 1em 0.2em;
      border-top: #DDDDDD solid .5px;
    }
    #last-input{
      border-bottom: #DDDDDD solid 0.5px;
    }
  }
}
.footer{
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding-bottom: 1em;
    padding-top: 1em;
    border-top: #DDDDDD solid 0.5px;
    &__btn{
      color: #FFFFFF;
      background-color: #AFAFAF;
      padding-right: 4em;
      padding-left: 4em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      border-radius: 0.3em;
      
    }
    .active{
      background: black;
    }
}

@media (min-width: 700px) {
    .seleccion{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__form{
        width: 50%;
        }
    }
  }

@media (max-height: 600px) {
      .footer{

        height: 1rem;
        top: 100%;
        &__btn{

          width: 70%;
          height: 2rem;
        }
    }
  }

</style>