import Vuex from 'vuex';
import { switchStatement } from 'babel-types';
const createStore = ()=>{
  return new Vuex.Store({
    state: {
      base_url: 'http://localhost:3000/',
      cart_count: 0,
      locales: ['ru', 'kz'],
      locale: 'ru'
    },
    getters: {
      cart_count:state=>{
        return state.cart_count;
      }
      
    },
    mutations: {
      INCREMENT_CART(state, value){
        state.cart_count = state.cart_count+value;
      },
      DECREMENT_CART(state, value){
        state.cart_count = value;
      },
      SET_LANG(state, locale){
        if(state.locales.indexOf(locale)!==-1){
          state.locale = locale
        }
      }
    },
    actions: {
      init(store){
        store.actions.increment_cart(store, parseInt(localStorage.getItem('cart_product_count')))
      },
      increment_cart(store, value){
        store.commit('INCREMENT_CART', value);
      },
      decrement_cart(store, value){
        store.commit('DECREMENT_CART', value);
      }

    }
  });
};

export default createStore