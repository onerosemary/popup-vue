# popup-vue

A Vue component to popup-vue
一个基于vue的弹窗组件



## 安装

```JS
npm install popup-vue -S
```

## 使用

```js
// ES6
import popupVue from 'popup-vue'
// require
var popupVue = require('popupVue')

Vue.use(popupVue)

// 或者直接使用script导入
<script src="./node_modules/vue/dist/popup-vue.js"></script>

// 作为组件的方式使用
<popup-vue></popup-vue>
```

### 配置

```html
   <popup-vue ref="box" w="200px" h="100px">
      我是弹窗中的内容...
    </popup-vue>
    methods: {
        clickFn(){
            this.$refs.box.isShow = true
        }
    }
```


### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| w       | 宽度 |String | 50%或者500px
| h       | 高度 |String | 50%或者500px
