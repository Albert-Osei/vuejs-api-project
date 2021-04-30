<template>
 <div class="root-div">
    <h1 class="logo-label">AliNews</h1>
    <Navbar />
    <div v-if="allSources && allSources.length != 0" class="grid-container1">
      <div v-for="(info, index) in allSources" :key="index" class="news-flash">
        <small class="media">{{ info.source.name }}</small>
        <h2 class="title">{{ info.title }}</h2>
        <p class="content">{{ info.content }}</p>
        <a :href="info.url"  target="_blank" rel="nonreferer noopener" class="flash-button">Read more</a>
      </div>
    </div>
    <div v-else>
      Loading..
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'General',
    components: {
        Navbar
    },
    mounted() {
    console.log(this.$route);
    const { params : { category } } = this.$route
    this.fetchSources({category})
  },
  computed: {
    ...mapGetters(['allSources']),
  },
  methods: {
    ...mapActions([
      'fetchSources'
    ])
  }

}
</script>

<style>

</style>