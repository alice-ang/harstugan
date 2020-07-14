<template>
<!-- Vad är läggn?-->
  <div class="price-tabs">
      <h1><i class="fas fa-cut"></i> Priser</h1>
      <div class="bar">
        <div  class="price-btn" @click="togglePrices"> Se alla priser</div>
          <ul>
              <li v-for="category in categories" :key="category.name" @click="switchTab($event, category.id)" class="tab-link"> {{category.name}}</li>
          </ul>
      </div>
      <div id="haircut" class="tab">
        <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(haircut, index) in prices[0]" :key="haircut[index]">
                <tr v-for="price in haircut" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
      <div id="coloring" class="tab">
        <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(coloring, index) in prices[1]" :key="coloring[index]">
                <tr v-for="price in coloring" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
        <div id="perm" class="tab">
            <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(coloring, index) in prices[2]" :key="coloring[index]">
                <tr v-for="price in coloring" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
        <div id="wash" class="tab">
            <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(coloring, index) in prices[3]" :key="coloring[index]">
                <tr v-for="price in coloring" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
      <div id="prom" class="tab">
            <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(coloring, index) in prices[4]" :key="coloring[index]">
                <tr v-for="price in coloring" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
      <div id="brows" class="tab">
                  <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(coloring, index) in prices[5]" :key="coloring[index]">
                <tr v-for="price in coloring" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
      </div>
      <div id="extentions" class="tab">
                  <table>
              <thead>
                  <tr>
                      <th>Typ</th>
                      <th>Pris</th>
                  </tr>
              </thead>
            <tbody v-for="(coloring, index) in prices[6]" :key="coloring[index]">
                <tr v-for="price in coloring" :key="price.type">
                    <td>{{price.type}}</td>
                    <td> {{price.price}};-</td>
                </tr>
            </tbody>
          </table>
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
            const menu = document.querySelector('ul');
            
            if(menu.style.display === 'none'){
             menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
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
.bar ul {
    background: red;
    display: none;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    padding: 1em 0px 0px 0px;
}
.price-btn {
    text-align: center;
    display: block;
    font-weight: bold;
}
.price-btn:hover {
    text-decoration: underline;
}
.bar ul li {
    padding: 1em;
}
.active {
    background-color: white;
}
.tab {
    padding: 1em;
    margin: 0;
    display: none;
}
#haircut {
    display: block;
}
table {
    border-collapse: collapse;
    width: 100%;
}
thead th{
    font-size: 1.3rem;
    background-color: #dddddd;
}
tr:hover {
        background-color: #dddddd;
}
td, th {
      border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
@media screen and (min-width: 900px) {
    .bar ul {
        display: flex;
        flex-direction: row;
    }
    .price-btn {
        display: none;
    }
}
</style>