<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide slide="1">
      <div class="carousel__item">
        <img src="@/assets/lasana.jpg" class="carousel__item__img">
        <div class="carousel__item__div">
            <p>2 X 1</p>
        </div>
      </div>
    </Slide>
    <Slide slide="2">
      <div class="carousel__item">
        <img src="@/assets/lasana.jpg" class="carousel__item__img">
        <div class="carousel__item__div-2">
            <p>Cupon de $150</p>
        </div>
      </div>
    </Slide>
    <Slide slide="3">
      <div class="carousel__item">
        <img src="@/assets/lasana.jpg" class="carousel__item__img">
        <div class="carousel__item__div-3">
            <p>10% adicional</p>
        </div>
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

<style lang="scss" scoped>
.carousel__item{
    background: green;
    width: 90%;
    height: auto;
    margin-top: 1rem;
    &::before{
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    width: 90%;
    height: 88%;
    position: absolute;
    content: "";
    top: 13%;
    left: 5%;
    }
}
.carousel__item__div{
    position: absolute;
    color: white;
    font-weight: bold;
    top: 50%;
    left: 30%;
    font-size: 1.5em;
}
.carousel__item__div-2{
    position: absolute;
    color: white;
    font-weight: bold;
    top: 40%;
    left: 5%;
    font-size: 1.5em;
    width: 90%;

}
.carousel__item__div-3{
    position: absolute;
    color: white;
    font-weight: bold;
    top: 40%;
    left: 5%;
    font-size: 1.5em;
    width: 90%;

}
@media (min-width: 700px) {
  .carousel__item{
    background: green;
    width: 90%;
    height: auto;
    margin-top: 1rem;
    &::before{
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    width: 90%;
    height: 90%;
    position: absolute;
    content: "";
    top: 6%;
    left: 5%;
    }
  }
  .carousel__item__div{
    position: absolute;
    color: white;
    font-weight: bold;
    top: 40%;
    left: 46%;
    font-size: 1.5em;
}
.carousel__item__div-2{
    position: absolute;
    color: white;
    font-weight: bold;
    top: 40%;
    left: 5%;
    font-size: 1.5em;
    width: 90%;

}
.carousel__item__div-3{
    position: absolute;
    color: white;
    font-weight: bold;
    top: 40%;
    left: 5%;
    font-size: 1.5em;
    width: 90%;

}
}
</style>