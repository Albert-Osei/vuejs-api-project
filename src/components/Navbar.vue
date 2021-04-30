<template>
  <div class="navbar">
      <div class="nav-anchor">
        <router-link class="anchor-tag"
          :to="{ name: 'Home', params: { category: '' } }"
          >Home</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'Business', params: { category: 'business' } }"
          >Business</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'Entertainment', params: { category: 'entertainment' } }"
          >Entertainment</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'General', params: { category: 'general' } }"
          >General</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'Health', params: { category: 'health' } }"
          >Health</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'Science', params: { category: 'science' } }"
          >Science</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'Sports', params: { category: 'sports' } }"
          >Sports</router-link
        >
        <router-link class="anchor-tag"
          :to="{ name: 'Technology', params: { category: 'technology' } }"
          >Technology</router-link
        >
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd; 
}
.nav-anchor {
margin-left: 18rem;
}
.anchor-tag {
 margin-right: 7rem;
 color: #21243D;
 font-size: 1rem;
 font-weight: 550;
}

.nav-anchor a.router-link-exact-active {
  color: #ffcc00;
}
</style>
