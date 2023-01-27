import { createStore } from 'vuex'
 const store = createStore({
    state () {
      return {
        data: JSON.parse(localStorage.getItem("quote")) || [],
        name:"Ahmad",
        single:{},
      }
    },
    mutations: {
      // Add quote
      add(state,payload) {
        state.data.push(payload)
        localStorage.setItem("quote",JSON.stringify(state.data))
      },

      // Get quote by ID
      getById(state,payload){
        state.single = state.data.filter(data => data.id === Number(payload))[0]
      },

      // Edit quote
      edit(state,payload){
        state.data = state.data.map(item =>{
            if(item.id === payload.id){
                return {...payload}
            }
            return item;
        })
        localStorage.setItem("quote",JSON.stringify(state.data))
      },

      // Delete quote
      delete(state,payload){
        state.data = state.data.filter((item) => item.id !== payload)
        localStorage.setItem("quote",JSON.stringify(state.data))
      },

    }
  })

  export default store;