<template>
  <div id="app">
    <button @click="clickFn">点击弹窗</button>
    <popup-vue ref="box" w="200px" h="100px">
      我是弹窗中的内容...
    </popup-vue>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {
    clickFn(){
      this.$refs.box.isShow = true
    }
  }
}
</script>

<style lang="scss">

</style>
