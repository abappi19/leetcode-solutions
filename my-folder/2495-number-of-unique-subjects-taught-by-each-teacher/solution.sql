-- Write your PostgreSQL query statement below
select
    t1.teacher_id,
    count(
        t1.subject_id
    ) as cnt
from (
    select
        t.teacher_id,
        t.subject_id
    from
        teacher t
    group by
        t.teacher_id, t.subject_id
    ) as t1
group by
    t1.teacher_id
