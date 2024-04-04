-- Write your PostgreSQL query statement below
select
    r.contest_id,
    round(
        (count(distinct r.user_id) * 100)::numeric/(select count(*) from Users)::numeric,
        2
    ) as percentage
from
    Register r
group by
    r.contest_id
order by
    percentage desc, r.contest_id asc
