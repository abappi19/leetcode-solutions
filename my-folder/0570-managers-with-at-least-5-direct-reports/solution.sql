-- Write your PostgreSQL query statement below
select e2.name
from Employee e
inner join
    Employee e2
on
    e.managerId = e2.id
group by
    e2.id, e2.name
having
    count(e2.*) >= 5



