show databases;

create database coderhouse;

create table coderhouse.users(
	id int not null auto_increment primary key,
	name varchar(100) not null,
	firstname varchar(100) not null,
	age int not null
);

select * from coderhouse.users;

insert into coderhouse.users (name, firstname, age) values ('Nicolas', 'Clos', 21);

insert into coderhouse.users (name, firstname, age) values ('Gianina', 'Carranzani', 23);

insert into coderhouse.users (name, firstname, age) values ('Mario', 'Sandoval', 24);

insert into coderhouse.users (name, firstname, age) values ('Hernan', 'Fernandez', 22);

insert into coderhouse.users (name, firstname, age) values ('Rene', 'Palenque', 28);

update users set age='30' where id='2';

update users set name='Gianina Lourdes' where id='2';

select * from users where name like '%Lourdes%';

select * from users where name like '%i%';

delete from users where id='1';

delete from users where age='30';

create table cars (
	id int auto_increment not null primary key,
	domain varchar(10) not null,
	userId int not null,
	foreign key (userId) references users(id)
);

select * from cars;

insert into cars (domain, userId) values ('aa111bb', '3');

insert into cars (domain, userId) values ('abc123', '4');

select * from users inner join cars on cars.userId=users.id;

alter table cars add model varchar(100);

update cars set model='2020' where id='1';

drop table cars;

drop database coderhouse;