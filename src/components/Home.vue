<template>
  <div class="home">
    <h1>菜单</h1>
      <div class="hello" @click="to('/Helloworld')">vue官方页面(玩vuex)</div>
      <div class="hello" @click="to('/About')">个人捣鼓页(玩axios)</div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  methods: {
    to (path) {
      this.$router.push({
        path: path
      })
    }
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
