<template>
  <div class="layout">
    <header>
      <NavBar />
    </header>
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components:{
    NavBar,
    Footer
  }
}
</script>

<style>



</style>
