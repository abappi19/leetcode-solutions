-- Write your PostgreSQL query statement below

select 
    a.activity_date as day,
    count(distinct a.user_id) as active_users
from
    activity a
where
    activity_date between ('2019-07-28'::date - 30) and '2019-07-28'::date
group by
    a.activity_date
