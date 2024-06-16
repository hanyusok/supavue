<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>      
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/calldoctor">Call Doctor</RouterLink>
        <RouterLink to="/messagesfrom">Messages from</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
      </nav>
    </div>
  </header>

  <div class="content">
    <RouterView />
  </div>
 
</template>