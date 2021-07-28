-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 28, 2021 at 03:56 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_hillconplant`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_activity`
--

CREATE TABLE `tbl_activity` (
  `ac_id` int(10) NOT NULL,
  `ac_name` varchar(50) NOT NULL,
  `ac_site` varchar(50) NOT NULL,
  `ac_no` varchar(50) NOT NULL,
  `ac_unit` varchar(100) NOT NULL,
  `ac_code` varchar(50) NOT NULL,
  `ac_cn` varchar(50) NOT NULL,
  `ac_hm` varchar(50) NOT NULL,
  `ac_wo` varchar(50) NOT NULL,
  `ac_component` varchar(50) NOT NULL,
  `ac_job` varchar(50) NOT NULL,
  `ac_date` date NOT NULL,
  `ac_start` varchar(10) NOT NULL,
  `ac_finish` varchar(10) NOT NULL,
  `ac_adj` varchar(10) NOT NULL,
  `ac_active` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_activity`
--

INSERT INTO `tbl_activity` (`ac_id`, `ac_name`, `ac_site`, `ac_no`, `ac_unit`, `ac_code`, `ac_cn`, `ac_hm`, `ac_wo`, `ac_component`, `ac_job`, `ac_date`, `ac_start`, `ac_finish`, `ac_adj`, `ac_active`) VALUES
(1, 'Daumal', 'Testing', '12345', 'Bandung', '12345', 'testing', 'testing', 'testing', 'testing', 'testing', '2020-12-12', '12', '12', 'tetsing', 'tetsing'),
(2, 'Dadang', 'Testing', '12345', 'Bandung', '12345', 'testing', 'testing', 'testing', 'testing', 'testing', '2020-12-12', '12', '12', 'tetsing', 'tetsing');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `usr_id` int(5) NOT NULL,
  `usr_nama` varchar(50) NOT NULL,
  `usr_nip` varchar(50) NOT NULL,
  `usr_pass` varchar(50) NOT NULL,
  `usr_jabatan` varchar(50) NOT NULL,
  `usr_grade` varchar(50) NOT NULL,
  `usr_site` varchar(50) NOT NULL,
  `usr_ttl` varchar(50) NOT NULL,
  `usr_alamat` text NOT NULL,
  `usr_ttd` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`usr_id`, `usr_nama`, `usr_nip`, `usr_pass`, `usr_jabatan`, `usr_grade`, `usr_site`, `usr_ttl`, `usr_alamat`, `usr_ttd`) VALUES
(1, 'Aldhi', '1234567890', 'testing', 'Manager', 'G2', 'LOLAK', '1995-8-8', 'Bandung', '/ttd/am.jpg'),
(3, 'Pablo', '12345', '12345', 'Manager', 'S3', 'Test', '2020-12-12', 'Bandung', 'jpg'),
(4, 'Pablo', '12345', '12345', 'Manager', 'S3', 'Test', '2020-12-12', 'Bandung', 'jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_activity`
--
ALTER TABLE `tbl_activity`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`usr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_activity`
--
ALTER TABLE `tbl_activity`
  MODIFY `ac_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `usr_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
