<template>
  <div class="home">
    <h1>菜单</h1>
    <div class="hello" v-for="item in setRouters" :key="item.name" @click="to(item.path)">{{item.title}}</div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {
    setRouters: {
      get (state) {
        return this.$store.state.allRouters
      },
      set (value) {
        this.$store.dispatch('setAllRouters', value)
      }
    }
  },
  methods: {
    to (path) {
      this.$router.push({
        path: path
      })
    }
  },
  mounted () {
    console.log(this.$router.options.routes) //  获取所有配置的路由信息
    this.setRouters = this.$router.options.routes
  }
}
</script>
<style lang="less" scoped>
.home{
  .hello{
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 20px
  }
}
</style>
