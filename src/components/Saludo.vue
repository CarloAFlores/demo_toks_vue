<template>
  <div class="div">

    <div class="div__user div__user--data_section">
      <p class="div__user__bienvenida">Hola Lucas, Nos encanta que estes aqui!</p>
      <p class="div__user__informe">Restaurante: <b>Toks MAQ</b> / Mesa: <b>10</b></p>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.div{
  position: sticky;
  top: 7.5%;
  z-index: 1;
  &__user{
    font-size: 1em;
    background: #e5e5e5;
    padding: 1.2em 2em;
    
    &__informe{
      font-size: .7em;
      letter-spacing: .1em;
      font-weight: lighter;
      b{
        font-weight: 800;
      }
    }
  }
}
@media (min-width: 700px) {
  .div{
    top: 12%;
      margin-top: .2em;
  }
}
</style>