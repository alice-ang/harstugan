<template>
    <div class="home-page">
        <div class="home-carousel">
            <div class="carousel-slide initial">
                <div class="slide-content">
                    <div class="slide-picture">
                        <figure>
                            <img src="../assets/img/galleribilder/img0.jpg" alt="test">
                            <figcaption>Nyheter 2020!</figcaption>
                        </figure>
                    </div>
                    <div class="slide-text">
                        <h2>Nyheter 2020</h2>
                        <p>{{alerts.text1}}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-slide">
                <div class="slide-content">
                    <div class="slide-picture">
                        <figure>
                            <img src="../assets/img/galleribilder/img0.jpg" alt="test">
                            <figcaption>Om Hårstugan</figcaption>
                        </figure>
                    </div>
                    <div class="slide-text">
                        <h2>Om Hårstugan</h2>
                        <p>{{alerts.text2}}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <div class="previous-slide w3-left" id="prevSlide" @click="changeSlide(-1)">&#10094;</div>
                <div class="next-slide w3-right" id="nextSlide" @click="changeSlide(1)">&#10095;</div>
                <span class="w3-badge slide-dot w3-border w3-transparent w3-hover-white" @click="currentSlide(1)"></span>
                <span class="w3-badge slide-dot w3-border w3-transparent w3-hover-white" @click="currentSlide(2)"></span>
            </div>
        </div>
    </div>
</template>

<script>
var slideIndex = 1;

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
            ],
            alerts: {
                text1: "This is a news-text.This is a news-text.This is a news-text.This is a news-text.This is a news-text.This is a news-text.This is a news-text.",
                text2: "This is an about-text.This is an about-text.This is an about-text.This is an about-text.This is an about-text.This is an about-text.This is an about-text."
            }
        }
    },
    mounted() {
    },
    components: {
    },
    methods: {
        changeSlide: function() {
            var slides = document.getElementsByClassName("carousel-slide"),
            totalSlides = slides.length,
            slide = 0,
            moving = true;
        },
        setInitialClass: function() {
            
        }
    }
};
</script>

<style scoped>
.home-page {
    overflow: hidden;
    width: 100%;
}
.home-page * {
    box-sizing: border-box;
}
.active-slide {
    display: block !important;
}
.home-carousel {
    transform-style: preserve-3d;
}
.carousel-slide {
    width: 100%;
    opacity: 0;
    top: 0;
    margin: auto;
    position: absolute;
    z-index: 100;
    transition: transform .5s, opacity .5s, z-index .5s;
}
.carousel-slide.initial,
.carousel-slide.active {
  opacity: 1;
  position: relative;
  z-index: 900;
}
.carousel-slide.next, 
.carousel-slide.prev {
    z-index: 800;
}
.carousel-slide.prev {
    transform: translateX(-100%);
}
.carousel-slide.next {
    transform: translateX(100%);
}
.slide-content {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 10px;
}
.carousel-controls {
    color: white;
    bottom: 0;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
}
.previous-slide, .next-slide {
    position: absolute;
    top:50%;
    width: 3rem;
    height: 3rem;
    background-color: #FFF;
    transform: translateY(-50%);
    border-radius: 50%;
    cursor: pointer; 
    z-index: 1001; /* Sit on top of everything */
    border: 1px solid black;
}
.previous-slide {
    left: 0;
}
.next-slide {
    right: 0;
}
.previous-slide::after, .next-slide::after {
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 54%;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    transform: translate(-50%, -50%) rotate(135deg);
}
.next-slide::after {
    left: 47%;
    transform: translate(-50%, -50%) rotate(-45deg);
}
.w3-badge {
    height: 13px;
    width: 13px;
    padding: 0;
    cursor: pointer;
}
.slide-picture {
    position: relative;
    z-index: 400;
    max-width: 800px;
}
.slide-picture figure {
    margin: 0;
}
.slide-picture img {
    max-width: 800px;
}
.slide-picture figcaption {
    font-size: 36px;
    font-weight: bold;
    width: 100%;
    bottom: 0;
    padding-left: 10px;
    position: absolute;
    background: rgba(0,0,0,0.5);
    color: white;
    z-index: 500;
}
.slide-text h2 {
    text-align: center;
}
</style>