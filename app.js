import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './router/user_router.js';
import { getAllUser } from './controller/user_ctrl.js';

const app = express();

// 允许来自任意来源的跨域请求
app.use(cors());

// 解析JSON请求体
app.use(bodyParser.json());
// 解析URL编码请求体
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/user', getAllUser);


app.use('/api', userRouter);
// 调用app.listen 方法，指定端口号并启动web服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
});