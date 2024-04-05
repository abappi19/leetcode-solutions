select 
    round(
        avg(
            case when
                d2.order_date = d2.customer_pref_delivery_date
            then
                1
            else
                0
            end
        )::numeric * 100
        ,2
        ) as immediate_percentage
from
    (
        select 
            d.customer_id,
            min(d.order_date) as order_date,
            1 as static
        from
            Delivery d
        group by
            d.customer_id 
   ) as d1
inner join
    Delivery d2
on
    d1.customer_id = d2.customer_id
and
    d1.order_date = d2.order_date
group by
    d1.static
