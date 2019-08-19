<template>
    <div class="container">
      <!-- 奉壹杂记 -->
      <transition-group name="fade" tag="div">
        <router-link tag="div" class="article" v-for="item of articleList" :key="item.id" :to="'/detail/'+item.id">
            <div class="cover_box">
              <img class="cover_pic" v-lazy="item.cover_pic">
            </div>
            <div class="title"><span class="item-title">{{item.title}}</span><span class="tags" v-for="tag of item.tags" :key="tag">{{tag}}</span></div>
            <div class="desc">{{item.desc}}</div>
            <div class="createTime cuIcon-time">{{item.created_at | formatDate}}</div>
        </router-link>
      </transition-group>
      <router-link tag="div" class="about-btn" :to="'/about'">关于</router-link>
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
    this.getArticles()
  },
  filters: {
    formatDate(value,formatString) {// 时间戳转换日期格式方法
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
    // background: #f1f1f1
    // background: #e54d42
    // background: #e1e1e1
  .container
    width: 100%
    padding:.5rem .288rem
    box-sizing:border-box
    display: flex
    flex-direction: column
    align-items: center
    // background: #e54d42
    // background: #F0F0F0
    background: #ffffff
    .article
      width:100%
      // padding: .1rem .2rem
      padding-bottom: .1rem
      box-sizing:border-box
      border-radius: .06rem
      background: #e54d42
      // background: #ffffff
      color: #ffffff
      // color: #333333
      font-size: .27rem
      line-height: .6rem
      margin-bottom: .4rem
      text-align: left
      box-shadow: 0 .05rem .3rem rgba(0,0,0,.5)
      .cover_box
        width: 100%
        height: 4.43rem
        overflow: hidden
        position: relative
        border-radius: .06rem
        box-sizing: border-box
        background: #ffffff
        img
          width: 100%
          position: absolute
          top:0
          bottom: 0
          margin: auto
      .title,.desc,.createTime
        width: 100%
        padding:0 .2rem
        box-sizing:border-box
      .desc
        line-height: .42rem
      .item-title
        font-size: .305rem
        // color: #000000
      .tags
        margin:0 .1rem
    .about-btn
      width: 1.18rem
      height: 1.18rem
      background: #ffffff
      position: fixed
      bottom: 1.8rem
      right: .5rem
      color: #e54d42
      font-size: .27rem
      text-align: center
      line-height: 1.18rem
      border-radius: 50%
      box-shadow:0px .2rem .3rem 0px rgba(0,0,0,0.4)
</style>
