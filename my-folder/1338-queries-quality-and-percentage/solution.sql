-- Write your PostgreSQL query statement below
select
    q.query_name,
    round(
        avg(
            q.rating::numeric/q.position::numeric
        )::numeric
        ,2
    ) as quality,
    round(
        avg(
            case when 
                q.rating < 3 
            then 
                1
            else 
                0
            end
        ) * 100
        ,2
    )::numeric as poor_query_percentage
from
    Queries q
where 
    q.query_name is not null
group by
    q.query_name
