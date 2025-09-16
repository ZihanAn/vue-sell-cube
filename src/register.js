import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from './components/header-detail/header-detail.vue'

// 这是为了把弹窗挂在到body下面进行展示，因为一般弹窗都是全屏的，挂在到body下面比较合适
// 这样就不需要在每个页面都引入这个弹窗组件了
createAPI(Vue, HeaderDetail)
