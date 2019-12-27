const express = require('express');
const app = express();

// CORS設定。異なるURLからでも呼び出せるようにする
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
 });

 // jsonを使えるようにする
 app.use(express.json());

// サーバ起動
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// DBの代わり
const user = { id: 1, name: 'Taro'};

// GET /api/user
app.get('/api/user', (req, res) => {
   res.send(user);
});
