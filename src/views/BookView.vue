<template>
  <book-page :key="bookComponent" />
</template>
  
<script>
import BookPage from '../components/BookPage'
let bookComponent = 0;
export default {
  name: 'Book',
  data() {
    return {
      bookComponent
    }
  },
  components: {
    BookPage,
  },
  methods: {
    index() {
      this.bookComponent += 1;
    }
  }
}
</script>
  