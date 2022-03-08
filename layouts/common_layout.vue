<template>
<div>
  <div class="nav sm:h-7">
    <div class="col-4 pt-1">
      <div>
        <img src="https://imgs.search.brave.com/KE9I2oxYjDKk6oJbIizMpBaI-yu8OW0cjuobcF_hR2Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY2F0L2NhdF9Q/Tkc1MDQ5OC5wbmc" style="height:3.5em; width:3em" alt="logo">
      </div>
    </div>
    <div class="mt-4 mr-5" style="margin-left: auto">
        {{ $store.state.email }}
        <v-btn  text @click="$auth.logout()">Logout</v-btn>
    </div>
  </div>
  <div><Nuxt /></div>
  
</div>
</template>

<script>
</script>

<style>
.nav{
  
  height: 8%;
  width: inherit;
  background-color: #20a7a7;
}
</style>

