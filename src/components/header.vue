<template>
  <div class="M-header">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcom'
    }
  }
}
</script>
<style>
.M-header{
  background: #336699;
  height: 50px;
}
</style>
