<template>
  <div>
  <header>
    <b-container fluid="md" class="bv-example-row">
      <b-row class="justify-content-md-center" >
        <h1 class="title"><NuxtLink to="/">Nuxt Shopping</NuxtLink></h1>
      </b-row>
      <!-- <h1>{{$route.name}} 페이지</h1>
        <NuxtLink to="/">홈페이지</NuxtLink>
        <NuxtLink to="/main">메인 페이지</NuxtLink>
        <NuxtLink to="/product">상품 페이지</NuxtLink> -->
    </b-container>
  </header>
      <Nuxt/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.title a{
    cursor: default;
    text-decoration: none;
}
.title a:hover{
  color: #007bff
}
</style>>