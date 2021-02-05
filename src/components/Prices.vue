<template>
  <!-- Vad är läggn?-->
  <!-- Tillägg för längre hår an axlöar-->
  <div class="price-tabs">
    <div class="image-wrapper">
      <img id="desktop-img" src="../assets/img/bg1.jpg" alt="" />
      <img id="mobile-img" src="../assets/img/mobile.jpg" alt="" />
      <div class="info">
        <h2>
          Ring <span class="underline">0587-100 34</span> för att boka tid!
        </h2>
        <p>
          <i class="fas fa-exclamation-circle"></i> EJ AVBOKAD TID DEBITERAS
          <br />
          TILLÄGG FÖR HÅR LÄNGRE ÄN AXLARNA 150:-
        </p>
        <p>
          Avbokning av behandling måste ske 24 timmar före avtalad tid. 75%
          debitering på ej avbokad/missad tid. För avbokning bör du ringa
          salongen eller skriv ett meddelande på vår facebook-sida.
          <br />
          MVH/ Hårstugan.
        </p>
      </div>
    </div>
    <div class="table-container" v-if="prices && categories">
      <div class="bar">
        <div class="price-btn" @click="togglePrices">
          <i class="far fa-hand-point-right fa-lg"></i> Se alla priser
        </div>
        <ul id="categories" v-if="categories">
          <li
            v-for="category in categories"
            :key="category.name"
            @click="switchTab($event, category.id), togglePrices()"
            class="tab-link"
          >
            {{ category.name }}
          </li>
        </ul>
        <div v-else>Loading categories..</div>
      </div>
      <div id="haircut" class="tab">
        <table>
          <thead>
            <h1>Klippning</h1>
          </thead>
          <tbody v-for="(haircut, index) in prices[0]" :key="haircut[index]">
            <tr v-for="price in haircut" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="coloring" class="tab">
        <table>
          <thead>
            <h1>Färgning</h1>
          </thead>
          <tbody v-for="(coloring, index) in prices[1]" :key="coloring[index]">
            <tr v-for="price in coloring" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="perm" class="tab">
        <table>
          <thead>
            <h1>Permanent</h1>
          </thead>
          <tbody v-for="(coloring, index) in prices[2]" :key="coloring[index]">
            <tr v-for="price in coloring" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="wash" class="tab">
        <table>
          <thead>
            <h1>Tvätt</h1>
          </thead>
          <tbody v-for="(coloring, index) in prices[3]" :key="coloring[index]">
            <tr v-for="price in coloring" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="prom" class="tab">
        <table>
          <thead>
            <h1>Uppsättningar</h1>
          </thead>
          <tbody v-for="(coloring, index) in prices[4]" :key="coloring[index]">
            <tr v-for="price in coloring" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="brows" class="tab">
        <table>
          <thead>
            <h1>Bryn</h1>
          </thead>
          <tbody v-for="(coloring, index) in prices[5]" :key="coloring[index]">
            <tr v-for="price in coloring" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="extentions" class="tab">
        <table>
          <thead>
            <h1>Hårförlängning</h1>
          </thead>
          <tbody v-for="(coloring, index) in prices[6]" :key="coloring[index]">
            <tr v-for="price in coloring" :key="price.type">
              <td>{{ price.type }}</td>
              <td class="price">{{ price.price }};-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>Loading prices..</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Prices",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      categories: "getCategories",
      prices: "getPrices",
    }),
  },
  methods: {
    togglePrices: () => {
      if (window.screen.availWidth < 900) {
        const menu = document.getElementById("categories");

        if (menu.style.display === "none") {
          menu.style.display = "flex";
        } else {
          menu.style.display = "none";
        }
      }
    },
    switchTab: (event, tabName) => {
      const tabs = document.getElementsByClassName("tab");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      const currentTab = document.getElementById(tabName);
      currentTab.style.display = "block";

      const tabLinks = document.getElementsByClassName("tab-link");
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      }
      event.target.className += " active";
    },
  },
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
.image-wrapper {
  position: relative;
  overflow: hidden;
  max-height: 80vh;
}
.image-wrapper .info {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 1em;
  transform: translate(-50%, -50%);
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
}
#mobile-img {
  display: block;
}
#desktop-img {
  display: none;
}
.info i {
  color: var(--primary);
}
.image-wrapper img {
  width: 100%;
  height: fit-content;
  object-fit: cover;
}

#categories {
  display: none;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  padding: 1em 0px 0px 0px;
  background: #ededed;
  margin: 0;
  font-size: 1.1rem;
  border-bottom: 2px solid var(--primary);
}

.price-btn {
  text-align: center;
  display: block;
  font-weight: bold;
  padding: 1em;
  background: var(--primary);
  color: white;
}
.price-btn:hover {
  text-decoration: underline;
}
#categories li {
  padding: 1em;
}
#categories li:hover {
  cursor: pointer;
  font-weight: bold;
  color: var(--primary);
}
.active {
  color: var(--primary);
  font-weight: bold;
  border-bottom: 2px solid var(--primary);
}
.tab {
  padding: 1em;
  margin: 0;
  display: none;
}
#haircut {
  display: block;
}
.table-container {
  width: 100%;
}
.price {
  text-align: right;
  font-weight: bold;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 1.3em;
}
thead th {
  font-size: 1.3rem;
  background-color: var(--primary);
}
tr:hover {
  background-color: #f1f1f1;
}

td,
th {
  border-bottom: 1px solid var(--primary);
  text-align: left;
  padding: 1em 0;
}
@media screen and (min-width: 901px) {
  #categories {
    display: flex;
    flex-direction: row;
    background: white;
  }
  .price-btn {
    display: none;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .image-wrapper .info {
    width: 50%;
  }
  .table-container {
    width: 65%;
    margin: 0 auto;
  }
  .image-wrapper {
    max-height: 40vh;
  }
  #mobile-img {
    display: none;
  }
  #desktop-img {
    display: block;
  }
}

@media screen and ((min-width: 400px) and (max-width: 900px)) {
  .image-wrapper {
    max-height: 60vh;
  }

  .active {
    color: var(--primary);
    font-weight: bold;
    border-top: 2px solid var(--primary);
  }
  #mobile-img {
    display: block;
  }
  #desktop-img {
    display: none;
  }
}
</style>
