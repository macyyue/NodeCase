import express from 'express'
// 从user_ctrl.js模块中按需导入 getAllUser 函数
import { getAllUser } from '../controller/user_ctrl.js'
// 创建路由对象
const router = new express.Router()
    // 挂载路由规则

router.get('/user', getAllUser)
    // 使用 ES6 的默认导出语法，将路由对象共享出去
router.post('/post', (req, res) => {
    const { name, age } = req.body;
    // 执行你的处理逻辑，例如保存到数据库等
    // 创建包含具体数据的对象
    const data = { name, age };
    // 返回响应
    res.json({ message: "post ok", data });

});
router.get('/get', (req, res) => {
    const { name, age } = req.query;
    // 执行你的处理逻辑，例如保存到数据库等
    // 创建包含具体数据的对象
    const data = { name, age };
    // 返回响应
    res.json({ message: "get ok", data });

});

export default router