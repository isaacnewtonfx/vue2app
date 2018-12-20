<template>
    <header>
      <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/coins/ethereum">Ethereum</router-link>|
      <router-link to="/coins/bitcoin">Bitcoin</router-link>|
      <router-link to="/coins/all">All</router-link>
    </div>
    </header>
</template>


<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>