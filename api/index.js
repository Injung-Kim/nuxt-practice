import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL : process.env.baseURL
})

function fetchProjects(){
  return instance.get(`/products`)
}

function fetchProductById(id){
  return instance.get(`/products/${id}`)
}

function fetchProductBykeyword(keyword){
  return instance.get(`/products`, {
    params : {
      // ?name_like=${keyword}`
      name_like : keyword
    }
  })
}
function fetchCartItems(cartItem){
  return instance.get('/carts')
}
function createCartItem(cartItem){
  return instance.post('/carts', cartItem)
}

export {
  fetchProjects,
  fetchProductById,
  fetchProductBykeyword,
  fetchCartItems,
  createCartItem
}