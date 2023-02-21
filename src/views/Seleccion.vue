<template>
  <Header/>
  <Saludo/>

  <div class="seleccion">
    <p class="seleccion__pregunta">¿Cuantas personas ordenarán desde tu aplicación?</p>
    <form action="" method="post" class="seleccion__form">
      <div class="seleccion__form__input">
        <p>1 persona</p>
        <input type="radio" name="num_person" id="">
      </div>
      <div class="seleccion__form__input">
        <p>2 personas</p>
        <input type="radio" name="num_person" id="">
      </div>
      <div class="seleccion__form__input">
        <p>3 personas</p>
        <input type="radio" name="num_person" id="">
      </div>
      <div class="seleccion__form__input">
        <p>4 personas</p>
        <input type="radio" name="num_person" id="">
      </div>
      <div class="seleccion__form__input">
        <p>5 o mas personas</p>
        <input type="radio" name="num_person" id="">
      </div>
    </form>
  </div>

  <div class="footer">
    <button class="footer__btn">Ir al menu</button>
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
    &:active{
      background: black;
    }
    &__btn{
      color: #FFFFFF;
      background-color: #AFAFAF;
      padding-right: 4em;
      padding-left: 4em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      border-radius: 0.3em;
    }
}

</style>