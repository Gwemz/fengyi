<template>
  <div>
    <div>文章详情页</div>
    <div>{{article.title}}</div>
    <div>{{article.content}}</div>
  </div>
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
      let _id = this.$route.params.id,
        temp = this;
      axios.get('/api/articles.json')
        .then((res)=>{
          let articles = res.data.data,
            article = '';
          for(let i in articles){
            if(articles[i].id === _id){
              article = articles[i]
            }
          }
          temp.article = article
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
