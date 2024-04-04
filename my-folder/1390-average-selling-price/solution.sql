-- Write your PostgreSQL query statement below
select 
    p.product_id,
    coalesce(
        round(
                (sum(u.units * p.price)::numeric / sum(u.units))::numeric,
                2
            ),
        0
    ) as average_price
from
    Prices p
    
left join
    UnitsSold u
on
    u.product_id = p.product_id
and
    u.purchase_date between p.start_date and p.end_date
group by
    p.product_id

