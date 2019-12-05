var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');


/* GET api listing. */
router.get('/', function(req, res, next) {
    userDao.selectUserAction(req,res,next)
});

/*
 * 注册接口
 * http://127.0.0.1:3000/api/reg
 * user:用户名（必传）
 * password:密码
 * email:邮箱
 * mobile:手机号
 * create_time:创建时间
 * remark:备注
 */
router.get('/reg', function(req, res, next) {
    userDao.regUserAction(req,res,next)
});

module.exports = router;
