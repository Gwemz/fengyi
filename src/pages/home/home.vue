<template>
    <div class="container">
      <!-- 奉壹杂记 -->
      <router-link tag="div" class="article" v-for="item of articleList" :key="item.id" :to="'/detail/'+item.id">
        <div class="title"><span class="item-title">{{item.title}}</span><span class="tags" v-for="tag of item.tags" :key="tag">{{tag}}</span></div>
        <div class="desc">{{item.desc}}</div>
        <div class="createTime cuIcon-time">{{item.created_at | formatDate}}</div>
      </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
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
      let temp = this;
      // axios.get('/api/articles.json')
      axios.get('https://gwem.top/fengyi/data/articles.json')
      .then((res)=>{
        let data = res.data;
        temp.articleList = data.data;
        // console.log(data.data);
      })
    }
  },
  mounted(){
  // created(){
    this.getArticles()
  },
  filters: {
    formatDate: function (value,formatString) {// 时间戳转换日期格式方法
      formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
      value = value * 1000  //将秒数时间戳转换为毫秒时间戳
      return moment(value).format(formatString)
    }
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
