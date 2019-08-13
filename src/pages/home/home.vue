<template>
    <div class="container">
        <!-- 奉壹杂记 -->
        <div class="article">
            <div class="title"><span class="item-title">PC小程序公测</span><span class="tags">小程序</span></div>
            <div class="desc">8号小程序公测，配合开发工具版本：1.02.1908082，微信版本：微信测试版2.7.0.65 </div>
            <div class="createTime cuIcon-time">2019-08-12 11:21:00</div>
            <!-- <img src="../../../static/data/logo.png" alt=""> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  props: {
    list: Array
  },
  data(){
    return {
        articleList:[]
    }
  },
  methods:{
    getArticles(){
        axios.get('/api/articles.json')
        .then()
    }
  },
  mounted(){
    this.getArticles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  body
    background: #f1f1f1
  .container
    width: 100%
    padding:.5rem .288rem
    box-sizing:border-box
    display: flex
    flex-direction: column
    align-items: center
    .article
      width:100%
      padding: .1rem .2rem
      box-sizing:border-box
      font-size:.27rem
      border-radius: .06rem
      background: #e54d42
      color: #ffffff
      font-size: .27rem
      line-height: .6rem
      margin-bottom: .4rem
      text-align: left
      .desc
        line-height: .42rem
      .item-title
        font-size: .305rem
      .tags
        margin:0 .1rem
</style>
