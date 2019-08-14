<template>
  <div>文章详情页</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data(){
    return {
      id: '',
      article: ''
    }
  },
  methods: {
    getDetailInfo(){
      console.log(this.$route.params);
      axios.get('/api/articles.json')
        .then((res)=>{
          console.log(res);
        })
    }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
