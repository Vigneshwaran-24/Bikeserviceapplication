-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2022 at 03:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(1) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `wno` varchar(10) NOT NULL,
  `model` varchar(30) NOT NULL,
  `vno` varchar(15) NOT NULL,
  `date` date DEFAULT NULL,
  `general` varchar(20) DEFAULT NULL,
  `oil` varchar(20) DEFAULT NULL,
  `water` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `name`, `email`, `wno`, `model`, `vno`, `date`, `general`, `oil`, `water`) VALUES
(2, 'Nandhakumar', 'nandha@gmail.com', '8493843455', 'Z900', 'TN 33 NM 1293', '2022-02-03', 'General_Service', NULL, 'Oil change'),
(32, 'Hari', 'hari@gmail.com', '1234567890', 'Himalayan', 'TN 72 BS 123', '2022-06-17', 'General_Service', 'water wash', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(25, 'Admin', 'admin001@gmail.com', '1d235d1b9ae10ae482687411cf2dc04363ee0a9c408c054d2a51470b2aac1b895df46e5b94ffbf126abed9113c4d7849b155276b3e1bd124f198aa5d8180e57d7d2319105bca410c15bc47fba46d62e4e9b4c9bc2ab21a87b1c522d93f0ce1f970d45a45f39ddb36ba2d', '2022-05-21 10:29:02', '2022-05-21 10:29:02'),
(29, 'Vigneshwaran', 'saytovignesh9091@gmail.com', 'f5b26e777e5dd3487953f57460b73d0aa06fbd604e41a57562285567628f88d1729952d99c0fcf31c495632c566f7d6246921be3e7d93a12725309d45090cdb82b25f28b77d9a8abfc5322ecf7dab39f4bbadb0e6d422c295f5f626ea734ff260362441a46', '2022-05-24 10:05:17', '2022-05-24 10:05:17'),
(30, 'Nandha', 'nandha@gmail.com', 'f417e5c20c9096bf873c8c458d319d60ebd5a2988cf9d394384735ad8c41be254c545d157b2c7ed7692631b33967eebffffc00d712ef3f3a9e320ebe73762cba6e19a472c9a9bd00eec4faf922b2b5fea5011e7410096abe1b364a625da6d052bcae10eed8', '2022-05-24 12:07:20', '2022-05-24 12:07:20'),
(31, 'Hari', 'hari@gmail.com', 'de48e27c9dbd9e1966dff1f11a89a01f84722e171572d3d219230c98a3d18f4fdf0ed0e102ed6f6b8047941bc17f9ac2588f4ccd2538572def21a6a75b6a4d58d8eae4d1d14c764ef4b02a6cb26b9deadf8c6e6d0baaacbfb8a49ddd0fb52e62300b5f6b', '2022-06-01 16:21:06', '2022-06-01 16:21:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
