use EsyaDatabase;

select * from books;
select * from orders;
select * from users;


select u.user_id,  u.names,b.title ,u.names , b.price,
row_number() over (partition by u.user_id order by b.price) as row_numbers,
rank() over (partition by u.user_id order by b.price) as ranks,
dense_rank() over (partition by u.user_id order by b.price) as dense_number
from users as u inner join orders as o on u.user_id = o.user_id
inner join books as b on o.product_id = b.product_Id ; 



SELECT 
    u.user_id,
    u.names,
    SUM(b.price) AS TotalSpent,
    RANK() OVER (ORDER BY SUM(b.price) DESC) AS RankNum,
    DENSE_RANK() OVER (ORDER BY SUM(b.price) DESC) AS DenseRankNum
FROM orders o
JOIN users u ON o.user_id = u.user_id
JOIN books b ON o.product_id = b.product_id
GROUP BY u.user_id, u.names;


