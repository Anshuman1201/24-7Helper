
create database Web;

create table Web.users(

    user_id int UNIQUE AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    phone_no varchar(10) UNIQUE ,
    email varchar(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(phone_no)
);


create table Web.category(

    cate_id int UNIQUE,
    cate_name VARCHAR(255),
    cate_desc VARCHAR(500),
    PRIMARY KEY(cate_id) 
);

create table Web.carpenters(

    carp_id int UNIQUE,
    cate_id int ,
    carp_name VARCHAR(255),
    carp_desc VARCHAR(500),
    carp_price float,
    status boolean,
    PRIMARY KEY(carp_id),
    foreign KEY(cate_id) references category(cate_id) 
);

create table Web.plumbers(

    plum_id int UNIQUE,
    cate_id int,
    plum_name VARCHAR(255),
    plum_desc VARCHAR(500),
    plum_price float,
    status boolean,
    PRIMARY KEY(plum_id),
    foreign KEY(cate_id) references category(cate_id) 
);

create table Web.electrician(

    elec_id int UNIQUE,
    cate_id int,
    elec_name VARCHAR(255),
    elec_desc VARCHAR(500),
    elec_price float,
    status boolean,
    PRIMARY KEY(elec_id),
    foreign KEY(cate_id) references category(cate_id) 
);

create table Web.labour(

    lab_id int UNIQUE,
    cate_id int,
    lab_name VARCHAR(255),
    lab_desc VARCHAR(500),
    lab_price float,
    status boolean,
    PRIMARY KEY(lab_id),
    foreign KEY(cate_id) references category(cate_id) 
)