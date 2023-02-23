<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide slide="1">
      <div class="carousel__item">
        <img src="@/assets/comida_1.jpg" class="carousel__item__img">
      </div>
    </Slide>
    <Slide slide="2">
      <div class="carousel__item">
        <img src="@/assets/comida_3.jpg" class="carousel__item__img">
      </div>
    </Slide>
    <Slide slide="3">
      <div class="carousel__item">
        <img src="@/assets/comida_5.jpg" class="carousel__item__img">
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
    height: auto;
    margin-top: 1rem;
    &::before{
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    width: 60%;
    height: 85%;
    position: absolute;
    content: "";
    top: 15%;
    left: 20%;
    }
}
</style>