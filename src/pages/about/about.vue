<template>
  <div class="container">
    <img v-for="src in imgs" :src="src.url" :key="src.title" :preview="src.preview" :preview-text="src.title">
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    msg: String
  },
  data(){
    return {
      imgs: [
        {
          url: 'http://imgs.wdcorner.cn/cover_img01.jpg',
          title: '图片1',
          preview: '1'
        },
        {
          url: 'http://imgs.wdcorner.cn/cover_img02.jpg',
          title: '图片2',
          preview: '1'
        },
        {
          url: 'http://imgs.wdcorner.cn/cover_img03.jpg',
          title: '图片3',
          preview: '1'
        },
        {
          url: 'http://imgs.wdcorner.cn/cover_img04.jpg',
          title: '图片4',
          preview: '1'
        },
        {
          url: 'http://imgs.wdcorner.cn/cover_img05.jpg',
          title: '图片5',
          preview: '1'
        },{
          url: 'http://imgs.wdcorner.cn/cover_img06.jpg',
          title: '图片6',
          preview: '1'
        },
        {
          url: 'http://imgs.wdcorner.cn/cover_img07.jpg',
          title: '图片7',
          preview: '1'
        },{
          url: 'http://imgs.wdcorner.cn/cover_img08.jpg',
          title: '图片8',
          preview: '1'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .container
    width: 100%
    padding:.5rem .288rem
    box-sizing:border-box
    img
      max-width: 100%
      margin-bottom: .2rem
</style>
