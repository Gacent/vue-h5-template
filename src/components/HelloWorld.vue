<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>count:{{counts}}</p>
    <div v-for="item in doneTodos" :key="item.id">
      <p>{{item.id}}--{{item.text}}</p>
    </div>
    <p>doneTodosCount:{{doneTodosCount}}</p>
    <button @click="add(1)">store add</button>
    <button @click="add(10)">store add 10</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // computed: mapState({ // 辅助函数，一般计算属性中配合使用。
  //   counts (state) {
  //     return state.count
  //   }
  // }),
  computed: {
    ...mapState({ // 对象展开运算符形式
      counts (state) {
        return state.count
      }
    }),
    ...mapGetters([ // 对象展开运算符形式
      'doneTodos',
      'doneTodosCount'
    ])
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
