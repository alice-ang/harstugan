<template>
  <div class="about-page">
      <div class="hairdressers">
          <figure v-for="person in hairdresser" :key="person.name" class="hairdresser">
              <img :src="person.url" alt="person">
              <figcaption>{{person.name}}</figcaption>
          </figure>
      </div>
      <div class="about-harstugan">
          <h1 class="about-h-title">Om Hårstugan</h1>
          <p class="about-text">{{about.text}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            hairdresser: [
                {name: 'Jenny Carlsson', url: require('../assets/img/profilbilder/jenny2.0.jpg')},
                {name: 'Caroline Olsson', url: require('../assets/img/profilbilder/carro2.0.jpg')},
                {name: 'Wilma Eklund', url: require('../assets/img/profilbilder/wilma.jpg')}
            ],
            about: {text: 'Hårstugan som i år fyller 36 år drivs av frisörmästare Jenny Carlsson. Här jobbar också Caroline Olsson. Både Carro och Jenny har frisörlicens från Frisörernas yrkesnämnd(FYN) samt tagit gesällen. Sedan Juni 2019 finns Wilma Eklund hos oss, även hon har licens och jobbar trainee-timmar mot gesällen. Följ oss gärna på våra sociala medier för att se vad som händer under året! Du hittar oss på Instagram och Facebook. Varmt välkommen till Hårstugan i Nora! 😊 // Jenny, Carro och Wilma'}
        }
    }
}
</script>

<style>
.about-page {
    display: grid;
    grid-template-areas: 'left right';
    grid-template-columns: 1fr 1fr;
    background: rgba(0, 0, 0, 0.1);
}
.hairdressers {
    display: flex;
    flex-direction: row;
    grid-area: left;
    width: 100%;
}
.hairdresser {
    background: white;
    box-shadow: 1px 0.1px 8px black;
    padding: 8px;
}
.hairdresser figcaption {
    padding: 8px;
    font-weight: bold;
    text-align: center;
    bottom: 0;
}
.about-harstugan {
    grid-area: right;
}
.about-h-title {
    
}
.about-text {

}
</style>