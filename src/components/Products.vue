<template>
  <div class="container">
    <h2>Produkter vi säljer</h2>

    <div class="row">
      <div class="column" v-for="(image, i) in products" :key="i">
        <img
          :src="image.img.url"
          style="width:100%"
          @click="
            openModal();
            currentSlide(i + 1);
          "
          class="hover-shadow cursor"
        />
      </div>
    </div>
    <div id="myModal" class="modal">
      <span class="close cursor" @click="closeModal()">&times;</span>
      <div class="modal-content">
        <div class="mySlides" v-for="(image, i) in products" :key="i">
          <div class="numbertext">{{ i + 1 }} / {{ products.length }}</div>
          <img :src="image.img.url" style="width:100%" />
        </div>

        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>

        <div class="caption-container">
          <p id="caption"></p>
        </div>

        <div class="column" v-for="(image, i) in products" :key="i">
          <img
            class="demo cursor"
            :src="image.img.url"
            style="width:100%"
            @click="currentSlide(i + 1)"
            :alt="image.img.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  components: {},
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    openModal: function() {
      document.getElementById("myModal").style.display = "block";
    },
    closeModal: function() {
      document.getElementById("myModal").style.display = "none";
    },
    plusSlides: function(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide: function(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides: function(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("demo");
      const captionText = document.getElementById("caption");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
      captionText.innerHTML = dots[this.slideIndex - 1].alt;
    },
  },
  data() {
    return {
      slideIndex: 1,
      products: [
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/ola.jpg"),
            alt: "Olaplex",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/milk2.jpg"),
            alt: "Milkshake",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/milk3.jpg"),
            alt: "Milkshake",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/lanza1.jpg"),
            alt: "Lanza",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/lanza2.jpg"),
            alt: "Lanza",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/lanza3.jpg"),
            alt: "Lanza",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/lanza4.jpg"),
            alt: "Lanza",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/lanza5.jpg"),
            alt: "Lanza",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/evo.jpg"),
            alt: "Evo",
          },
        },
        {
          title: "",
          description: "",
          img: {
            url: require("../assets/img/produkter/kemon.jpg"),
            alt: "Kemon",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
* {
  box-sizing: border-box;
}

.row > .column {
  padding: 8px 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 50%;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 0 auto;
  padding: 0;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.mySlides {
  display: none;
}

.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: -4px;
}

.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media screen and (min-width: 900px) {
  .container {
    margin: 0 auto;
    width: 70%;
  }
  .column {
    float: left;
    width: 25%;
  }
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 70%;
    max-width: 1200px;
  }
}
@media screen and (max-width: 500px) {
  .column {
    float: left;
    width: 100%;
  }
}
</style>
