<template>
  <div class="root">
    <nav class="navbar">
      <input type="checkbox" id="nav-check">
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



      <label for="nav-check">
        <div class="hamburger-menu">
          <img src="../assets/newham.png" alt="menu">
        </div>
      </label>

      

    </nav>
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
 margin-right: 3.5rem;
 color: #21243D;
 font-size: 1rem;
 font-weight: 550;
}

.nav-anchor a.router-link-exact-active {
  color: #ffcc00;
}

.hamburger-menu {
    display: none;
    width: 50px;
    height: 50px;
}
.hamburger-menu img {
    width: 100%;
    height: 100%;
}
#nav-check {
    display: none;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 10px;
    box-sizing: border-box;
  }
  .hamburger-menu {
    display: block;
  }
  .nav-anchor {
    display: none;
  }
  nav #nav-check:checked ~ .nav-anchor {
    display: block;
    position: absolute;
    width: 100%;
    top: 64px;
    background-color: rgba(104, 200, 230, 0.7);
    right: 0;
    text-align: center;
    border-radius: 3px;
  }
  .anchor-tag {
    display: block;
    text-align: center;
    margin: 0;
    padding: 25px;
  }
}
</style>
