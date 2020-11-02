<template>
  <header>
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'Home' }"
          ><img src="../assets/img/loggor/harstuganlogo2vit.png" alt="logo"
        /></router-link>
      </div>
      <span id="responsive-btn">
        <i class="fas fa-bars" @click="toggleMenu"></i>
      </span>
      <ul class="menu">
        <li v-for="item in navItems" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <ul id="mobile-menu">
      <li v-for="item in navItems" :key="item.name" @click="toggleMenu">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navItems: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.navItems.push({
        name: route.name,
        path: route.path,
      });
    });
  },
  methods: {
    toggleMenu: () => {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.style.height === "0px";
      if (mobileMenu.style.height === "0px") {
        mobileMenu.style.height = "fit-content";
        mobileMenu.style.display = "flex";
      } else {
        mobileMenu.style.height = "0px";
        mobileMenu.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  background: var(--primary);
  padding: 1em;
  bottom: 0;
  color: white;
  flex-wrap: wrap;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  font-size: 1.2rem;
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
.logo a:hover {
  border-bottom: none !important;
}
a {
  color: var(--primary);
  text-decoration: underline;
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
    text-decoration: none;
  }
}
</style>
