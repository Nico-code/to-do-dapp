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
      <router-link to="/lottery" custom v-slot="{ isActive, navigate, href }">
        <li :class="{ 'active': isActive }">
          <a :href="href" @click="navigate">
            <i class="fas fa-ticket-alt"></i>
            <p>Loterias</p>
          </a>
        </li>
      </router-link>
      <router-link to="/futbol" custom v-slot="{ isActive, navigate, href }">
        <li :class="{ 'active': isActive }">
          <a :href="href" @click="navigate">
            <i class="fas fa-futbol"></i>
            <p>Partidos</p>
          </a>
        </li>
      </router-link>
    </ul>
  </div>
</template>
