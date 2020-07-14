<template>
  <div class="home-page">
      <img src="../assets/img/bg2.jpg" alt="background" class="background-image">
      <img src="../assets/img/loggor/harstuganlogo2vit.png" alt="logo" class="harstugan-image">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-page {
    overflow: hidden;
}
.background-image {
    position: relative;
    width: 100%;
    filter: blur(3px);
    transform: scale(1.1);
}
.harstugan-image {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
}
</style>