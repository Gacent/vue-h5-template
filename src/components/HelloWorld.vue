<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>count:{{counts}}</p>
    <button @click="add(1)">store add</button>
    <button @click="add(10)">store add 10</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    counts () {
      return this.$store.state.count
    }
  },
  methods: {
    add (index) {
      this.$store.dispatch('increment', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
