<template>
    <v-container>
        <b-row>
            <b-col lg="3"  v-for="item in books">
                <b-card bg-variant="dark" text-variant="white" class="card_book">
                    <div style="display: flex;align-items: center;">
                        <i aria-hidden="true" class="mdi mdi-book-multiple notranslate theme--light v-icon v-icon--left"></i>
                        <b-card-text>
                            {{item.name}}
                        </b-card-text>
                    </div>

                        <b-button  href="#" class="delete_btn" >
                        <i aria-hidden="true" class="mdi mdi-delete-empty notranslate theme--light delete_icon v-icon v-icon--left"></i>
                        Sil</b-button>
                </b-card>
            </b-col>
        </b-row>
        
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'HomePage',
      props:["categories"],
      data(){
            return{
                books:[],
            }
        },
        created(){
            console.log("calisti");
        },
        mounted() {
            axios.get('http://localhost:3000/books').then(
                (res)=>{
                const books = res.data;
                this.books = books;
            })
        },
    }
  </script>
  