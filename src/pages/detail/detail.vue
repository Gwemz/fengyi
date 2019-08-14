<template>
  <div class="container">
    <div class="title">{{article.title}}</div>
    <div class="content" v-html="article.content"></div>
  </div>
</template>

<script>
import axios from 'axios'
import {markdown} from 'markdown'
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
          article.content = markdown.toHTML(article.content)
          temp.article = article
          // console.log(markdown.toHTML(article.content))
        })
    }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .container
    width: 100%
    padding: .5rem .28rem
    box-sizing: border-box
    display: flex
    flex-direction: column
    >div
      width: 100%
      line-height: .6rem
    .title
      font-size: .305rem  
    .content
      text-align: left
      >>> p, >>> img
        width: 100%
        margin-bottom: .2rem
      >>> p
        font-size: .27rem
        line-height: .6rem
        text-align: left
</style>
