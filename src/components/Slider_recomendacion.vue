<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide slide="1">
      <div class="carousel__item">
        <img src="@/assets/lasana.jpg" class="carousel__item__img">
      </div>
    </Slide>
    <Slide slide="2">
      <div class="carousel__item">
        <img src="@/assets/lasana.jpg" class="carousel__item__img">
      </div>
    </Slide>
    <Slide slide="3">
      <div class="carousel__item">
        <img src="@/assets/lasana.jpg" class="carousel__item__img">
      </div>
    </Slide>
    

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<style lang="scss">
.carousel__item{
    background: green;
    width: 60%;
    height: 13vh;
    margin-top: 1rem;
    &__img{
      height: 13vh;
    }
}
</style>