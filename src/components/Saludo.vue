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
  margin-top: 4em;
  &__user{
    font-size: 1em;
    background: #e5e5e5;
    padding: 1.2em 2em;
    
    &__informe{
      font-size: .7em;
      letter-spacing: .1em;
      font-weight: lighter;
      
    }
  }
}
</style>