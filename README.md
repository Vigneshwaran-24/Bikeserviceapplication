#BIKECARE

This application is for owners of Bike service stations. It helps the owners to list all
the services we offer. Customers can choose one or more services to book
Example:
It is a service station and provides the following services:
- General service check-up
- Oil change
- Water wash

Customers can register for an account with their email address and mobile
number. They can choose a service. Book the service at a particular date.

Bike station owner:
- Should be able to create / edit / delete all his services and their details
- View a list of all bookings 
- View details of each booking

Customers:
- Should be able to register for an account with his email address and mobile
number
- Book a service at a particular date



FRONTEND:
  -HTML
  -CSS
  -BOOTSTRAP FRAMEWORK

BACKEND:
  -NODEJS

DATABASE:
  -MySQL

APPLICATIONS:
  -Xampp Control Panel
  -Browser
  -Code Editor



STEPS TO INITIATE:
    
    -Download Project
    -Install node.js
    -Install Dependencies
    

Create Database:

     CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
     USE `mydb`;

Create Table:
     
     For User:
		
		CREATE TABLE `users` (  `id` int(1) NOT NULL,  `name` varchar(255) NOT NULL,  `email` varchar(255) NOT NULL,  `password` varchar(255) NOT NULL,`created_at` datetime NOT NULL,  `updated_at` datetime NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1;
   

	For Bookings:

		CREATE TABLE `booking` (  `id` int(1) NOT NULL,  `name` varchar(30) NOT NULL,  `email` varchar(40) NOT NULL,  `wno` varchar(10) NOT NULL,  `model` varchar(30) NOT NULL,  `vno` varchar(15) NOT NULL,  `date` date DEFAULT NULL,  `general` varchar(20) DEFAULT NULL,  `oil` varchar(20) DEFAULT NULL,  `water` varchar(20) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


Steps to Run :

	In the Terminal  -  Type "npm start" for UI
Then

Go to "nodejs-mysql-CRUD" file and then type,

	In the Terminal  -  Type "node app.js" for DB

In the browser:
 
 	Type - "localhost:9091" for execution of Application

For Admin to view his/her bookings:
 	 
	Email:admin001@gmail.com
	Password:vignesh123
