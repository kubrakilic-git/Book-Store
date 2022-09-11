<template>
    <v-container>
      <div class="text-center">

        <v-chip  v-for="{id,name} in stores" :key="id"
          class="ma-5 stores"
          close
          color="#343a40"
          label
          text-color="white"
        >
          <router-link class="categories_name" :to="{name: 'shop', params: { id: id }}">
          <v-icon left>
            mdi-label
          </v-icon>
          {{name}}
          </router-link>
        </v-chip>
      </div>
        
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'StorePage',
      data(){
            return{
                stores:[],
            }
        },
        created(){
            console.log("calisti");
        },

        mounted() {
            axios.get('http://localhost:3000/stores').then(
                (res)=>{
                   
                const stores = res.data;
                this.stores = stores;
                
            })
        },
    }
  </script>
  