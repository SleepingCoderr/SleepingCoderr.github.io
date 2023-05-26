CREATE DATABASE library_management_system;

CREATE TABLE  Issue_book (
        Student_ID char(11) NOT NULL, 
        Student_Name varchar(50) NOT NULL,
		book_Name varchar(50) NOT NULL,
        book_ISBN varchar(50) NOT NULL,
         PRIMARY KEY (Student_ID) 
);

CREATE TABLE  Return_book (
        Student_ID char(11) NOT NULL, 
        book_ISBN varchar(50) NOT NULL,
         PRIMARY KEY (Student_ID) 
);