<template>
  <div>
    <h1>测试mysql连接：{{ message }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      // 从服务器端路由获取数据
      const { data } = await $axios.get("/api/getData");
      console.log("data: ", data);
      // 返回数据
      const { title } = data[0];
      return { message: title };
    } catch (error) {
      console.error("Error fetching data:", error);
      // 返回一个默认的错误消息
      return { message: "Failed to fetch data" };
    }
  },
};
</script>
