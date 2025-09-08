use EsyaDatabase;

/* Topic 
	1. Join operation
    1. Inner jon
    2. Left join
    3. Right join
    4. Full outer join
    5. Cross join
*/


/*	Create Three table Users, Books, Orders*/

create table users (user_id int primary key, email varchar(50),names varchar(50));

alter table users alter column email varchar(50);

create table books (product_Id int primary key, title varchar(50), price float);

create table orders (order_no int primary key,user_id int , product_Id int ,
foreign key(user_Id) references users(user_Id), 
foreign key (product_Id) references books(product_Id));


/* Inserted Values in the tables*/

insert into users values (1,'GopalBhai','callmebhai@gmail.com'),
(2,'toxicmanjhi@gmail.com','Toxic Manjhi'),
(3,'kalajadu@gmail.com','SoumyDeep'),
(4,'vimalpanmasala@gmail.com','Jai Sai'),
(5,'ghostlaugh@gmail.com','Namitha');

select * from users;

insert into books values (101,'MSSQL',100),
(102,'Half Girlfriend',699),
(103,'Black Magic',700),
(104,'How to Marfa',2000),
(105,'How to Laugh',2001);

insert into orders values(401,1,101),(402,2,102),(403,2,103),(404,3,103),(405,3,104),(406,4,102),(407,5,105),(408,5,102);

/* Display the tables */

select * from users;
select * from orders;
select * from books;


/* query to fetch name_of_users, book-title and order_Id using join query)*/

select u.names, o.order_no , b.title from users as u inner join orders as o on u.user_id = o.user_id inner join books as b on b.product_Id = o.product_Id;

/* query to fetch name_of_users, book-title and order_Id using join query whose book price is maxm)*/

select u.names, o.order_no , b.title from users as u inner join orders as o on
u.user_id = o.user_id inner join books as b on b.product_Id = o.product_Id
where price = (select max(b.price) from books b);

