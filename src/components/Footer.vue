<template>
  <div class="footer-container">
      <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023.7969478865018!2d15.037329716409777!3d59.51981318172589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c4567ddef2a77%3A0x65467cc777c67584!2sPr%C3%A4stgatan%205B%2C%20713%2031%20Nora!5e0!3m2!1ssv!2sse!4v1595247372627!5m2!1ssv!2sse" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div id="opening">
            <h2>Öppettider</h2>
            <table>
                <tbody>
                    <tr v-for="hour in hours" :key="hour.day">
                        <td>{{hour.day}}</td>
                        <td>{{hour.time}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Tel: 0587-100 34 <br> Prästgatan 5B, 713 31 Nora.</p>
            <span class="socials">
                <a href="https://www.instagram.com/harstugan/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/H%C3%A5rstugan-264806910204747/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            </span>
      </div>
        <div class="footer-info">
            <p>Copyright &copy; {{year}} | Utvecklad med <span id="heart"> &hearts;</span> av Alice &amp; Ludwig</p>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            year: '',
            hours: [
                {
                    day: 'Måndag - Fredag',
                    time: '09.30 - 18.00'
                },
                {
                    day: 'Lördag',
                    time: '09.00 - 13.00'
                },                
                {
                    day: 'Söndag',
                    time: 'Stängt'
                },                
            ]
        }
    },
    created() {
        this.year = new Date().getFullYear()
    }
}

</script>

<style scoped>
    .footer-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    #map, #opening {
    width: 100%;

    }
    #opening {
    display: flex;
    align-items: center;    
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1em 0px;
    }
    #opening p {
        text-align: center;
    }
.socials {
    display: flex;
    width: 100%;
    justify-content: center;
}
.socials i {
    color: var(--primary);
    margin: .5em;
    font-size: 1.5em;
}
iframe {
    width: 100%;
    height: 100%;
}
.footer-info {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footer-info img {
    width: 150px;
}
.footer-info p {
    padding: 10px;
}

#heart {
    color: var(--primary);
}
@media screen and (min-width: 900px) {
    #opening, #map {
        width: 50%;
    }
}
</style>