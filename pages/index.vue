<template>
  <span>
  <SearchInput
  v-model="searchKeyword"
  @search="searchProducts"
  />
  <b-container fluid="md" class="bv-example-row">
    <b-row class="text-center mt-3" cols="2">
        <b-col v-for="product in products" :key="product.id" @click="moveToDetailpage(product.id)">
          <b-img thumbnail fluid :src="product.imageUrl" :alt="product.name"></b-img>
          <p>{{product.name}} ({{product.price}})</p>
        </b-col>
    </b-row>
    </b-container>
    <div class="cart-wrapper">
      <b-btn class="btn" variant="success" @click="moveToCart">장바구니 바로가기</b-btn>
    </div>
  </span>
</template>

<script>
import axios from 'axios'
import {fetchProductBykeyword} from '@/api/index'
import SearchInput from '@/components/searchInput.vue'
// import Logo from '@/components/NuxtLogo.vue'
// import ProductList from '~/components/ProductList.vue'
export default {
  components : {
    SearchInput
  },
  // components: { ProductList },
  // components : {
  //   Logo
  // }
  async asyncData(){
     const response = await axios.get('http://localhost:3000/products')
     const products = response.data.map((item) => ({
        ...item,
        imageUrl : `${item.imageUrl}?random=${Math.random()}`
     }))
     return {products}
  },
  data(){
    return {
      searchKeyword : ''
    }
  }, 
  async created(){
    },
  methods : {
    moveToDetailpage(id){
      this.$router.push(`detail/${id}`)

    },
    async searchProducts(){
      const response = await fetchProductBykeyword(this.searchKeyword)
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl : `${item.imageUrl}?random=${Math.random()}`
     }))
    },
    moveToCart(){
      this.$router.push('cart')
    }
  }
}
</script>

<style>
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 100px;
  right: 13rem;
}   
</style>