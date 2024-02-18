// 初始化数据
const initData = {
  message: "你好啊!",
};

// 导出一个函数，该函数将被 Nuxt 服务器调用
export default function (req, res, next) {
  // 设置响应头部
  res.setHeader("Content-Type", "application/json");
  // 发送初始化数据作为 JSON
  res.end(JSON.stringify(initData));
}
