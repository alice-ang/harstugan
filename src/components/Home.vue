<template>
    <div class="home-page">
        <carousel-3d :controls-visible="true" class="carousel-3d">
            <slide v-for="(slide, index) in gallery" v-bind:key="slide[index]" :index="index">
                <img :src="slide.image" alt="image">
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    data() {
        return{
            gallery: [
                {
                    image: require("../assets/img/galleribilder/img0.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img1.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img2.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img3.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img4.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img5.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img6.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img7.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img8.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img9.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img10.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img11.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img12.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img13.jpg"),
                },
                {
                    image: require("../assets/img/galleribilder/img14.jpg"),
                }
            ]
        }
    },
    components: {
        Carousel3d,
        Slide,
    }
};
</script>

<style>
.carousel-3d {
    width: 80% !important;
}

</style>