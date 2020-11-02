<template>
  <div class="about-page">
    <h1>Om Hårstugan</h1>
    <div class="about-row">
      <figure v-for="person in hairdresser" :key="person.name">
        <img :src="person.url" alt="person" />
        <figcaption>
          <h5>{{ person.name }}</h5>
        </figcaption>
      </figure>
    </div>
    <div class="about-text">
      <p>{{ about.text1 }}</p>
      <p>{{ about.text2 }}</p>
      <p>{{ about.text3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      hairdresser: [
        {
          name: "Jenny Carlsson",
          url: require("../assets/img/profilbilder/jenny2.0.jpg"),
        },
        {
          name: "Caroline Olsson",
          url: require("../assets/img/profilbilder/carro2.0.jpg"),
        },
        {
          name: "Wilma Eklund",
          url: require("../assets/img/profilbilder/wilma.jpg"),
        },
      ],
      about: {
        text1:
          "Hårstugan som i år fyller 36 år drivs av frisörmästare Jenny Carlsson. Här jobbar också Caroline Olsson. Både Carro och Jenny har frisörlicens från Frisörernas yrkesnämnd(FYN) samt tagit gesällen. Sedan Juni 2019 finns Wilma Eklund hos oss, även hon har licens och jobbar trainee-timmar mot gesällen.",
        text2:
          "Följ oss gärna på våra sociala medier för att se vad som händer under året! Du hittar oss på Instagram och Facebook.",
        text3:
          "Varmt välkommen till Hårstugan i Nora! 😊 // Jenny, Carro och Wilma",
      },
    };
  },
};
</script>

<style>
.about-page {
  display: flex;
  flex-direction: column;
}
.about-page h1 {
  text-align: center;
}
.about-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
figure img {
  box-shadow: 0px 0px 10px 0px rgba(94, 94, 94, 0.65);
  border-radius: 50%;
  background: white;
}

figcaption {
  text-align: center;
  bottom: 0;
}

.about-text {
  margin: 0 1em;
}
@media screen and (min-width: 905px) {
  .about-page {
    margin: 0 auto;
    width: 70%;
  }
  .about-row {
    flex-wrap: no-wrap;
  }
}
</style>
