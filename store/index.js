import { fetchCartItems } from "~/api"

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
export const state = () => ({
  cartItems : [],
})

export const mutations = {
  addCartItem(state, cartItem){
    const newCartItem = {
      ...cartItem,
      imageUrl : `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems){
    state.cartItems = cartItems
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({commit}){
    const {data} = await fetchCartItems()
    commit('setCartItems', data.map(item => ({
      ...item,
      imageUrl : `${item.imageUrl}?random=${Math.random()}`
    })))
  },
  // nuxt 앱이 실행될때 무조건 가장 먼저 실행됨
  // async nuxtServerInit(storeContext, nuxtContext){
  //   await storeContext.dispatch(FETCH_CART_ITEMS)
  //   // const {data} = await fetchCartItems()
  //   // storeContext.commit('setCartItems', data.map(item => ({
  //   //   ...item,
  //   //   imageUrl : `${item.imageUrl}?random=${Math.random()}`
  //   // })))
  // }
}