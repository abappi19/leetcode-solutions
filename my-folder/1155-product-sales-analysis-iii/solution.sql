-- Write your PostgreSQL query statement below
select
    s1.product_id,
    s1.first_year,
    s2.quantity,
    s2.price
from
    (
        select 
            s.product_id,
            min(
                s.year
            )as first_year
        from
            sales s
        group by
            s.product_id
    ) as s1
inner join
    sales s2
on
    s1.product_id = s2.product_id
and
    s1.first_year = s2.year

