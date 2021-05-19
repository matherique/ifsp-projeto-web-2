create table if not exits user (
  id serial not null primary key,
  name varchar(100) not null,
  email varchar(100) not null, 
  username varchar(100) not null, 
  password varchar(64) not null, 
  created_at timestamp default CURRENT_TIMESTAMP,
  updated_at timestamp default CURRENT_TIMESTAMP
);

create table if not exits contry (
  id serial not null primary key,
  name varchar(100) not null,
  code varchar(3) not null,
  region varchar(100) not null,
  created_at timestamp default CURRENT_TIMESTAMP,
  updated_at timestamp default CURRENT_TIMESTAMP
);

create table if not exits indicator(
  id serial not null primary key,
  code varchar(10) not null,
  name varchar(100) not null,
  note text,
  source_organization text,
  created_at timestamp default CURRENT_TIMESTAMP,
  updated_at timestamp default CURRENT_TIMESTAMP
);


create table if not exits indicator_data(
  country_id int not null references country(id),
  indicator_id int not null references indicator(id),
  value double precision not null,
  year int4 not null,
  created_at timestamp default CURRENT_TIMESTAMP,
  updated_at timestamp default CURRENT_TIMESTAMP
);

create table if not exits log (
  user_id int not null references user(id),
  indicator_id int not null references indicator(id),
  created_at timestamp default CURRENT_TIMESTAMP,
  updated_at timestamp default CURRENT_TIMESTAMP
);
