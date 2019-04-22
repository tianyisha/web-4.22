var express = require('express');
var router = express.Router();
var Mongo = require('mongodb-curd');
var db = "record";
var col_pay = "pay";
var col_income = "income";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//添加支出
router.post('/api/addpay', function(req, res, next) {
    Mongo.insert(db, col_pay, req.body, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "添加支出失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "添加支出成功",
                data: result

            })
        }
    })
});
//添加收入
router.post('/api/addincome', function(req, res, next) {
    Mongo.insert(db, col_income, req.body, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "添加收入失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "添加收入成功",
                data: result

            })
        }
    })
});
//查询支出
router.post('/api/getpay', function(req, res, next) {
    let id = req.body.id;
    Mongo.find(db, col_pay, { "_id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "查询支出失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "查询支出成功",
                data: result

            })
        }
    })
});
//查询收入
router.post('/api/getincome', function(req, res, next) {
    let id = req.body.id;
    Mongo.find(db, col_income, { "_id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "查询收入失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "查询收入成功",
                data: result

            })
        }
    })
});
//删除支出
router.post('/api/delpay', function(req, res, next) {
    let id = req.body.id;
    Mongo.remove(db, col_pay, { "_id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "删除支出失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "删除支出成功",
                data: result

            })
        }
    })
});
//删除收入
router.post('/api/delincome', function(req, res, next) {
    let id = req.body.id;
    Mongo.remove(db, col_income, { "_id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "删除收入失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "删除收入成功",
                data: result

            })
        }
    })
});
//编辑支出
router.post('/api/xiugaipay', function(req, res, next) {
    let req = req.body;
    let id = req.body.id;
    delete req.id;
    Mongo.remove(db, col_pay, [{ "_id": id }, req], function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "编辑支出失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "编辑支出成功",
                data: result

            })
        }
    })
});
//编辑收入
router.post('/api/xiugaiincome', function(req, res, next) {
    let req = req.body;
    let id = req.body.id;
    delete req.id;
    Mongo.remove(db, col_income, [{ "_id": id }, req], function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "编辑收入失败"
            })
        } else {
            res.json({
                code: 1,
                msg: "编辑收入成功",
                data: result

            })
        }
    })
});
module.exports = router;