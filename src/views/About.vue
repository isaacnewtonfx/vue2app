<template>
  <div class="about">

    <Header/>

    <div>
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>

    <h1>What is a Crypto-Currency?</h1>
    <p>
      It's a digital currency in which encryption techniques are used to regulate the generation of units of currency 
      and verify the transfer of funds, operating independently of a central bank.
    </p>

    <Footer/>

  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import store from '@/store'

export default {
  name: 'About',
  components: {Header, Footer},
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