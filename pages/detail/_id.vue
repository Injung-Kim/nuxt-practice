<template>
  <b-container>
    <b-row>
      <h1>상세 페이지</h1>
    </b-row>
    <b-row align-v="center" class="mt-5">
      <!-- {{product}} -->
      <b-col>
      <b-img :src="product.imageUrl" :alt="product.name"/>
      </b-col>
      <b-col>
        <b-row >
          <b-col>name : {{product.name}}</b-col>
        </b-row>
        <b-row >
          <b-col>price : {{product.price}}</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
          <b-btn @click="addToCart"> 카트에 담기 </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {fetchProductById, createCartItem} from '@/api/index'
export default {
   name : '',
   components : {},
   setup(){},
   async asyncData({params}){
    const response = await fetchProductById(params.id)
    const product = response.data
    return {product}
   },
   data(){
     return{
     }
   },
   created(
   ){},
   mounted(){},
   methods:{
    async addToCart(){
      await createCartItem(this.product)
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
    },
  }
}
</script>
<style>
</style>