<template>
  <div class="about-page">
      <div v-for="person in hairdresser" :key="person.name">
          <figure>
              <img :src="person.url" alt="person">
              <figcaption>{{person.name}}</figcaption>
          </figure>
      </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            hairdresser: [
                {name: 'Jenny Carlsson', url: '../assets/img/profilbilder/jenny2.0.jpg'},
                {name: 'Caroline Olsson', url: '../assets/img/profilbilder/carro2.0.jpg'},
                {name: 'Wilma Eklund', url: '../assets/img/profilbilder/wilma.jpg'}
            ]
        }
    }
}
</script>

<style>

</style>