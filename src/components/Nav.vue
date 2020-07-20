<template>
    <header>
        <nav>
            <div class="logo">
                <img src="../assets/img/loggor/harstuganlogo2vit.png" alt="logo" >
            </div>
            <span id="responsive-btn">
                <i class="fas fa-bars" @click="toggleMenu"></i>
            </span>
           <ul class="menu">
                <li><router-link :to="{name: 'Home'}">Hem</router-link></li>
                <li><router-link :to="{name: 'Prices'}">Priser</router-link></li>
                <li><router-link :to="{name: 'Gallery'}">Galleri</router-link></li>
            </ul>
        </nav>
            <ul id="mobile-menu">
                <li><router-link :to="{name: 'Home'}">Hem</router-link></li>
                <li><router-link :to="{name: 'Prices'}">Priser</router-link></li>
                <li><router-link :to="{name: 'Gallery'}">Galleri</router-link></li>
            </ul>
    </header>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return{

        }
    },
    methods: {
        toggleMenu: () => {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.style.height === "0px"
            if(mobileMenu.style.height === "0px"){
                mobileMenu.style.height = 'fit-content';
                mobileMenu.style.display = "flex"
            } else {
                mobileMenu.style.height = "0px";
                mobileMenu.style.display = "none";
            }
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    background:var(--primary);
    padding: 1em;
    color: white;
    flex-wrap: wrap;
}
#responsive-btn {
    display: inline-block;
    font-size: 1.2em;
    margin-top: 1em;
}
.logo {
    margin-top: 1em;
    width: 80px;
}
.logo img {
    display: inline-block;
    width: 100%;
}
#mobile-menu {
    margin: 0;
    flex-direction: column;
    list-style: none;
}
#mobile-menu li {
    padding: 1em;
}
.menu {
    display: none;
}

nav ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
nav ul li {
    margin: 0 1em;
}
a {
    color: var(--primary);
    font-weight: bold;
    text-decoration: none;
}
a:hover {
    border-bottom: 2px solid white;
}
@media screen and (min-width: 900px) {
    #responsive-btn {
        display: none;
    }
    nav ul {
        flex-direction: row;
        justify-content: space-around;
    }
    .logo {
        width: 7%;
    }
    .menu {
        display: flex;
    }
    #mobile-menu {
        display: none;
        height: 0px;
    }
    a {
    color: white;

}
    
}
</style>