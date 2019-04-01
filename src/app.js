import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from '@src/redux/store'

import Index from '@src/pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/page2/page2',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff6100',
      navigationBarTitleText: '前端之最',
      navigationBarTextStyle: 'white',
      navigationStyle: 'default',
      backgroundColor: '#ffffff',
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
