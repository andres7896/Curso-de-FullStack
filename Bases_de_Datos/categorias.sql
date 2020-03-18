-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2020 a las 14:29:20
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectolibreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `idCategoria` int(11) NOT NULL,
  `nombreCategoria` varchar(45) NOT NULL,
  `estado` int(11) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`idCategoria`, `nombreCategoria`, `estado`, `descripcion`) VALUES
(1, 'Fantasia', 1, 'Fantasía. La fantasía también puede ser entendida como el grado superior de la imaginación o el pensamiento ingenioso. Estos pensamientos pueden plasmarse en obras artísticas, como cuentos, novelas o películas. El género fantástico es aquel que presenta elementos imaginarios y sobrenaturales en su argumento.'),
(2, 'Terror', 1, 'La literatura de terror es un género de ficción literario que pretende o tiene la capacidad de asustar, causar miedo o aterrorizar sus lectores o espectadores en inducir sentimientos de horror y terror.'),
(3, 'Novela', 1, 'La novela es una obra literaria en la que se narra una acción fingida en todo o en parte y cuyo fin es causar placer estético a los lectores con la descripción o pintura de sucesos o lances interesantes así como de personajes, pasiones y costumbres, que en muchos casos sirven de insumos para la propia reflexión'),
(5, 'Poesia', 1, 'sd'),
(8, 'Religion', 1, 'Las religiones son doctrinas constituidas por un conjunto de principios, creencias y prácticas sobre cuestiones de tipo existencial, moral y espiritual'),
(9, 'Literatura', 1, 'Es una trama que busca dar características de algo o alguien incorporando recursos literarios y expresivos con una finalidad estética o artística. ... La descripción literaria, además de mostrar aquello que describe, intenta producir un trabajo con el lenguaje y un placer estético al lector.'),
(12, 'Comedia', 1, 'La comedia del latín «comoedĭa-ae», y este del griego antiguo κωμῳδία,1​ «kōmōidía») es el género dramático opuesto a la tragedia2​ y, por lo tanto, relacionado casi siempre con historias con final feliz. Esa lectura epicúrea, placentera y optimista,3​ tuvo su origen en los primitivos cultos de la fertilidad en honor del dios Dionisos («Diônysos») y se desarrolló como género derivado del griego ditirambo, asociado a los dramas satíricos y al mimo.'),
(13, 'Historia', 1, 'Conjunto de estos acontecimientos y hechos, especialmente los vividos por una persona, por un grupo o por los miembros de una comunidad social.'),
(15, 'filosofia Politicas', 0, 'toettuotet');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idCategoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
