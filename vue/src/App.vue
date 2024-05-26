<template>
  <Error>
      <Provider>
          <TheHeader></TheHeader>
          <router-view/>
        <TheFooter/>
      </Provider>
  </Error>
</template>


<script setup>
import Provider from "@/ui/Provider.vue";
import Error from "@/ui/Error.vue";
import TheHeader from "@/ui/layout/TheHeader.vue";
import TheFooter from "@/ui/layout/TheFooter.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
