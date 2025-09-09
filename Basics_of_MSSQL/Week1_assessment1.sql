Create Database SmartmeterDatabase;

use SmartmeterDatabase;

create table Customers (customerId int primary key identity, Names varchar(50),Addresses varchar(300), Region varchar(50));

create table SmartMeterReadings (MeterId int primary key, customerId int, Locations varchar(100), installedDate date, 
ReadingDateTime time, EnergyConsumed float, foreign key (customerId) references Customers(customerId));


alter table smartmeterreadings alter column readingDatetime datetime;


insert into Customers values('Gopal Singh','UP','North'),
('Mantu','Jharkhand','East'),
('Tejas','Jharkhand','West'),
('Ankur','Bihar','South'),
('Faisal','Bihar','West');



select * from customers;


insert into SmartMeterReadings values( 1, 2, 'rooftop', '2024-02-24', '2024-02-24 10:00:00', 15.50), 
( 2, 1, 'rooftop', '2024-04-13', '2024-04-13 12:20:56', 49.50),
( 3, 3, 'basement', '2024-02-01', '2024-02-01 09:45:03', 38.20),
( 4, 5, 'rooftop', '2024-10-25', '2024-10-25 16:31:00', 31.89),
( 5, 4, 'basement', '2024-08-02', '2024-08-02 15:15:23', 56.23);

insert into SmartMeterReadings values( 6, 2, 'rooftop', '2024-03-24', '2024-02-24 10:00:00', 49.99);

select * from smartmeterreadings;


/* query 1 */

select meterId, ReadingDateTime, EnergyConsumed from smartmeterreadings where (energyConsumed between 10 and 50)
and (ReadingDateTime between '2024-01-01' and '2024-12-31') and installedDate < ('2024-06-30');

/* query 2 */

select customerId, avg(Energyconsumed) as avgEnergyconsumed, max(EnergyConsumed) as maxmEngeryconsumed
from SmartMeterReadings where readingDateTime between '2024-01-01' and '2024-12-31' group by customerId ;
/*
select cust.customerId, avg(smt.energyConsumed),  as avg_eneryconsumed from customers as cust join SmartMeterReadings as smt 
on cust.customerId = smt.customerId group by smt.customerId; */

