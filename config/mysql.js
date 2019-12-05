


//mysql配置文件
mysql = {

  host: "127.0.0.1", //这是数据库的地址

  user: "root", //需要用户的名字

  password: "123456", //用户密码 ，如果你没有密码，直接双引号就是

  database: "node1" //数据库名字

} //好了，这样我们就能连接数据库了

module.exports = mysql; //用module.exports暴露出这个接口，
// 安装后初次修改密码
// 1.运行“mysql -u root -p”，然后会提示输入密码，第一次修改直接点回次就行。
// 2.接下去按照步骤修改即可：
//     mysql>use mysql;
//     mysql> update user set password=password("123456") where user='root';  
//     mysql> flush privileges;
//     mysql> exit;      
// mysql 查看版本
// （1）select version();
// （2）status
// 1，启动
// [root@localhost /]# service mysqld start
// 2，重启
// service mysqld restart
// 3，停止
// mysqladmin shutdown