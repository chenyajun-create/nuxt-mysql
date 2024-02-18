const mysql = require("mysql2");

export default function (req, res) {
  // 创建 MySQL 连接
  const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "127.0.0.1", //服务器地址
    user: "root",
    password: "123456", //密码
    database: "jackson_blog_dev",
  });

  // 执行 MySQL 查询
  connection.query(
    "SELECT * FROM jacksonblogbacked",
    function (err, results, fields) {
      // 关闭数据库连接
      connection.end();

      if (err) {
        console.error("Error querying database:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      // 发送查询结果作为 JSON 响应
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(results));
    }
  );
}
