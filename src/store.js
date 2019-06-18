import { createStore } from 'redux';

const reducer = (state = {
  bannerlist:[],
  prolist:[]
}, action) => {
  const { type, data } = action
  switch (type) {
    case 'changeProlist':
      state.prolist = data;
      return state;
    case 'changeBannerlist':
      state.bannerlist = data;
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store;