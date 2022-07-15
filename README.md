# Inventory-management-app-backend

For more info about app look for README in [inventory-managment-app-frontend](https://github.com/pawelglucklich/inventory-management-app-frontend).

Sample Database:

    -- phpMyAdmin SQL Dump
    -- version 5.1.1
    -- https://www.phpmyadmin.net/
    --
    -- Host: 127.0.0.1
    -- Generation Time: Jul 15, 2022 at 07:22 PM
    -- Server version: 10.4.22-MariaDB
    -- PHP Version: 8.1.2
    
    SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
    START TRANSACTION;
    SET time_zone = "+00:00";
    
    
    /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
    /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
    /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
    /*!40101 SET NAMES utf8mb4 */;
    
    --
    -- Database: `megak_inventory_management`
    --
    
    -- --------------------------------------------------------
    
    --
    -- Table structure for table `items`
    --
    
    CREATE TABLE `items` (
    `id` varchar(36) NOT NULL,
    `article` varchar(5) NOT NULL,
    `name` varchar(20) NOT NULL,
    `description` varchar(20) NOT NULL DEFAULT 'none',
    `quantity` int(6) UNSIGNED NOT NULL DEFAULT 1,
    `location` varchar(5) NOT NULL DEFAULT '00000'
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    
    --
    -- Dumping data for table `items`
    --
    
    INSERT INTO `items` (`id`, `article`, `name`, `description`, `quantity`, `location`) VALUES
    ('2729896c-0f38-4835-8e94-b24bcff7c8e2', 'L1234', 'newItem', 'boxes', 456, '0012C'),
    ('5f7343cd-4596-415d-8859-6d5bd1bcc070', '12345', 'Test5', 'none', 1, '00005'),
    ('90906460-c91c-4660-be23-0b2ee70ea0op', '00000', 'Test1', 'none', 100, '00000'),
    ('90906460-c91c-4660-be23-0b2ee70ea123', 'A6652', 'Test2', 'cartons', 50, '00000'),
    ('90906460-c91c-4660-be23-0b2ee70ea2ju', '00000', 'Test1', 'none', 100, '00002'),
    ('90906460-c91c-4660-be23-0b2ee70eaa89', 'A9753', 'Test3', 'boxes', 99999, '0122C'),
    ('90906460-c91c-4660-be23-0b2ee70eaae3', 'A0938', 'Test4', 'pallets', 1, '00000'),
    ('90906460-c91c-4660-be23-0b2ee70eaae4', 'L0000', 'default', 'none', 100, '00000'),
    ('90906460-c91c-4660-be23-0b2ee70eakls', '00000', 'Test1', 'none', 100, '00000'),
    ('90906460-c91c-4660-be23-0b2ee70eaoik', '00000', 'Test1', 'none', 100, '1078B'),
    ('90906460-c91c-4660-be23-0b2ee70easji', 'A0938', 'Test', 'none', 1, '00000'),
    ('c142289f-5d18-438c-8480-9c748f255766', '00000', 'aaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaa', 999999, '00000'),
    ('c95d86de-8d89-4f9c-9346-dcba5d50a824', 'L3789', 'DDG Beer', 'bottles', 30, '0215A'),
    ('d441eb2b-9c11-4a1a-bd1f-8f0d6174f922', 'L0001', 'Testing', 'none', 100, '00000'),
    ('f18287aa-18ea-4ac2-a2ff-4fa3b8fecd1f', 'Lghjy', 'akjsdhiasgd', 'none', 100, '00000');
    
    --
    -- Indexes for dumped tables
    --
    
    --
    -- Indexes for table `items`
    --
    ALTER TABLE `items`
    ADD PRIMARY KEY (`id`);
    COMMIT;
    
    /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
    /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
    /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
