-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-02-2020 a las 14:32:53
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adminToPeople`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `People`
--

CREATE TABLE `People` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `profession` varchar(100) NOT NULL,
  `profile` text NOT NULL,
  `urlImage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `WorkExperiences`
--

CREATE TABLE `WorkExperiences` (
  `id` int(11) NOT NULL,
  `company` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `workTime` varchar(50) NOT NULL,
  `workPosition` varchar(100) NOT NULL,
  `idPerson` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `People`
--
ALTER TABLE `People`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `WorkExperiences`
--
ALTER TABLE `WorkExperiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPerson` (`idPerson`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `People`
--
ALTER TABLE `People`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `WorkExperiences`
--
ALTER TABLE `WorkExperiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `WorkExperiences`
--
ALTER TABLE `WorkExperiences`
  ADD CONSTRAINT `WorkExperiences_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `People` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
