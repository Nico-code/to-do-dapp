<template>
  <div class="logo">
    <a href="https://www.creative-tim.com" class="simple-text logo-mini">
      <div class="logo-image-small">
        <!-- <img src="../assets/img/logo-small.png"> -->
      </div>
    </a>
    <a href="/" class="simple-text logo-normal">
      Cripto Quiniela
    </a>
  </div>
  <div class="sidebar-wrapper">
    <ul class="nav">
      <router-link to="/" custom v-slot="{ isActive, navigate, href }">
        <li :class="{ 'active': isActive }">
          <a :href="href" @click="navigate">
            <i class="fas fa-ticket-alt"></i>
            <p>Loterias</p>
          </a>
        </li>
      </router-link>
      <router-link to="/market" custom v-slot="{ isActive, navigate, href }">
        <li :class="{ 'active': isActive }">
          <a :href="href" @click="navigate">
            <i class="fas fa-shopping-cart"></i>
            <p>Swap</p>
          </a>
        </li>
      </router-link>
      <router-link to="/collectable" custom v-slot="{ isActive, navigate, href }">
        <li :class="{ 'active': isActive }">
          <a :href="href" @click="navigate">
            <i class="fas fa-gift"></i>
            <p>Collectables</p>
          </a>
        </li>
      </router-link>
    </ul>
  </div>
</template>
