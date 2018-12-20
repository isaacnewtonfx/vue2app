<template>
  <div class="home">

    <Header/>

    <div>
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>


    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
  name: 'home',
  components: {
    HelloWorld, 
    Header,
    Footer
  },
  computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
}
</script>
