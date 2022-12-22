<template>
  <div>
    <p>메인 페이지입니다</p>
    <!-- <ProductList/> -->
     <div>
      <b-list-group>
        <b-list-group-item v-for="product in products" :key="product.id">
          {{product.name}}
          <b-img thumbnail fluid :src="product.imageUrl" :alt="product.name"></b-img>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Logo from '@/components/NuxtLogo.vue'
// import ProductList from '~/components/ProductList.vue'
export default {
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
      products : []
    }
  }, 
  async created(){
  }
}
</script>

<style>

</style>