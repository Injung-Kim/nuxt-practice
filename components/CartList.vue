<template>
  <b-row class="text-center mt-3" cols="2">
      <b-col v-for="(cartItem, index) in $store.state.cartItems" :key="index">
          <b-img thumbnail fluid :src="cartItem.imageUrl" :alt="cartItem.name"/>
          <p>{{cartItem.name}} ({{cartItem.price}})</p>
      </b-col>
    </b-row>
</template>

<script>
import { FETCH_CART_ITEMS } from '~/store'
export default {
  name: 'CartList',
  // 컴포넌트 내에서는 asyncData 함수 사용 불가능
  // async asyncData({store}){
  // await store.dispatch(FETCH_CART_ITEMS)
  // },
  async fetch(){
    await this.$store.dispatch(FETCH_CART_ITEMS)
     if (process.server) {
      console.log("ServerSide Rendering")
      // ...

    }

     if (process.client) {
       console.log("ClientSide Rendering")
      // ...

    }
  }
}
</script>

<style>

</style>