### 在线 Demo
- 瀑布流 https://bestime.github.io/common/dist/#/water-fall

### 安装
`npm i jcy-common`

### 准备
- `css`预处理器需要`stylus`

### 使用
```
import 'jcy-common/vue/index.js' // 这个必需引入

import waterfall from 'jcy-common/vue/waterfall'
Vue.component(waterfall.name, waterfall)

import waterfallItem from 'jcy-common/vue/waterfall-item'
Vue.component(waterfallItem.name, waterfallItem)
```
> vue
  - [x] `waterfall` `waterfall-item` 瀑布流
  - [x] `Drawer` 抽屉，可作弹出层
  - [x] `Switch` 开关
  - [x] `Image` 图片