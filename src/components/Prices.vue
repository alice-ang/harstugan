<template>
<!-- Vad är läggn?-->
<!-- Tillägg för längre hår an axlöar-->
  <div class="price-tabs">
              <div class="image-wrapper">
            <img src="../assets/img/bg1.jpg" alt="">
            <div class="info">
              <h2>Ring <span class="underline">0587-100 34</span> för att boka tid!</h2>
              <p> <i class="fas fa-exclamation-circle"></i> EJ AVBOKAD TID DEBITERAS <br> TILLÄGG FÖR HÅR LÄNGRE ÄN AXLARNA 150:-</p>
              <p>
                    Avbokning av behandling måste ske 24 timmar före avtalad tid.
                    75% debitering på ej avbokad/missad tid. För avbokning bör du ringa salongen eller skriv ett meddelande på vår facebook-sida.
                    <br>
                    MVH/ Hårstugan.
                </p>
          </div>
        </div>
      <!--<div class="container">
          <div class="info">
              <img src="https://source.unsplash.com/1920x1080/?hairdresser" alt="">
              <h1>Ring <span class="underline">0587-100 34</span> för att boka tid!</h1>
              <p>EJ AVBOKAD TID DEBITERAS <br>
                    Avbokning av behandling måste ske 24 timmar före avtalad tid.
                    75% debitering på ej avbokad/missad tid. För avbokning bör du ringa salongen eller skriv ett meddelande på vår facebook-sida.
                    <br>
                    MVH/ Hårstugan.
                </p>
          </div>
      </div>-->
      <div class="table-container">
        <div class="bar">
        <div class="price-btn" @click="togglePrices"> Se alla priser</div>
          <ul id="categories">
              <li v-for="category in categories" :key="category.name" @click="switchTab($event, category.id), togglePrices()" class="tab-link"> {{category.name}}</li>
          </ul>
      </div>
      <div id="haircut" class="tab">
        <table>
              <thead>
                  <h1>Klippning</h1>
              </thead>
            <tbody v-for="(haircut, index) in prices[0]" :key="haircut[index]">
                <tr v-for="price in haircut" :key="price.type">
                    <td>{{price.type}} </td>
                    <td class="price"> {{price.price}};-</td>
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
                    <td>{{price.type}}</td>
                    <td class="price"> {{price.price}};-</td>
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
                    <td>{{price.type}}</td>
                    <td class="price"> {{price.price}};-</td>
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
                    <td>{{price.type}}</td>
                    <td class="price"> {{price.price}};-</td>
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
                    <td>{{price.type}}</td>
                    <td class="price"> {{price.price}};-</td>
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
                    <td>{{price.type}}</td>
                    <td class="price"> {{price.price}};-</td>
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
                    <td>{{price.type}}</td>
                    <td class="price"> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Prices',
    data(){
        return{
            categories: [
                {
                    name: 'Klippning',
                    id: 'haircut',
                },
                {
                    name: 'Färgning',
                    id: 'coloring',
                },
                                {
                    name: 'Permanent',
                    id: 'perm'
                },
                {
                    name: 'Tvätt',
                    id: 'wash'
                },
                {
                    name: 'Uppsättningar',
                    id: 'prom'
                },
                {
                    name: 'Bryn',
                    id: 'brows'
                },
                {
                    name: 'Hårförlängning',
                    id: 'extentions'
                },   
            ],
            prices: [
                {
                    haircuts: 
                        [
                        {
                            type: 'Klippning',
                            price: '440'
                        },
                        {
                            type: 'Barnkl. upptill 10år',
                            price: '360'
                        },
                        {
                            type: 'Luggklipp',
                            price: '100'
                        },
                        {
                            type: 'Maskinklipp',
                            price: '200'
                        },
                        {
                            type: 'Klippning + bottenfärg',
                            price: 'från 980'
                        },
                        {
                            type: 'Klippning + 1färg ',
                            price: 'från 1100'
                        },
                        {
                            type: 'Klippning + 2färg',
                            price: 'från 1200'
                        },
                        {
                        type: 'Klippning + flerfärg',
                        price: 'från 1300' 
                        },
                        {
                            type: 'Klippning + slingor',
                            price: 'från 1100'
                        },
                        {
                            type: 'Klippning + folie',
                            price: 'från 1200'
                        },
                        {
                            type: 'Klipp + avfärgning/toning',
                            price: 'från 1000'
                        }
                    ],
                },
                {
                    colorings:[
                        {
                            type: 'Färgning',
                            price: 'från 900'
                        },
                        {
                            type: '2 färg',
                            price: 'från 1000'
                        },
                        {
                            type: 'Fler färg',
                            price: 'från 1100'
                        },
                        {
                            type: 'Folie slingor',
                            price: 'från 1000'
                        },
                        {
                            type: 'Sling i hätta',
                            price: 'från 900'
                        },
                        {
                            type: 'Avfärgning',
                            price: '700'
                        }, 
                        {
                            type: 'Nyansering',
                            price: '800'
                        }
                    ]
                },
                {
                    perms: [
                        {
                            type: 'Halvpermanent',
                            price: 'från. 950'
                        },
                        {
                            type: 'Permanent',
                            price: 'från. 1100'
                        }
                    ]
                },
                {
                    washes: [
                        {
                            type: 'Tvätt + läggn',
                            price: '400'
                        }, 
                        {
                            type: 'Tvätt och fön',
                            price: '400'
                        }
                    ]
                },
                {
                    proms: [
                        {
                            type: 'Baluppsättning' ,
                            price: '950'
                        }, 
                        {
                            type: 'Enklare Balfrisyr',
                            price: '800'
                        },
                        {
                            type: 'Bruduppsättning',
                            price: 'från 2000'
                        }
                    ]
                },
                {
                    brows: [
                        {
                            type: 'Färg av bryn',
                            price: '200'
                        },
                        {
                            type: 'Färg av fransar',
                            price: '200'
                        }, 
                        {
                            type: 'Ögonfärgpaket',
                            price: '300'
                        }, 
                        {
                            type: 'Brynplock',
                            price: '150'
                        }
                    ]
                },
                {
                    extentions: [
                        {
                            type: 'Hel',
                            price: 'från 6000'
                        }, 
                        {
                            type: 'Halv',
                            price: 'från 4500'
                        }
                    ]
                }
            ],

        }
    },
    methods: {
        togglePrices: ()=>{
            if(window.screen.availWidth < 900){
            const menu = document.getElementById('categories');
            
            if(menu.style.display === 'none'){
             menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
            }
        },
        switchTab: (event, tabName) => {

            const tabs = document.getElementsByClassName('tab');
            for(let i = 0;  i < tabs.length; i++){
                tabs[i].style.display = 'none';
            }
            const currentTab = document.getElementById(tabName);
            currentTab.style.display = 'block';

            const tabLinks = document.getElementsByClassName('tab-link');            
            for(let i = 0; i < tabLinks.length; i ++){
               tabLinks[i].className = tabLinks[i].className.replace(" active", "");
                
            }
            event.target.className += ' active';
            
        },
    }
}
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
    background: rgba(255, 255, 255, 0.65);
    border-radius: 5px;
    padding: 1em;
    transform: translate(-50%, -50%);
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
}
.info i {
    color: white;
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
#categories li:hover  {
    cursor: pointer;
    font-weight: bold;
    color: var(--primary);
}
.active {
    background-color: #f1f1f1;
    color: var(--primary);
    font-weight: bold;
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
thead th{
    font-size: 1.3rem;
    background-color: var(--primary);
}
tr:hover {
    background-color: #f1f1f1;
}

td, th {
    border-bottom: 1px solid var(--primary);
    text-align: left;
    padding: 1em 0;
}
@media screen and (min-width: 900px) {
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
    width: 50%;
    margin: 0 auto;
    }
    .image-wrapper {
    max-height: 50vh;
    }
}
@media screen and (min-width: 400px) {
    .image-wrapper {
    max-height: 60vh;
    }
}
</style>