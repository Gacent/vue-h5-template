<template>
  <div class="container">
    <button @click="getInfo" v-if="list.length==0">获取cnode首页信息</button>
    <div class="cnode" v-if="list.length>0">
      <transition-group name="fade" appear>
        <div v-for="item in list" :key="item.id" class="list">
          <div class="title" @click="detail(item.id)">{{item.title}}</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import api from '@/api/apiList'
export default {
  components: {},
  data () {
    return {
      list: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    getInfo () {
      api.getInfo().then((res) => {
        this.list = res.data
      })
    },
    detail (id) {
      console.log(id)
    }
  },
  created () {},
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s cubic-bezier(.16,.67,.42,1.55);
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateY(100%) scale(3)
}
.container{
  .list{
    margin: 0 auto;
    .title{
      font-size: 18px;
      padding: 10px;
      border-radius: 15px;
      margin-bottom: 10px;
      cursor: pointer;
      border:1px solid #ccc;
    }
  }
}
</style>
