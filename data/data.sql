create TABLE if NOT EXISTS users(
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    created_at timestamp default now()
)