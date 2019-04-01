import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar, AtButton } from "taro-ui"

import './page2.scss'

class Page2 extends Component {

  config = {
    navigationBarTitleText: 'page2'
  }

  onShareAppMessage() {
    return {
      title: 'web前端之最',
      path: '/index/index',
      imageUrl: 'https://avatars1.githubusercontent.com/u/15956567?s=460&v=4'
    }
  }

  goToPage1 = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  render() {
    return (
      <View className='page2'>
        <AtCalendar />
        <AtButton onClick={this.goToPage1} className='index-page2btn' type='secondary'>跳转到index</AtButton>
      </View>
    )
  }
}

export default Page2
