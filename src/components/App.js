import React, { Component } from 'react';
import store from '@/store';
import Banner from './Banner';
class App extends Component {

  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(data)
      store.dispatch({
        type: 'changeProlist',
        data: data
      })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      console.log('b',data)
      store.dispatch({
        type: 'changeBannerlist',
        data: data
      })
    })
  }

  render () {
    console.log('a',store.getState())
    return (
      <div>
        1111
        {
          store.getState().bannerlist.map((item, index) => {
            return (<img key ={ index } src={ 'http://www.daxunxun.com' + item } />)
          })
        }
        {
          store.getState().prolist.map((item, index) => {
            return (<li key ={ index }>{ item.title }</li>)
          })
        }
      </div>
    )
  }
}

export default App;
