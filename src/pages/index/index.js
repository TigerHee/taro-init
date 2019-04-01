import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { update_state } from '@src/redux/actions'
import { AtButton } from 'taro-ui'

import './index.scss'


@connect((state) => ({
  commonData: state.common.commonData
}), (dispatch) => ({
  onUpdateState(val) {
    dispatch(update_state(val))
  }
}))

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onShareAppMessage() {
    return {
      title: 'web前端之最',
      path: '/index/index',
      imageUrl: 'https://avatars1.githubusercontent.com/u/15956567?s=460&v=4'
    }
  }

  setNewRedux = () => {
    const val = +new Date();
    this.props.onUpdateState({
      commonData: val
    })
  }

  goToPage2 = () => {
    Taro.navigateTo({
      url: '/pages/page2/page2'
    })
  }

  render() {
    return (
      <View className='index'>
        <View><Text>{this.props.commonData}</Text></View>
        <View className='index'>
          <AtButton type='primary' onClick={this.setNewRedux}>update redux</AtButton>
          <AtButton onClick={this.goToPage2} className='index-page2btn' type='secondary'>跳转到page2</AtButton>
        </View>
      </View>
    )
  }
}

export default Index
