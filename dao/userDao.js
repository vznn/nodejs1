var db = require('../common/basicConnection');
var $sqlCommands = require('../common/sqlCommand');

/**
 * 增加用户Action
 */
function regUserAction(req, res, next) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.insertOne,
        [param.user, param.password, param.email, param.mobile, param.create_time, param.remark],
        function (err, result) {
            if (!err) {
                result = {
                    code: 200,
                    msg: 'successful'
                };
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}

function selectUserAction(req, res, next) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.selectOne, '',
        function (err, result) {
            if (!err) {
                result = {
                    code: 200,
                    msg: '查询成功',
                    result: result
                };
            } else {
                result = {
                    code: 404,
                    msg: '查询失败'
                };
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}

// exports
module.exports = {
    regUserAction: regUserAction,
    selectUserAction: selectUserAction
};