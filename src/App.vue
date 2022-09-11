<template>
  <div id="app">
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
        <router-link class="logo" to="/">
          <img  src="../src/assets/books.svg" alt="">
          <v-toolbar-title>BOOKSTORES</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link class="logo" to="/store">
          <v-toolbar-title >Stores</v-toolbar-title>
        </router-link>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="{id,title} in categories" :key="id"  @click="index()" class="categories">
              <router-link class="categories_name" :to="{name: 'book', params: { id: id }}">
              {{ title }}
              </router-link>
            </v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>


  <v-footer padless class="footer">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>BOOKSTORES</strong>
    </v-col>
  </v-footer>
</div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return{
        categories:[],
    }
  },
  created(){
      console.log("calisti");
  },
  mounted() {
      axios.get('http://localhost:3000/categories').then((res)=>{
          this.categories = res.data;
      })

  },
  methods:{
    index:function(key){
      window.location.reload();
    },
  }
};
</script>
