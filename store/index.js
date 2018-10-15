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
      base_url: 'http://localhost:3000/'
    },
    getters: {
      
    },
    mutations: {

    },
    actions: {

    }
  });
};

export default createStore