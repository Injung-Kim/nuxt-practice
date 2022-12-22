<template>
  <b-container fluid="md" class="bv-example-row">
  <b-row class="justify-content-md-center mt-3">
    <b-col>
    </b-col>
    <b-col>
    <b-form-input
        type="text"
        :value="value"
        required
        @input="$emit('input', $event)"
      />
    </b-col>
    <b-col>
      <b-btn @click="$emit('search')">search</b-btn>
    </b-col>
  </b-row>
  </b-container>
</template>
<script>
export default {
   name : 'SearchInput',
   components : {},
  model : {

  },
  props:{
    value : {
      type:String,
      default : () => ''
    }
  },
   setup(){},
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