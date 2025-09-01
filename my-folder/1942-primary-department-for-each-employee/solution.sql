-- Write your PostgreSQL query statement below
select 
    e.employee_id, e.department_id
from
    Employee e
where
    e.primary_flag = 'Y'
or
    e.employee_id
in(
    select 
        e2.employee_id
    from
        Employee e2 
    group by
        e2.employee_id
    having 
        count(*) = 1
  )

