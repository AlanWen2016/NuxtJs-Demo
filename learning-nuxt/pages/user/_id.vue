
<template>
  <div class="container">
    <h1>Blog</h1>
    {{ posts }}
    
    <p>
      <NuxtLink to="/">
        Back to home page
      </NuxtLink>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('http://www.kuaidi100.com/query?type=yuantong&postid=11111111111')
      .then((res) => {
        return { posts: res.data }
      })
  },
  head: {
    title: 'List of posts'
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
