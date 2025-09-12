use University;

select * from Employees;

-- Task 1 --
 select name from Students2024 union select name from Students2025;

  select name from Students2024 union all select name from Students2025;


-- Task 2 --

select upper(Name) from employees;

select lower(Name) from employees;

select substring(Name,1,3) from employees;

select replace(Department,'Finance','Account' ) from employees;

select concat(name,' ', Department) as New_column from employees; 

-- Task 3 --

select GETDATE();

select datediff(day, '2023-01-01', '2023-01-10') AS DaysDifference;

select dateadd(day, 7, '2025-01-01');

-- Task 4 --

select convert( varchar(10), getdate(),103) as todays_date;

select cast(123.456 as int) as intNum;

select department, case
	when department = 'IT' then 'Tech team'
	when department = 'HR' then 'Human Resources'
	else 'others'
	end as status
	from employees;
