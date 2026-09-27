<template>
  <div id="app">
    <!-- Bootswatch Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div class="container">
        <router-link class="navbar-brand font-weight-bold" :to="{ name: 'home' }">
          <i class="fas fa-cubes mr-2"></i>VueJS 3
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'blog' }">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'gallery' }">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Dynamic Route Viewport -->
    <main class="container">
      <router-view/>
    </main>

    <!-- Footer -->
    <footer class="container text-center text-muted py-4 mt-5 border-top">
      <p class="small mb-0">FIN-LAB-1: VueJS 3 Routing & Navigation Activity &copy; 2026 (Node v24 Ready)</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Active link highlighting in Vue Router 4 */
.router-link-exact-active,
.router-link-active {
  font-weight: 700;
  color: #ffffff !important;
  border-bottom: 2px solid #ffffff;
}
</style>