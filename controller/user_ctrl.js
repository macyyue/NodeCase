import db from '../db/index.js'

// 使用 ES6 的按需导出语法，将 getAllUser 方法导出出去
export async function getAllUser(req, res) {
    // 使用 try...catch捕获Promise 异步任务中产生的异常错误，并在catch块中进行处理


    const [rows] = await db.query('select id, user_name, nickname from ev_users')
    res.send({
        status: 0,
        message: '获取用户列表数据成功',
        data: rows,
    })

}