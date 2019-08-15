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
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
          title: '图片1',
          preview: '1'
        },
        {
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg',
          title: '图片2',
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
