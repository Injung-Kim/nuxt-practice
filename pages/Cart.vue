<template>
  <b-container fluid="md" class="bv-example-row">
    <b-row>
      <h1>카트 페이지</h1>
    </b-row>
    <b-row>
      <b-btn> 구매하기 </b-btn>
    </b-row>
    <CartList/>
  </b-container>
</template>../components/CartList.vue
<script>
// import { FETCH_CART_ITEMS } from '~/store'
import CartList from '../components/CartList.vue'
export default {
   name : 'Cart',
   components : {CartList},
  //  async asyncData({store}){
  //   await store.dispatch(FETCH_CART_ITEMS)
  //  },
   data(){
     return{
     }
   },
   created(){},
   mounted(){},
   methods:{
    
  }
}
</script>
<style>
</style>