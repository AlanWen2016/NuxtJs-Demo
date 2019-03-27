<template>
<div style="padding:30px">
    <el-tag type="success">这里是用户页面</el-tag>
    <el-tag><nuxt-link to="/">去首页</nuxt-link></el-tag>
</div>
</template>

<script>
export default {
     validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>
