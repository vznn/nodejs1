//user_status单一的user_status表SQL-Command
var user_status = {
    insertOne:'INSERT INTO user (name, password,email,phone,create_time,remark) VALUES(?,?,?,?,?,?)',
    selectOne:'select * from test',
};

//exports
module.exports = {
    user_status: user_status
};