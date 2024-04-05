-- Write your PostgreSQL query statement below

select
    -- a1.static,
    -- a1.player_id,
    round(
        avg(
            case when
                a2.event_date is not null
            then
                1
            else
                0
            end
        )::numeric
        ,2
    ) as fraction
from
    (
        select
            a.player_id,
            min(
            a.event_date 
            ) as first_login
        from
            activity a
        group by
            a.player_id
    )as a1
left outer join 
    activity a2
on
    a1.player_id = a2.player_id
and
    a1.first_login + 1 = a2.event_date 

