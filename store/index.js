// export const state = () => ({
//   sidebar: false,
//   base_url: "http://127.0.0.1:8000/api/v1/"
// })

// export const mutations = {
//   toggleSidebar (state) {
//     state.sidebar = !state.sidebar
//   }
// }


import Vuex from 'vuex';
const createStore = ()=>{
  return new Vuex.Store({
    state: {
      base_url: 'http://localhost:3000/',
      cart_count: 0
    },
    getters: {
      cart_count:state=>{
        return state.cart_count;
      }
      
    },
    mutations: {
      INCREMENT_CART(state, value){
        state.cart_count = state.cart_count+value;
        console.log("Local Storage cart_product_count=" + localStorage.getItem('cart_product_count'))
        console.log("Количество продуктов в корзине равен  =  "+state.cart_count.toString());
      }

    },
    actions: {
      init(store){
        store.actions.increment_cart(store, parseInt(localStorage.getItem('cart_product_count')))
      },
      increment_cart(store, value){
        store.commit('INCREMENT_CART', value);
      }

    }
  });
};

export default createStore