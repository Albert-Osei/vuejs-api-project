<template>
  <div class="root-div">
    <h1 class="logo-label">AliNews</h1>
    <Navbar />
    <div v-if="allSources && allSources.length != 0" class="grid-container1">
      <div v-for="(info, index) in allSources" :key="index" class="news-flash">
        <small class="media">{{ info.source.name }}</small>
        <h2 class="title">{{ info.title }}</h2>
        <p class="content">{{ info.content }}</p>
        <div class="flash-button-field">
           <a
          :href="info.url"
          target="_blank"
          rel="nonreferer noopener"
          class="flash-button"
          >Read more</a
          >    
        </div>
      </div>
    </div>
    <div v-else>
      Loading..
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    // HelloWorld
  },
  mounted() {
    this.loading = true;
    console.log(this.$route);
    const {
      params: { category },
    } = this.$route;
    this.fetchSources({ category });
  },
  computed: {
    ...mapGetters(["allSources"]),
  },
  methods: {
    ...mapActions(["fetchSources"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;600;700&display=swap");

::root {
  --dark-color: #21243d;
}

template {
  font-size: 62.5%; /* 10px */
}

.root-div {
  font-family: "Heebo";
  font-size: 1.4rem;
}
.logo-label {
  display: flex;
  justify-content: left;
  margin-left: 19rem;
  padding: 1.5rem 0;
  color: #ffcc00;
  font-weight: bold;
  font-size: 1.5rem;
}

.grid-container1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem 19rem 0 19rem;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
}

.news-flash {
  text-align: left;
  font-size: 1.4rem;
}

.media {
  padding: 0.8rem 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--dark-color);
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark-color);
}

.content {
  font-size: 1rem;
  font-weight: 400;
  color: var(--dark-color);
}

.flash-button {
  margin-left: 1rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}
.flash-button-field {
  width: 6rem;
  height: 2.3rem;
  background: #ffcc00;
  border: none;
  border-radius: 0.3rem;
}

@media screen and (max-width: 768px) {
  .grid-container1 {
    grid-template-columns: 1fr;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0rem;
  }

}
</style>
