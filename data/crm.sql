#设置默认编码
set names utf8;
#创建名为tedu的数据库
drop database if exists tedu;
create database tedu charset=utf8;
#进入tedu库
use tedu;
#创建user表
create table user(
    uid int primary key auto_increment,
    uname varchar(32),
    pwd varchar(32),
    email varchar(11),
    isAdmin int,
    dept varchar(32)
);
insert into user values(null,"张三",
"1234","dxm@qq.com",1,"教学部");
insert into user values(null,"李四",
"1234","lidg@qq.com",0,"咨询部");