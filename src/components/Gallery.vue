<template>
  <div>
    <div class="container">
      <div class="gallery-container" v-for="(product, i) in products" :key="i">
        <div class="gallery-item">
          <div class="text">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
          </div>
          <div class="image">
            <img v-bind:src="product.img.url" alt="product.img.alt" />
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    products: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  margin: 1em;
  display: grid;
  grid-auto-rows: 300px 300px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
}
.gallery-item {
  height: 100%;
  width: 100%;
  position: relative;
}
.image {
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.text {
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  pointer-events: none;
  z-index: 4;
}
@media screen and (min-width: 900px) {
  .container {
    width: 50%;
    margin: 1em auto;
  }
}
</style>
