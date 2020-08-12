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
                <div class="previous-slide w3-left" id="prevSlide"></div>
                <div class="next-slide w3-right" id="nextSlide"></div>
                <span class="w3-badge slide-dot w3-border w3-transparent w3-hover-white" @click="moveCarouselTo(0)"></span>
                <span class="w3-badge slide-dot w3-border w3-transparent w3-hover-white" @click="moveCarouselTo(1)"></span>
            </div>
        </div>
    </div>
</template>

<script>

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
            },
            slideClassName: 'carousel-slide',
            slides: '',
            totalSlides: '',
            slide: 0,
            moving: null,
        }
    },
    mounted() {
        this.slides = document.getElementsByClassName(this.slideClassName);
        this.totalSlides = this.slides.length;
        this.initCarousel();
    },
    components: {
    },
    methods: {
        setInitialClasses: function() {
            this.slides[this.totalSlides - 1].classList.add('prev');
            this.slides[0].classList.add('active');
            this.slides[1].classList.add('next');
        },
        setEventListeners: function() {
            var next = document.getElementById('nextSlide'),
                prev = document.getElementById('prevSlide');
            next.addEventListener('click', this.moveNext);
            prev.addEventListener('click', this.movePrev);
        },
        moveNext: function() {
            if (this.moving == false) {
                if (this.slide === (this.totalSlides - 1)) {
                    this.slide = 0;
                } else {
                    this.slide += 1;
                }
                this.moveCarouselTo(this.slide);
            }
        },
        movePrev: function() {
            if (this.moving == false) {
                if (this.slide === 0) {
                    this.slide = (this.totalSlides - 1);
                } else {
                    this.slide -= 1;
                }
                this.moveCarouselTo(this.slide);
            }
        },
        disableInteraction: function() {
            this.moving = true;
            setTimeout(function(){
                this.moving = false;
            }.bind(this), 500);
        },
        moveCarouselTo: function(slide) {
            if (!this.moving) {
                this.disableInteraction();
                var newPrev = this.slide - 1,
                    newNext = this.slide + 1,
                    oldPrev = this.slide - 2,
                    oldNext = this.slide + 2;
                if ((this.totalSlides - 1) > 0) {
                    if (newPrev <= 0) {
                        oldPrev = (this.totalSlides - 1);
                    } else if (newNext >= (this.totalSlides - 1)) {
                        oldNext = 0;
                    }
                    if (this.slide === 0) {
                    newPrev = (this.totalSlides - 1);
                    oldPrev = (this.totalSlides - 2);
                    oldNext = (this.slide + 1);
                    } else if (this.slide === (this.totalSlides - 1)) {
                        newPrev = (this.slide - 1);
                        newNext = 0;
                        oldNext = 1;
                    }
                    this.slides[oldPrev].className = this.slideClassName;
                    this.slides[oldNext].className = this.slideClassName;

                    this.slides[newPrev].className = this.slideClassName + " prev";
                    this.slides[slide].className = this.slideClassName + " active";
                    this.slides[newNext].className = this.slideClassName + " next";
                }
            }
        },
        initCarousel: function() {
            this.setInitialClasses();
            this.setEventListeners();
            this.moving = false;
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
    transform: translateY(-50%);
    border-radius: 50%;
    cursor: pointer; 
    z-index: 1001; /* Sit on top of everything */
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
    width: 25px;
    height: 25px;
    top: 50%;
    left: 54%;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
    border-radius: 4px;
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