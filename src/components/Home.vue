<template>
    <div class="home-page">
        <div class="home-carousel">
            <div class="carousel-slide">
                <div class="test-picture">
                    <figure>
                        <img src="../assets/img/galleribilder/img0.jpg" alt="test">
                        <figcaption>Nyheter 2020!</figcaption>
                    </figure>
                    
                </div>
                <div class="test-text">
                    <h2>Nyheter 2020</h2>
                    <p>This is a news-text.</p>
                </div>
            </div>
            <div class="carousel-slide">
                <div class="test-picture">
                    <figure>
                        <img src="../assets/img/galleribilder/img0.jpg" alt="test">
                        <figcaption>Om Hårstugan</figcaption>
                    </figure>
                </div>
                <div class="test-text">
                    <h2>Om Hårstugan</h2>
                    <p>This is an about-text.</p>
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
            ]
        }
    },
    mounted() {
        this.showSlide(slideIndex);
    },
    components: {
    },
    methods: {
        changeSlide: function(index) {
            this.showSlide(slideIndex += index);
        },
        currentSlide: function(n) {
            this.showSlide(slideIndex = n);
        },
        showSlide: function(n) {
            var i;
            var slides = document.getElementsByClassName("carousel-slide");
            var slideDot = document.getElementsByClassName("slide-dot");
            if(n > slides.length) {
                slideIndex = 1;
            }
            if(n < 1) {
                slideIndex = slides.length;
            }
            console.log(slides.length);
            console.log(n);
            for(i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for(i = 0; i < slideDot.length; i++) {
                slideDot[i].className = slideDot[i].className.replace(" w3-white", "");
            }
            slides[slideIndex-1].style.display = "block";
            slideDot[slideIndex-1].className += " w3-white";
        }
    }
};
</script>

<style scoped>
.home-page {
    overflow: hidden;
}
.active-slide {
    display: block !important;
}
.carousel-slide {
    max-width: 100%;
    display: none;
    
}
.carousel-controls {
    color: white;
    bottom: 0;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
}
.previous-slide, .next-slide, .w3-badge {
    cursor: pointer;
    z-index: 1000;
}
.w3-badge {
    height:13px;width:13px;padding:0
}
.test-picture {
    position: relative;
    z-index: 400;
    max-width: 800px;
}
.test-picture figure {
    margin: 0;
}
.test-picture img {
    max-width: 800px;
}
.test-picture figcaption {
    font-size: 36px;
    font-weight: bold;
    width: 100%;
    bottom: 0;
    position: absolute;
    background: rgba(0,0,0,0.5);
    color: white;
    z-index: 500;
}

</style>