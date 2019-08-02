import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Home from '@/components/Home'
import Slider from '@/components/Slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      title: '首页'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      title: 'vue官方页面(玩vuex)'
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      title: '个人捣鼓页(axios)'
    },
    {
      path: '/vue-concise-slider',
      name: 'Slider',
      component: Slider,
      title: '屏幕滑动实例'
    }
  ]
})
