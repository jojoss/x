const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth'); // 确保路径正确
const statusRoute = require('./routes/status'); // 确保路径正确，这是新添加的路由

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

// 连接到MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 使用路由
app.use('/api/user', authRoute);
app.use('/api/status', statusRoute); // 注册状态路由

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});