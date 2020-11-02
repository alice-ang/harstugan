<template>
  <div class="about-page">
    <h1>Om Hårstugan</h1>
    <div class="about-row">
      <div class="about-text">
        <p>
          Hårstugan som i år fyller 36 år drivs av frisörmästare Jenny Carlsson.
          Här jobbar också Caroline Olsson. Både Carro och Jenny har
          frisörlicens från Frisörernas yrkesnämnd(FYN) samt tagit gesällen.
          Sedan Juni 2019 finns Wilma Eklund hos oss, även hon har licens och
          jobbar trainee-timmar mot gesällen.
        </p>
        <p>
          Följ oss gärna på våra sociala medier för att se vad som händer under
          året! Du hittar oss på
          <span @click="setIframe('instagram')">Instagram</span> och
          <span @click="setIframe('facebook')">Facebook</span>.
        </p>
        <p>
          Varmt välkommen till Hårstugan i Nora! 😊 // Jenny, Carro och Wilma
        </p>
        <div class="about-row">
          <figure v-for="person in hairdresser" :key="person.name">
            <img :src="person.url" alt="person" />
            <figcaption>
              <h5>{{ person.name }}</h5>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="smartphone">
        <div class="content">
          <iframe
            :src="this.source"
            style="width:100%;border:none;height:100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      source:
        "https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3466540a1e803c%26domain%3Dharstugan.se%26origin%3Dhttp%253A%252F%252Fharstugan.se%252Ff2e8838d6cda50c%26relation%3Dparent.parent&hide_cover=true&href=https%3A%2F%2Fwww.facebook.com%2FH%25C3%25A5rstugan-264806910204747%2F%3Ffref%3Dts&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline",
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
    };
  },
  methods: {
    setIframe(clicked) {
      console.log(clicked);
      if (clicked === "facebook") {
        this.source =
          "https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3466540a1e803c%26domain%3Dharstugan.se%26origin%3Dhttp%253A%252F%252Fharstugan.se%252Ff2e8838d6cda50c%26relation%3Dparent.parent&hide_cover=true&href=https%3A%2F%2Fwww.facebook.com%2FH%25C3%25A5rstugan-264806910204747%2F%3Ffref%3Dts&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline";
      } else {
        this.source = "https://www.instagram.com/p/BxknR2OhM68/embed";
      }
    },
  },
};
</script>

<style>
.about-page {
  padding: 1em;
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
.about-page figure img {
  box-shadow: 0px 0px 10px 0px rgba(94, 94, 94, 0.65);
  border-radius: 50%;
  background: white;
}
figcaption {
  text-align: center;
  bottom: 0;
}

.about-text {
  padding: 0 1em;
}
.about-text span {
  font-weight: bold;
  cursor: pointer;
}
/* The device with borders */
.smartphone {
  position: relative;
  width: 290px;
  height: 570px;
  margin: auto;
  border: 16px #2b2b2b solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
}

/* The horizontal line on the top of the device */
.smartphone:before {
  content: "";
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: "";
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #505050;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
  width: 250px;
  height: 450px;
}

@media screen and (min-width: 905px) {
  .about-page {
    margin: 0 auto;
    width: 50%;
  }
  .about-row {
    flex-wrap: nowrap;
  }
  .smartphone {
    width: 400px;
    height: 580px;
  }

  .smartphone .content {
    width: 340px;
    height: 460px;
  }
}
</style>
