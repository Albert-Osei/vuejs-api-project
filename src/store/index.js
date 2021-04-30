import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'AliNews',
}); 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sources: [],
  },
  mutations: {
    setSources: (state, payload) => { state.sources = payload; },
  },
  getters: {
    allSources: (state) => state.sources,
  },
  actions: {
    fetchSources: ({ commit }, payload) => {
      const {category = ''} = payload;
      // const apiKey = process.env.VUE_APP_NEWS_KEY;
      try {
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=a78fc1df382b433a8342f9206c2edd92`)
          .then((res) => {
            console.log(res.data.articles);
            commit('setSources', res.data.articles);
          })
        } catch(error) {
          console.log(error)
        }
      
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
})
