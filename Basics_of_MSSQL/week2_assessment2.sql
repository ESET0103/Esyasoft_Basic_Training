use EsyaDatabase;

/* query 1*/
users, books ,orders

select * from books;
select * from users;
select * from orders;

select u.names, b.title, o.order_no from users as u inner join orders as o on u.user_id = o.user_id
inner join books as b on o.product_id = b.product_Id; 


/* 2*/

select count(*) as total_no_of_orders from orders;

/*query 3*/

select u.names, b.title from users as u inner join orders as o on u.user_id = o.user_id
inner join books as b on o.product_id = b.product_Id where b.title = 'Black Magic'; 

/*query 4*/

select distinct b.title ,u.names from users as u inner join orders as o on u.user_id = o.user_id
inner join books as b on o.product_id = b.product_Id ; 

/*query 5*/

select u.names, sum(b.price) as total_price from users as u inner join orders as o on u.user_id = o.user_id
inner join books as b on o.product_id = b.product_Id group by u.names; 


/*query 6*/

select u.names ,max(count(o.order_no)) as max_book from users as u inner join orders as o on u.user_id = o.user_id
inner join books as b on o.product_id = b.product_Id group by u.names order by max_book desc ;

/*query 7*/

select max(price) as max_price, min(price) as min_price from books;

/*query 8*/

select title from books where price = (select max(price) from books);

/*query 9*/

select title from books where price = (select min(price) from books);

/*query 10*/

select top(2) * from books order by product_id;