<template>
  <div class="container">
    <div class="title">{{article.title}}</div>
    <div class="content markdown-body" v-html="article.content"></div>
  </div>
</template>

<script>
import axios from 'axios'
// import {markdown} from 'markdown'
import showdown from 'showdown'
import { constants } from 'crypto';
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
        temp = this,
        converter = new showdown.Converter();
      axios.get('https://gwem.top/fengyi/data/articles.json')
      // axios.get('/api/articles.json')
        .then((res)=>{
          let articles = res.data.data,
            article = '';
          for(let i in articles){
            if(articles[i].id === _id){
              article = articles[i]
            }
          }
          let content = converter.makeHtml(article.content);
          let i = 1,
            imgPic = [];
          content.replace(/<img(.*?)>/gi,function(match,capture){
            let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i,
              img = capture.match(srcReg)[1];
            imgPic.push(img);
            content = content.replace(capture,' preview="1" data-pswp-uid="'+ i +'" preview-text="图片'+ i +'" '+ capture)
            i++;
          })
          console.log(imgPic);
          article.content = content
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
      font-size: 1.75em
      line-height: 2em
      margin-bottom: 1em
      white-space:nowrap
      overflow:hidden
      text-overflow:ellipsis
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
