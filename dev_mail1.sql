-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 26, 2023 at 09:01 AM
-- Server version: 8.0.32-0ubuntu0.22.04.2
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dev_mail1`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `accessStatusId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `access_access_access_option`
--

CREATE TABLE `access_access_access_option` (
  `id` varchar(36) NOT NULL,
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `accessAccessOptionId` varchar(255) NOT NULL,
  `accessId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `access_access_option`
--

CREATE TABLE `access_access_option` (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `accessOptionId` varchar(255) NOT NULL,
  `accessId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `access_option`
--

CREATE TABLE `access_option` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `defaultValue` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isRequired` tinyint NOT NULL DEFAULT '0',
  `isMultiline` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `access_status`
--

CREATE TABLE `access_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `regionId` varchar(255) NOT NULL DEFAULT '',
  `cityStatusId` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city_city_city_option`
--

CREATE TABLE `city_city_city_option` (
  `id` varchar(36) NOT NULL,
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cityCityOptionId` varchar(255) NOT NULL,
  `cityId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city_city_option`
--

CREATE TABLE `city_city_option` (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cityOptionId` varchar(255) NOT NULL,
  `cityId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city_option`
--

CREATE TABLE `city_option` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `defaultValue` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isRequired` tinyint NOT NULL DEFAULT '0',
  `isMultiline` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `city_status`
--

CREATE TABLE `city_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `regionId` varchar(255) NOT NULL DEFAULT '',
  `countryStatusId` varchar(255) NOT NULL DEFAULT '',
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `country_country_country_option`
--

CREATE TABLE `country_country_country_option` (
  `id` varchar(36) NOT NULL,
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `countryCountryOptionId` varchar(255) NOT NULL,
  `countryId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `country_country_option`
--

CREATE TABLE `country_country_option` (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `countryOptionId` varchar(255) NOT NULL,
  `countryId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `country_option`
--

CREATE TABLE `country_option` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `defaultValue` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isRequired` tinyint NOT NULL DEFAULT '0',
  `isMultiline` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `country_status`
--

CREATE TABLE `country_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `letter`
--

CREATE TABLE `letter` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `letterStatusId` varchar(255) NOT NULL DEFAULT '',
  `templateId` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `subject` varchar(255) NOT NULL,
  `textPart` varchar(255) NOT NULL,
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `envKey` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `letter`
--

INSERT INTO `letter` (`id`, `userId`, `letterStatusId`, `templateId`, `name`, `description`, `subject`, `textPart`, `isDeleted`, `isNotDelete`, `createdAt`, `updatedAt`, `envKey`) VALUES
('happ-mail-letter-base-recovery', 'happ-sso-user-admin', 'happ-mail-letter-status-active', 'happ-mail-template-base-recovery', 'Base recovery', 'Base recovery.', 'Hello', 'Password recovery', 0, 1, '2023-04-19 03:37:14', '2023-04-19 03:37:14', 'HAPP_SSO_USER_ADMIN_HAPP_LETTERSERVICE_HAPP_MAIL_LETTER_BASE_RECOVERY'),
('happ-mail-letter-base-registration', 'happ-sso-user-admin', 'happ-mail-letter-status-active', 'happ-mail-template-base-registration', 'Base registration', 'Base registration.', 'Hello', 'Successful registration', 0, 1, '2023-04-19 03:38:04', '2023-04-19 03:38:04', 'HAPP_SSO_USER_ADMIN_HAPP_LETTERSERVICE_HAPP_MAIL_LETTER_BASE_REGISTRATION');

-- --------------------------------------------------------

--
-- Table structure for table `letter_letter_letter_option`
--

CREATE TABLE `letter_letter_letter_option` (
  `id` varchar(36) NOT NULL,
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `letterLetterOptionId` varchar(255) NOT NULL,
  `letterId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `letter_letter_option`
--

CREATE TABLE `letter_letter_option` (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `letterOptionId` varchar(255) NOT NULL,
  `letterId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `letter_option`
--

CREATE TABLE `letter_option` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `defaultValue` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isRequired` tinyint NOT NULL DEFAULT '0',
  `isMultiline` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `letter_status`
--

CREATE TABLE `letter_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `letter_status`
--

INSERT INTO `letter_status` (`id`, `userId`, `envKey`, `name`, `description`, `isNotDelete`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
('happ-mail-letter-status-active', 'happ-sso-user-admin', 'HAPP_SSO_USER_ADMIN_HAPP_LETTERSTATUSSERVICE_HAPP_MAIL_LETTER_STATUS_ACTIVE', 'Active', 'Letter is active.', 1, 0, '2023-04-19 03:33:40', '2023-04-19 03:33:40');

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `regionStatusId` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `region_option`
--

CREATE TABLE `region_option` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `defaultValue` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isRequired` tinyint NOT NULL DEFAULT '0',
  `isMultiline` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `region_region_option`
--

CREATE TABLE `region_region_option` (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `regionOptionId` varchar(255) NOT NULL,
  `regionId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `region_region_region_option`
--

CREATE TABLE `region_region_region_option` (
  `id` varchar(36) NOT NULL,
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `regionRegionOptionId` varchar(255) NOT NULL,
  `regionId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `region_status`
--

CREATE TABLE `region_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `reportStatusId` varchar(255) NOT NULL DEFAULT '',
  `letterId` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `action` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id`, `userId`, `reportStatusId`, `letterId`, `email`, `action`, `content`, `createdAt`) VALUES
('095fa601-b1ee-43b8-98f4-2094406724f7', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$6AO7/coNe2.lvL//Go60weNqDv8QIZKM8eJbnLXXk48J2DhuBhbPe\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkVS9xb3FFcmY5QW91SVdRenYya3VDT3N5YWdSYWhDaGYzZnZPUHRraS40QUoyUEsvVEFzaTYifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:07:58'),
('0ffe81d2-044b-4c93-8be5-f4c1544dfc80', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$EBB9ZaD.PMc27jxE6.Rf6OaOVCXk0FLHHLI0YyyO5InwphZkSxckG\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkRTM0a24ydGV1MUl2NHhEV0Y0N0IuT0ZOejlFRkIya1VCMVNuRFZGc2NjczhXaHU1b3BOdDIifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 04:54:36'),
('17222dc5-2c32-4d87-87a2-14ec56bcf74d', 'happ-sso-user-admin', 'mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"7ea3c369-f28e-4a9e-8b3a-97c015b1ccf5\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$/8J0YiIjV.YC1xV/IC1HO./LePTBfBHqzc.UxJh0lM84NzxycDZVy\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkOGR1L25ObXJEalMvMHNyWmZNOGNYdXdUSzYzUDB5bmc5MXlpc2ZYWWNsMmhHQkpUdlFyOFMifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 05:49:42'),
('3357691e-e323-4ff1-b58a-a789d5a3bf78', 'happ-sso-user-admin', 'happ-mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"5d86a3d4-128c-4a95-8667-0f897c485172\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$LReSbn4gke3nrluhgcyGzOr5.BFV2aKn/AIviEMyalU.HVM7VDAKq\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkdVptOTZFc25IQnNzZDMvbTJRQ1JRdWZaUUYuem5LUDVENTZZOVk1RVJBRmdERTFZVU9lbDYifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 06:43:01'),
('3791670a-e0f0-42fa-b489-c756d40c692e', 'happ-sso-user-admin', 'happ-mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"41bd553b-1ff5-4d16-8532-ac3cac530401\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$SlrqUIDAbdT4KzM2SU2jq.SlBxCIrSTFqmehJ/cMxrXaZPfhbN4xK\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkWHc2bnB3UktQbElvNWtCSC5Rd0pqdTRsY3BzZHBybWlKWHdoL0hDbUVZVVN4LzNJc00zRG0ifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 06:46:24'),
('3e8543da-7e06-47e1-879b-6963afa14701', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$RBe8BfIyY65AFVmg2HFTx.rOmDDvwSMLd4UPJpqs0.q3iVgcKRcaa\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkblRZQUpjLk16NUVCR0pLbXJ5bkxVT3RVcGhSeTk2V3ZNU0I1NjlYYlg2S3drL3RYaHEvZWEifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 04:56:23'),
('41bd553b-1ff5-4d16-8532-ac3cac530401', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$SlrqUIDAbdT4KzM2SU2jq.SlBxCIrSTFqmehJ/cMxrXaZPfhbN4xK\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkWHc2bnB3UktQbElvNWtCSC5Rd0pqdTRsY3BzZHBybWlKWHdoL0hDbUVZVVN4LzNJc00zRG0ifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 06:46:23'),
('4a4591a4-c012-40c4-9fd5-75c95126b503', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$Wt38kxwbLIYy4qpaBkjaw.Cfmtt5ToPUtrf/HpQn7YQYDjvYtMF2G\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkQVk2MTJreXFhVGdqdEhYTGtrMGFYT3hUY1RPT2t2VFlJeVRCWS9IbEdCblJMT0dPdGlIbzIifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:41:33'),
('4beef0e1-4f66-40cc-9a7d-b1b5509af5ad', 'happ-sso-user-admin', 'happ-mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"7ba462c8-6dff-47f0-a8a8-6e30f50f9859\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$zHD2iAMQjXKgvdVc63LIEO0Pb2HW5orudrbkBI.2nkALAtG3jl./.\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkZ2ZVdngwQ2MydXh6M0NINW9yM0ZZdXYwTFNCM2pvdmltMWwzUG40YWQ0ZVVBM215UVNKQUsifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 06:26:23'),
('4fbd98da-9acd-424f-80d4-f5116186e7e1', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$UUjQraS4Z8fZY3sIR1u5Neby.DfjFxHJmFeg9o/4u4gFfNu4RR1KO\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkdHZiUkV3V2QyeGxIU2kvYi5jS3owdVNmQ2l0NUpZTDVURXJnZlNyS01XSDVneUZPb3VRWnkifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 04:32:02'),
('5d86a3d4-128c-4a95-8667-0f897c485172', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$LReSbn4gke3nrluhgcyGzOr5.BFV2aKn/AIviEMyalU.HVM7VDAKq\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkdVptOTZFc25IQnNzZDMvbTJRQ1JRdWZaUUYuem5LUDVENTZZOVk1RVJBRmdERTFZVU9lbDYifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 06:43:01'),
('68814c20-96fd-4f1c-9f1e-c12f2db8d833', 'happ-sso-user-admin', 'mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"d345d66d-980e-4c89-b2c3-155db1a090a4\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":\"{\\\"login\\\":\\\"ihor\\\",\\\"email\\\":\\\"ihor.bielchenko2@gmail.com\\\",\\\"password\\\":\\\"$2b$10$wClyas2RtxTJDwPbRRrbueeGi/cxAmzuygXgGVBPznIYUVjFbXC6q\\\",\\\"repeatedPassword\\\":\\\"qewrvv34RE\\\",\\\"roleId\\\":\\\"happ-sso-role-member\\\",\\\"userStatusId\\\":\\\"happ-sso-user-status-new\\\",\\\"emailVerifyKey\\\":\\\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkbnd3aHFpQ0JnaFJlaXhQTFVPb1o4dU9XUEhlbkNlZ1VCMG5maEE2cmptVi5pTFNYSkEyRU8ifQ==\\\",\\\"firstname\\\":\\\"ihor\\\",\\\"lastname\\\":\\\"bielchenko\\\"}\",\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 05:46:14'),
('70bb89ef-15d4-4e85-9795-e3657e351974', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$RHV2AucSr6IIluI6WXOGsukH79x5nvjRuOklR3c2p6TB4v9vDpfcu\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkZExTeFpNQVBiWHUzbFJoOEFHaC5QT2x2cnpISU5idEJsdHlRM3J6ZGhrckpEVS5nQ2JISlMifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 06:32:45'),
('7729d31c-e00f-4b3c-9bee-5b96477192ea', 'happ-sso-user-admin', 'happ-mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"e38ee862-437a-4c91-ac83-8898716956a3\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$i4yoc7PeHIAdTAe35kGlbOYcbO72wc1xA4TC6m2AaNfSFzFZFn1y2\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkMi5uZ0szQUR1RU9jR2tiRTVJU2FNTzZ1WnEzTVIxYmkvMU84Q1l4aUpZTHNrTmhwZ3BmR1cifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 06:37:26'),
('780db7ff-893f-4134-9d24-15827b5b6a9b', 'happ-sso-user-admin', 'happ-mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"89617663-f764-450d-872e-745dc66c2a47\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$O4C0bjTvj6UdTFHFPzGpSuDSo0f1AZ88ca5dKHjhGsCv73/2QGBB6\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkMG1zZjBuNXRpaVpMU0JDR0YvT0VidVVjMndhUUFCY1BFTHdRNngwcW4xNXppZjRzUGpqVHEifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 06:35:45'),
('7ba462c8-6dff-47f0-a8a8-6e30f50f9859', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$zHD2iAMQjXKgvdVc63LIEO0Pb2HW5orudrbkBI.2nkALAtG3jl./.\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkZ2ZVdngwQ2MydXh6M0NINW9yM0ZZdXYwTFNCM2pvdmltMWwzUG40YWQ0ZVVBM215UVNKQUsifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 06:26:22'),
('7ea3c369-f28e-4a9e-8b3a-97c015b1ccf5', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$/8J0YiIjV.YC1xV/IC1HO./LePTBfBHqzc.UxJh0lM84NzxycDZVy\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkOGR1L25ObXJEalMvMHNyWmZNOGNYdXdUSzYzUDB5bmc5MXlpc2ZYWWNsMmhHQkpUdlFyOFMifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:49:41'),
('815f926c-55be-4930-9358-31c220281f03', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$jKwIJWiY.m3bP8YjtxVK5.FeDSmq6Bk3rM3Iwbf83Qyud4rgmy0se\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkaS5ET3ZCYTVLSTQ4bDRFSzhOMlpNTzFGTC8vbWRmdEp1d3RMTWxzWGpZVDJha0dqdDFtYkcifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 04:49:22'),
('86e4c089-aba3-4097-8ab5-937197f95dcc', 'happ-sso-user-admin', 'mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"edd9766d-f644-472f-8985-d2cde13c49bb\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":\"{\\\"login\\\":\\\"ihor\\\",\\\"email\\\":\\\"ihor.bielchenko2@gmail.com\\\",\\\"password\\\":\\\"$2b$10$bBau0r6m3x31U7nusX36mOHkAkUjgVwb5bkyY8CskuPPHTe4gAVC2\\\",\\\"repeatedPassword\\\":\\\"qewrvv34RE\\\",\\\"roleId\\\":\\\"happ-sso-role-member\\\",\\\"userStatusId\\\":\\\"happ-sso-user-status-new\\\",\\\"emailVerifyKey\\\":\\\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkbkxvZ2phNmRYMnVxeTBkV2RkNGpDLnVMSjJSQ1dKQ2ZRay5pNndkdW9PV3BHMUo1U08xMnkifQ==\\\",\\\"firstname\\\":\\\"ihor\\\",\\\"lastname\\\":\\\"bielchenko\\\"}\",\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 05:12:39'),
('89617663-f764-450d-872e-745dc66c2a47', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$O4C0bjTvj6UdTFHFPzGpSuDSo0f1AZ88ca5dKHjhGsCv73/2QGBB6\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkMG1zZjBuNXRpaVpMU0JDR0YvT0VidVVjMndhUUFCY1BFTHdRNngwcW4xNXppZjRzUGpqVHEifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 06:35:44'),
('8d45026d-7fa2-447c-8ce4-4a8fd5524ff0', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$Sj.sIAYGvrUdQGYOt74gt.r7rlHEUGOr1HvtELrUz6JIOpSurLr4q\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkdHYxQnFSUWgya1N4SGxUOW5TV1JQdTFmRjdSN3R4c3F6b3hLbWxMdGFXaVZ2VXhmYVZkaGEifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 04:59:51'),
('a3f590f2-679d-4667-8432-b2876cdee492', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$taApK2jNCpv.7O.xqM9EH.FeZRqYpQJzqqJWDo4q3fG075EtGqsHC\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkZ1RkOE9lVzhGci9UNVhGY1ZaZ1lrT0xiZ1hyUGdHVGlobkY0bkIzaldVRjg3VTlRZ0hLZWkifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:04:35'),
('a832b49f-e1e7-423d-b828-9050eecd06f5', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$MyItXOoCBsbToOPfgA8sH.UdGmfmp6Mkyz73Q.xngilVsmlso9hW6\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkdXoxd2QwZ3JZRnJnYmFSbXJHNExpZTNibGZ4QlIuNzdFNEY4U000ZjFMOGVhR01CeFpqMkcifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:37:54'),
('bc3d521d-a903-45bb-a578-ddbf07ab16f0', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$OEG.jrYKSwCb5wuvSmhsoOVxIZgcRakWG29EX9T.SUt5kM3YtUkhC\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkTEM5bVpkT2p1d3U4NS5HUnZwa0J0LjVlSzJnb09TaEgyOEk1bE92bThKMW9jUktpUWVDYk8ifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:30:28'),
('cbce5d06-1c86-46b0-9c6f-a7a802f74303', 'happ-sso-user-admin', 'mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"a832b49f-e1e7-423d-b828-9050eecd06f5\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":\"{\\\"login\\\":\\\"ihor\\\",\\\"email\\\":\\\"ihor.bielchenko2@gmail.com\\\",\\\"password\\\":\\\"$2b$10$MyItXOoCBsbToOPfgA8sH.UdGmfmp6Mkyz73Q.xngilVsmlso9hW6\\\",\\\"repeatedPassword\\\":\\\"qewrvv34RE\\\",\\\"roleId\\\":\\\"happ-sso-role-member\\\",\\\"userStatusId\\\":\\\"happ-sso-user-status-new\\\",\\\"emailVerifyKey\\\":\\\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkdXoxd2QwZ3JZRnJnYmFSbXJHNExpZTNibGZ4QlIuNzdFNEY4U000ZjFMOGVhR01CeFpqMkcifQ==\\\",\\\"firstname\\\":\\\"ihor\\\",\\\"lastname\\\":\\\"bielchenko\\\"}\",\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 05:37:55'),
('d345d66d-980e-4c89-b2c3-155db1a090a4', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$wClyas2RtxTJDwPbRRrbueeGi/cxAmzuygXgGVBPznIYUVjFbXC6q\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkbnd3aHFpQ0JnaFJlaXhQTFVPb1o4dU9XUEhlbkNlZ1VCMG5maEE2cmptVi5pTFNYSkEyRU8ifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:46:13'),
('d91cd428-d9b5-4b9a-b5e5-270b1f391528', 'happ-sso-user-admin', 'happ-mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"70bb89ef-15d4-4e85-9795-e3657e351974\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$RHV2AucSr6IIluI6WXOGsukH79x5nvjRuOklR3c2p6TB4v9vDpfcu\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkZExTeFpNQVBiWHUzbFJoOEFHaC5QT2x2cnpISU5idEJsdHlRM3J6ZGhrckpEVS5nQ2JISlMifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"},\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 06:32:45'),
('e38ee862-437a-4c91-ac83-8898716956a3', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$i4yoc7PeHIAdTAe35kGlbOYcbO72wc1xA4TC6m2AaNfSFzFZFn1y2\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkMi5uZ0szQUR1RU9jR2tiRTVJU2FNTzZ1WnEzTVIxYmkvMU84Q1l4aUpZTHNrTmhwZ3BmR1cifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 06:37:26'),
('eba21835-81d2-48d6-acdb-a8f6473dfad3', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$ukKnrFtFLASpN/B2ihbTJO0fu1xIm1NTBRz5.0lkFrn51DIz53CBe\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkUnM3aWhnUXBhUXBEZ2ZUQURFN1B4dVc5MHlBRXhzckJhRENjSTlpblREZ1QxWXpGYVVOYS4ifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:20:15'),
('ec5d7f52-267c-4ad1-8406-7c5e544f8c3c', 'happ-sso-user-admin', 'mail-report-status-sent', '', '', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"id\":\"4a4591a4-c012-40c4-9fd5-75c95126b503\",\"letterId\":\"happ-mail-letter-base-registration\",\"reportStatusId\":\"happ-mail-report-status-send\",\"action\":\"Register new user \\\"ihor.bielchenko2@gmail.com\\\"\",\"content\":\"{\\\"login\\\":\\\"ihor\\\",\\\"email\\\":\\\"ihor.bielchenko2@gmail.com\\\",\\\"password\\\":\\\"$2b$10$Wt38kxwbLIYy4qpaBkjaw.Cfmtt5ToPUtrf/HpQn7YQYDjvYtMF2G\\\",\\\"repeatedPassword\\\":\\\"qewrvv34RE\\\",\\\"roleId\\\":\\\"happ-sso-role-member\\\",\\\"userStatusId\\\":\\\"happ-sso-user-status-new\\\",\\\"emailVerifyKey\\\":\\\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkQVk2MTJreXFhVGdqdEhYTGtrMGFYT3hUY1RPT2t2VFlJeVRCWS9IbEdCblJMT0dPdGlIbzIifQ==\\\",\\\"firstname\\\":\\\"ihor\\\",\\\"lastname\\\":\\\"bielchenko\\\"}\",\"email\":\"ihor.bielchenko2@gmail.com\"}', '2023-04-20 05:41:33'),
('edd7be6a-f443-41f5-ae37-b96838295ac0', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$mLxPpbRz/gFywr7EG41AY.WsnxjpPCukzuqcjz84mtVbkKIbXkeBm\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkb3NHcFRROEdRbDg0S2tZamVScWlvTzhxTWV2YnJyQkhlWlMwN2FKcDVHQ3M4dnRqUjNRNUcifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:06:54'),
('edd9766d-f644-472f-8985-d2cde13c49bb', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$bBau0r6m3x31U7nusX36mOHkAkUjgVwb5bkyY8CskuPPHTe4gAVC2\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkbkxvZ2phNmRYMnVxeTBkV2RkNGpDLnVMSjJSQ1dKQ2ZRay5pNndkdW9PV3BHMUo1U08xMnkifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 05:12:38'),
('eeac18a9-8a58-4cde-9853-4ea5bf685c6b', '', 'happ-mail-report-status-send', 'happ-mail-letter-base-registration', 'ihor.bielchenko2@gmail.com', 'Register new user \"ihor.bielchenko2@gmail.com\"', '{\"login\":\"ihor\",\"email\":\"ihor.bielchenko2@gmail.com\",\"password\":\"$2b$10$sPgzhJ3sdD7OxCtifmef1OwSNzgQJ3ITSRf33R0uBzOgVzqY2fzv6\",\"repeatedPassword\":\"qewrvv34RE\",\"roleId\":\"happ-sso-role-member\",\"userStatusId\":\"happ-sso-user-status-new\",\"emailVerifyKey\":\"eyJlbWFpbCI6Imlob3IuYmllbGNoZW5rbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTEkSTZCY2hseUNYZWtQTXRNNHFWUHBwLkpDNjhhZ1p0SFVzc3dlV1dMSkUwNW10NUdLSlVXckcifQ==\",\"firstname\":\"ihor\",\"lastname\":\"bielchenko\"}', '2023-04-20 04:51:26');

-- --------------------------------------------------------

--
-- Table structure for table `report_status`
--

CREATE TABLE `report_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `report_status`
--

INSERT INTO `report_status` (`id`, `userId`, `envKey`, `name`, `description`, `isNotDelete`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
('happ-mail-report-status-active', 'happ-sso-user-admin', 'HAPP_MAIL_REPORT_STATUS_ACTIVE', 'Active', 'Active.', 1, 0, '2023-04-20 04:27:14', '2023-04-20 04:27:28'),
('happ-mail-report-status-send', 'happ-sso-user-admin', 'HAPP_MAIL_REPORT_STATUS_SEND', 'Send', 'Run sending process.', 1, 0, '2023-04-20 04:29:31', '2023-04-20 04:29:36'),
('happ-mail-report-status-sent', 'happ-sso-user-admin', 'HAPP_MAIL_REPORT_STATUS_SENT', 'Sent', 'Letter sent.', 1, 0, '2023-04-20 04:28:21', '2023-04-20 04:28:25');

-- --------------------------------------------------------

--
-- Table structure for table `role_access`
--

CREATE TABLE `role_access` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `roleId` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `accessId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `value` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `template`
--

CREATE TABLE `template` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `templateStatusId` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `fromEmail` varchar(255) NOT NULL,
  `fromName` varchar(255) NOT NULL,
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `envKey` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `template`
--

INSERT INTO `template` (`id`, `userId`, `templateStatusId`, `name`, `description`, `fromEmail`, `fromName`, `isDeleted`, `isNotDelete`, `createdAt`, `updatedAt`, `envKey`) VALUES
('happ-mail-template-base-recovery', 'happ-sso-user-admin', 'happ-mail-template-status-active', 'Base recovery', 'Base recovery.', 'ihor.bielchenko@gmail.com', 'admin', 0, 1, '2023-04-19 03:01:18', '2023-04-19 03:01:55', 'HAPP_MAIL_TEMPLATE_BASE_RECOVERY'),
('happ-mail-template-base-registration', 'happ-sso-user-admin', 'happ-mail-template-status-active', 'Base registration', 'Base registration.', 'ihor.bielchenko@gmail.com', 'admin', 0, 1, '2023-04-19 02:39:38', '2023-04-19 02:54:09', 'HAPP_MAIL_TEMPLATE_BASE_REGISTRATION');

-- --------------------------------------------------------

--
-- Table structure for table `template_option`
--

CREATE TABLE `template_option` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `dataTypeId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `defaultValue` varchar(255) NOT NULL DEFAULT '',
  `regex` varchar(255) NOT NULL DEFAULT '',
  `isRequired` tinyint NOT NULL DEFAULT '0',
  `isMultiline` tinyint NOT NULL DEFAULT '0',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `template_option`
--

INSERT INTO `template_option` (`id`, `userId`, `dataTypeId`, `envKey`, `name`, `description`, `defaultValue`, `regex`, `isRequired`, `isMultiline`, `isNotDelete`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
('happ-mail-template-option-view', 'happ-sso-user-admin', 'happ-data-type-file-select', 'HAPP_MAIL_TEMPLATE_OPTION_VIEW', 'View', 'Letter view.', '', '', 1, 0, 1, 0, '2023-04-19 02:29:31', '2023-04-20 00:12:38');

-- --------------------------------------------------------

--
-- Table structure for table `template_status`
--

CREATE TABLE `template_status` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL DEFAULT '',
  `envKey` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '',
  `isNotDelete` tinyint NOT NULL DEFAULT '0',
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `template_status`
--

INSERT INTO `template_status` (`id`, `userId`, `envKey`, `name`, `description`, `isNotDelete`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
('happ-mail-template-status-active', 'happ-sso-user-admin', 'HAPP_MAIL_TEMPLATE_STATUS_ACTIVE', 'Active', '', 0, 0, '2023-04-19 02:06:22', '2023-04-19 02:51:25');

-- --------------------------------------------------------

--
-- Table structure for table `template_template_option`
--

CREATE TABLE `template_template_option` (
  `id` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `templateOptionId` varchar(255) NOT NULL,
  `templateId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `template_template_option`
--

INSERT INTO `template_template_option` (`id`, `createdAt`, `updatedAt`, `templateOptionId`, `templateId`) VALUES
('16090155-60d4-45f6-91cb-a482d670e08c', '2023-04-19 03:31:48', '2023-04-19 03:31:48', 'happ-mail-template-option-view', 'happ-mail-template-base-registration'),
('6a969352-27b6-475a-96e2-f160571a417a', '2023-04-19 03:31:31', '2023-04-19 03:31:31', 'happ-mail-template-option-view', 'happ-mail-template-base-recovery');

-- --------------------------------------------------------

--
-- Table structure for table `template_template_template_option`
--

CREATE TABLE `template_template_template_option` (
  `id` varchar(36) NOT NULL,
  `parentId` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `templateTemplateOptionId` varchar(255) NOT NULL,
  `templateId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `template_template_template_option`
--

INSERT INTO `template_template_template_option` (`id`, `parentId`, `content`, `createdAt`, `updatedAt`, `templateTemplateOptionId`, `templateId`) VALUES
('d277bbbb-df30-11ed-b458-6014b35bf59f', '', '4ee63088-a2ac-4b4b-873e-b98ef31095af', '2023-04-20 04:07:10', '2023-04-20 04:09:47', '6a969352-27b6-475a-96e2-f160571a417a', 'happ-mail-template-base-recovery'),
('f2fe6874-df30-11ed-b458-6014b35bf59f', '', '7bc93bb0-c464-4d36-ade0-3edf2c89c0a0', '2023-04-20 04:08:04', '2023-04-20 04:09:55', '16090155-60d4-45f6-91cb-a482d670e08c', 'happ-mail-template-base-registration');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_8a974ab8bdb6b87311cd79cb8b` (`name`),
  ADD KEY `IDX_6e34c980647d3db8ea3455046c` (`userId`),
  ADD KEY `IDX_9924ca5b0815b1505571f85afe` (`accessStatusId`);

--
-- Indexes for table `access_access_access_option`
--
ALTER TABLE `access_access_access_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_dee3f68f696ee64eb107566564c` (`accessAccessOptionId`),
  ADD KEY `FK_cc0a1470c7887114cd5f1d5f649` (`accessId`);

--
-- Indexes for table `access_access_option`
--
ALTER TABLE `access_access_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_bc68ede697b180abc5164199af6` (`accessOptionId`),
  ADD KEY `FK_a709edfd6f1c6b8d2f42888919d` (`accessId`);

--
-- Indexes for table `access_option`
--
ALTER TABLE `access_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_553f54ca8e7902a29cf508dfdc` (`name`),
  ADD KEY `IDX_ec42c16012cc0f0021303d443b` (`userId`),
  ADD KEY `IDX_51e8a2059f75c6614d87a1864c` (`dataTypeId`),
  ADD KEY `IDX_e053f77c195c18bfcebfa3e9a0` (`description`);

--
-- Indexes for table `access_status`
--
ALTER TABLE `access_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_7f6e5c92d0ce9fe1f8c1230463` (`name`),
  ADD KEY `IDX_dad99c714d3523b0eb4006f745` (`userId`),
  ADD KEY `IDX_5f13bfcb9ac8fb2086db4d3f42` (`description`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_f8c0858628830a35f19efdc0ec` (`name`),
  ADD KEY `IDX_e7745e30cd922cb04a009acfc3` (`userId`),
  ADD KEY `IDX_bf30c0c9669d84bb91b4a2e1bf` (`description`),
  ADD KEY `FK_a702dde63cef536819298d776b5` (`regionId`);

--
-- Indexes for table `city_city_city_option`
--
ALTER TABLE `city_city_city_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_083b1dfe0e66ac7edb402b9cdd6` (`cityCityOptionId`),
  ADD KEY `FK_dccd64463149ea10b66037e95a8` (`cityId`);

--
-- Indexes for table `city_city_option`
--
ALTER TABLE `city_city_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_379a36f137a4f6d18936f8e2a4b` (`cityOptionId`),
  ADD KEY `FK_d05115664e9f798af6d7ddf0ef4` (`cityId`);

--
-- Indexes for table `city_option`
--
ALTER TABLE `city_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_87c537c95ba5cde4721cc4c455` (`name`),
  ADD KEY `IDX_b2d429b98c148940f28416f9d4` (`userId`),
  ADD KEY `IDX_796765b4d30ef70efb94e93533` (`dataTypeId`),
  ADD KEY `IDX_809ed384aad14e1b71128a9665` (`description`);

--
-- Indexes for table `city_status`
--
ALTER TABLE `city_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_6d5df62896084e3064ae7c22b9` (`name`),
  ADD KEY `IDX_8c2d3030977561dfbc3ef16bee` (`userId`),
  ADD KEY `IDX_55dd21d7d341e69d7c57239dff` (`description`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_8ff4c23dc9a3f3856555bd8618` (`code`),
  ADD UNIQUE KEY `IDX_2c5aa339240c0c3ae97fcc9dc4` (`name`),
  ADD KEY `IDX_ba5ff48ff5384b02c5f387b08f` (`userId`),
  ADD KEY `IDX_e0c5d1925e4f861cc79693216a` (`description`),
  ADD KEY `FK_adda353c674d16613298959d5bc` (`regionId`);

--
-- Indexes for table `country_country_country_option`
--
ALTER TABLE `country_country_country_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5df7fd391531e0b292c24a84939` (`countryCountryOptionId`),
  ADD KEY `FK_07b9dd937d0814bd10e4260c264` (`countryId`);

--
-- Indexes for table `country_country_option`
--
ALTER TABLE `country_country_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_fc3a1a558530b4103d887651d6b` (`countryOptionId`),
  ADD KEY `FK_87d08a7bb4e664a688052856b0e` (`countryId`);

--
-- Indexes for table `country_option`
--
ALTER TABLE `country_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_57dc5c9a11098316eee1520115` (`name`),
  ADD KEY `IDX_eea835eeffbf0911895dcf4359` (`userId`),
  ADD KEY `IDX_d76f51e856ab479cf205f005a3` (`dataTypeId`),
  ADD KEY `IDX_f5ae93fc5e88ec044143695799` (`description`);

--
-- Indexes for table `country_status`
--
ALTER TABLE `country_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_32946127fcf34a949d6aeba32d` (`name`),
  ADD KEY `IDX_9052dcc01655059d05f8fb4b15` (`userId`),
  ADD KEY `IDX_99c7a6417a9e02a044c00d4bd7` (`description`);

--
-- Indexes for table `letter`
--
ALTER TABLE `letter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_54d5b2697579673f078c8f058c` (`userId`),
  ADD KEY `IDX_9235a802efc9babf0ce61d3634` (`letterStatusId`),
  ADD KEY `IDX_06456e6277736e3553f4a37ff6` (`name`),
  ADD KEY `IDX_8945a5d133c2a52f8a014b62ec` (`subject`),
  ADD KEY `IDX_aad35cbc53e29521d7c82b932f` (`textPart`),
  ADD KEY `FK_14f2b6f70e7923d77dfaa8b61c1` (`templateId`);

--
-- Indexes for table `letter_letter_letter_option`
--
ALTER TABLE `letter_letter_letter_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6cbbbe44e9fc931dc32a25a5765` (`letterLetterOptionId`),
  ADD KEY `FK_a989bfe221717be19add6acd122` (`letterId`);

--
-- Indexes for table `letter_letter_option`
--
ALTER TABLE `letter_letter_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_9c83639ee108afe479e32f8e4ac` (`letterOptionId`),
  ADD KEY `FK_28f2213a832d31305d293560510` (`letterId`);

--
-- Indexes for table `letter_option`
--
ALTER TABLE `letter_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_9bce3b110ded0c1df6c52d6f0f` (`name`),
  ADD KEY `IDX_63ced0ade2c90232e3693d1a65` (`userId`),
  ADD KEY `IDX_49799b916845f65d8b7ce630e9` (`dataTypeId`),
  ADD KEY `IDX_4da40b8e4f1ffd415fd0d3e856` (`description`);

--
-- Indexes for table `letter_status`
--
ALTER TABLE `letter_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_f1ffa9616c10590c7cdef9b81a` (`name`),
  ADD KEY `IDX_3232146828f0b5f2fa1ec26d14` (`userId`),
  ADD KEY `IDX_dc6a084687e30f4405c7e6ac61` (`description`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_8d766fc1d4d2e72ecd5f6567a0` (`name`),
  ADD KEY `IDX_7fa17a91120347c40dec15a69d` (`userId`),
  ADD KEY `IDX_2dd40a60baa522d4fe3118bb75` (`description`);

--
-- Indexes for table `region_option`
--
ALTER TABLE `region_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_b8e91d89cb94d7a9fc3e0bc28f` (`name`),
  ADD KEY `IDX_befe8f7bea2a4e708baf901afe` (`userId`),
  ADD KEY `IDX_72ab4f5c67601bdd33835f1144` (`dataTypeId`),
  ADD KEY `IDX_390373f8695959236142c732db` (`description`);

--
-- Indexes for table `region_region_option`
--
ALTER TABLE `region_region_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_faa7547278183fd57b223d1598e` (`regionOptionId`),
  ADD KEY `FK_092e11430056b135cfa2c58909e` (`regionId`);

--
-- Indexes for table `region_region_region_option`
--
ALTER TABLE `region_region_region_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d39d507ec5270666528ab9bfb14` (`regionRegionOptionId`),
  ADD KEY `FK_82b219dc06c71394efa5b38b84e` (`regionId`);

--
-- Indexes for table `region_status`
--
ALTER TABLE `region_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_3ca81cac3802f88067a024ca05` (`name`),
  ADD KEY `IDX_13eacc0e771783533c324728dc` (`userId`),
  ADD KEY `IDX_efd0f1dbbd57391c7aaa17c511` (`description`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_1d9c253f00e5009de7e6032bf3` (`reportStatusId`),
  ADD KEY `IDX_4a4e53b8d5fefa474144016017` (`letterId`),
  ADD KEY `IDX_146907da13494bc56020ab4edc` (`email`),
  ADD KEY `IDX_02f961279dd458978d270affba` (`action`);

--
-- Indexes for table `report_status`
--
ALTER TABLE `report_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_01a95ed7efebe79e6059cbd3d9` (`name`),
  ADD KEY `IDX_5c463952365675d7d6d2aa2710` (`userId`),
  ADD KEY `IDX_118aa13edefd90395b33e17ec5` (`description`);

--
-- Indexes for table `role_access`
--
ALTER TABLE `role_access`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d49b4a1ea909dd305982da6b749` (`accessId`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_27923d152bbf82683ab795d547` (`name`),
  ADD KEY `IDX_bbcafb8c4c78d890f75caa632d` (`userId`),
  ADD KEY `IDX_31ef7f56e7110672954fa867f3` (`dataTypeId`),
  ADD KEY `IDX_cacc7786f61a20ca63628fd877` (`description`);

--
-- Indexes for table `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_a62147c0d6b868e797061e142a` (`name`),
  ADD KEY `IDX_5e718539594d02a4c75ddc1ca5` (`userId`),
  ADD KEY `IDX_a2fa150ce8a95dc7af81baaf93` (`description`);

--
-- Indexes for table `template_option`
--
ALTER TABLE `template_option`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_8070f2b9f2731bd9e70252487f` (`name`),
  ADD KEY `IDX_f650f2857046cc045a9ac146ea` (`userId`),
  ADD KEY `IDX_19bb283517e2304e490c8c8977` (`dataTypeId`),
  ADD KEY `IDX_4fee8eeb484c3a970d30c4c388` (`description`);

--
-- Indexes for table `template_status`
--
ALTER TABLE `template_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_2fc593c8b1b9e9a15399a332e6` (`name`),
  ADD KEY `IDX_4cd5f3df1b0ac449d50552d595` (`userId`),
  ADD KEY `IDX_ea9ce918343cb26097cd20268c` (`description`);

--
-- Indexes for table `template_template_option`
--
ALTER TABLE `template_template_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2502515ccee205d9d234d94ff3d` (`templateOptionId`),
  ADD KEY `FK_ffe3516a0d4b9b81e0366a5a127` (`templateId`);

--
-- Indexes for table `template_template_template_option`
--
ALTER TABLE `template_template_template_option`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_13c861dd4ef89279239085ff10f` (`templateTemplateOptionId`),
  ADD KEY `FK_760d8034b1199a28d92b65a5bc0` (`templateId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `access_access_access_option`
--
ALTER TABLE `access_access_access_option`
  ADD CONSTRAINT `FK_cc0a1470c7887114cd5f1d5f649` FOREIGN KEY (`accessId`) REFERENCES `access` (`id`),
  ADD CONSTRAINT `FK_dee3f68f696ee64eb107566564c` FOREIGN KEY (`accessAccessOptionId`) REFERENCES `access_access_option` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `access_access_option`
--
ALTER TABLE `access_access_option`
  ADD CONSTRAINT `FK_a709edfd6f1c6b8d2f42888919d` FOREIGN KEY (`accessId`) REFERENCES `access` (`id`),
  ADD CONSTRAINT `FK_bc68ede697b180abc5164199af6` FOREIGN KEY (`accessOptionId`) REFERENCES `access_option` (`id`);

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `FK_a702dde63cef536819298d776b5` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`);

--
-- Constraints for table `city_city_city_option`
--
ALTER TABLE `city_city_city_option`
  ADD CONSTRAINT `FK_083b1dfe0e66ac7edb402b9cdd6` FOREIGN KEY (`cityCityOptionId`) REFERENCES `city_city_option` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_dccd64463149ea10b66037e95a8` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`);

--
-- Constraints for table `city_city_option`
--
ALTER TABLE `city_city_option`
  ADD CONSTRAINT `FK_379a36f137a4f6d18936f8e2a4b` FOREIGN KEY (`cityOptionId`) REFERENCES `city_option` (`id`),
  ADD CONSTRAINT `FK_d05115664e9f798af6d7ddf0ef4` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`);

--
-- Constraints for table `country`
--
ALTER TABLE `country`
  ADD CONSTRAINT `FK_adda353c674d16613298959d5bc` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`);

--
-- Constraints for table `country_country_country_option`
--
ALTER TABLE `country_country_country_option`
  ADD CONSTRAINT `FK_07b9dd937d0814bd10e4260c264` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `FK_5df7fd391531e0b292c24a84939` FOREIGN KEY (`countryCountryOptionId`) REFERENCES `country_country_option` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `country_country_option`
--
ALTER TABLE `country_country_option`
  ADD CONSTRAINT `FK_87d08a7bb4e664a688052856b0e` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `FK_fc3a1a558530b4103d887651d6b` FOREIGN KEY (`countryOptionId`) REFERENCES `country_option` (`id`);

--
-- Constraints for table `letter`
--
ALTER TABLE `letter`
  ADD CONSTRAINT `FK_14f2b6f70e7923d77dfaa8b61c1` FOREIGN KEY (`templateId`) REFERENCES `template` (`id`);

--
-- Constraints for table `letter_letter_letter_option`
--
ALTER TABLE `letter_letter_letter_option`
  ADD CONSTRAINT `FK_6cbbbe44e9fc931dc32a25a5765` FOREIGN KEY (`letterLetterOptionId`) REFERENCES `letter_letter_option` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_a989bfe221717be19add6acd122` FOREIGN KEY (`letterId`) REFERENCES `letter` (`id`);

--
-- Constraints for table `letter_letter_option`
--
ALTER TABLE `letter_letter_option`
  ADD CONSTRAINT `FK_28f2213a832d31305d293560510` FOREIGN KEY (`letterId`) REFERENCES `letter` (`id`),
  ADD CONSTRAINT `FK_9c83639ee108afe479e32f8e4ac` FOREIGN KEY (`letterOptionId`) REFERENCES `letter_option` (`id`);

--
-- Constraints for table `region_region_option`
--
ALTER TABLE `region_region_option`
  ADD CONSTRAINT `FK_092e11430056b135cfa2c58909e` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`),
  ADD CONSTRAINT `FK_faa7547278183fd57b223d1598e` FOREIGN KEY (`regionOptionId`) REFERENCES `region_option` (`id`);

--
-- Constraints for table `region_region_region_option`
--
ALTER TABLE `region_region_region_option`
  ADD CONSTRAINT `FK_82b219dc06c71394efa5b38b84e` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`),
  ADD CONSTRAINT `FK_d39d507ec5270666528ab9bfb14` FOREIGN KEY (`regionRegionOptionId`) REFERENCES `region_region_option` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_access`
--
ALTER TABLE `role_access`
  ADD CONSTRAINT `FK_d49b4a1ea909dd305982da6b749` FOREIGN KEY (`accessId`) REFERENCES `access` (`id`);

--
-- Constraints for table `template_template_option`
--
ALTER TABLE `template_template_option`
  ADD CONSTRAINT `FK_2502515ccee205d9d234d94ff3d` FOREIGN KEY (`templateOptionId`) REFERENCES `template_option` (`id`),
  ADD CONSTRAINT `FK_ffe3516a0d4b9b81e0366a5a127` FOREIGN KEY (`templateId`) REFERENCES `template` (`id`);

--
-- Constraints for table `template_template_template_option`
--
ALTER TABLE `template_template_template_option`
  ADD CONSTRAINT `FK_13c861dd4ef89279239085ff10f` FOREIGN KEY (`templateTemplateOptionId`) REFERENCES `template_template_option` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_760d8034b1199a28d92b65a5bc0` FOREIGN KEY (`templateId`) REFERENCES `template` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
