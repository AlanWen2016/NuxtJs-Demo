
<template>
  <nuxt-link to="/">user/id</nuxt-link>
</template>

<script>
export default {
     validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>
