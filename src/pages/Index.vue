<template>
  <Layout>
    <Intro/>
    <About/>
    <Stack/>
    <Work/>
  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue'
import About from '~/components/About.vue'
import Stack from '~/components/Stack.vue'
import Work from '~/components/Work.vue'

export default {
  metaInfo: {
    title: 'I am Uayeb'
  },
    components: {
    Intro,
    About,
    Stack,
    Work,   
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
