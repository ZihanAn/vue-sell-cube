<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <header-detail :seller="seller"></header-detail>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue'
import HeaderDetail from './components/header-detail/header-detail.vue'
import { getSeller } from './api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    VHeader,
    HeaderDetail
  },
  created() {
    // 获取商家信息
    this._getSeller()
  },
  mounted() {
  },
  methods: {
    _getSeller() {
      // 因为对axios做了封装，封装里面已经对值做了判断，所以这里面就不用判断errno的值了，肯定就是0
      getSeller().then(seller => {
        this.seller = seller
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
