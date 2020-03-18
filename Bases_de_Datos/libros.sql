-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2020 a las 14:14:23
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
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `idLibro` int(11) NOT NULL,
  `nombreLibro` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `fechaPublicacion` date NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `estado` int(11) NOT NULL,
  `idEditorial` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `idAutor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`idLibro`, `nombreLibro`, `descripcion`, `fechaPublicacion`, `precio`, `estado`, `idEditorial`, `idCategoria`, `idAutor`) VALUES
(10, 'Romeo y Julieta: Tragedia clásica', ' Romeo y Julieta es una obra dramática de William Shakespeare, escrita en los años 1594 y 1595 y estrenada en 1595. La obra cuenta la historia de dos jóvenes enamorados que a pesar de la oposición de sus familias, rivales entre si, desiden luchar por su amor hasta el punto de casarse de forma clandestina; sin embargo, la presión de esa realidad y una serie de fatalidades conducen al suicidio de los dos amantes. en esta relación entre sus protagonistas los ha convertida en el arquetipo de los llamados star crossed lovers. ', '2011-01-11', '15000', 1, 8, 5, 3),
(11, 'Hamlet', ' Hamlet, hijo del difunto rey de Dinamarca, se siente melancólico y abatido por las cosas del mundo. Su madre se ha casado con Claudio (el hermano de su padre), el nuevo rey, y Hamlet deambula por el palacio lleno de sospechas y dudas. Dos meses después de la muerte de su padre, Hamlet es visitado por el fantasma de su padre y le informa que ha sido asesinado por Claudio para llegar a ser rey y casarse con su madre. ', '2014-07-09', '30000', 1, 4, 3, 3),
(12, 'Otelo', ' Comienza nuestra historia en la tierra del amor y del agua, Venecia. Desdémona, profundamente enamorada de Otelo, decide escaparse con él para ser su mujer sin contar con la autorización de su padre, Brabancio.Otelo es un brillante general del ejército veneciano, que acaba de elegir a Casio para que sea su lugarteniente. Esto enfurece enormemente a Yago, otro de los militares bajo el mando de Otelo, que se consideraba con más méritos que Casio.', '2020-01-01', '30000', 0, 8, 5, 3),
(13, 'La Ilíada y La Odisea', 'Comienza nuestra historia en la tierra del amor y del agua, Venecia. Desdémona, profundamente enamorada de Otelo, decide escaparse con él para ser su mujer sin contar con la autorización de su padre, Brabancio.Otelo es un brillante general del ejército veneciano, que acaba de elegir a Casio para que sea su lugarteniente. ', '2013-10-01', '30000', 1, 4, 13, 4),
(14, 'Trilogía El Señor de los Anillos', 'En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en las Grietas del Destino. Consciente de la importancia de su misión, Frodo abandona la Comarca e inicia el camino hacia Mordor con la compañía inesperada de Sam, Pippin y Merry. Pero sólo con la ayuda de Aragorn conseguirán vencer a los Jinetes Negros y alcanzar el refugio de la Casa de Elrond en Rivendel.', '2020-02-22', '80000', 1, 3, 1, 5),
(15, 'El contrato social', 'Este ebook presenta \"El contrato social” con un sumario dinámico y detallado. El contrato social: o los principios del derecho político, más conocido como El contrato social, es un libro escrito por Jean-Jacques Rousseau y publicado en 1762. Es una obra sobre filosofía política y trata principalmente sobre la libertad e igualdad de los hombres bajo un Estado instituido por medio de un contrato social. Se dice que este libro fue uno de los muchos incitadores de la Revolución francesa por sus ideas políticas. ', '2017-06-21', '10000', 0, 8, 15, 6),
(16, 'El arte de la guerra.', 'Descubre \"El Arte de la Guerra\" de Sun Tzu, el más reconocido tratado de estrategia militar de todos los tiempos. Releído y estudiado por líderes militares, políticos y ejecutivos, su aplicación empresarial han convertido esta obra en un clásico actual.', '2018-09-30', '5000', 0, 4, 15, 7),
(17, 'Cien años de soledad', 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.', '2018-11-06', '59000', 1, 4, 3, 8),
(18, 'El Principito', 'Han pasado numerosas decenas de años desde su publicación pero el principito sigue encantando. Como en esta espléndida versión Ebook enriquecida por numerosas ilustraciones a color. Representando los personajes inolvidables de esta estupenda fábula y emocionante, dedicada a los niños de todas las edades, creada desde el talento y la fantasía de Antonie de Saint Exupéry.', '2020-02-13', '15000', 1, 5, 1, 9),
(19, 'Harry Potter y la piedra filosofal', 'Harry vive con sus horribles tíos y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechicería cambia su vida para siempre. Allí aprenderá trucos y encantamientos fabulosos, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Y, sobre todo, conocerá los secretos que lo ayudarán a cumplir con su destino.', '2018-08-09', '45000', 0, 6, 9, 10),
(20, 'Choque de reyes (Canción de hielo y fuego 2)', 'Cuatro nobles se proclaman, a la vez, reyes legítimos, y las tierras de Poniente se estremecen entre guerras y traiciones. Un horror presidido por la más ominosa de las señales: un inmenso cometa color sangre suspendido en el cielo.', '2019-02-05', '95000', 0, 3, 1, 11),
(21, '1984', '«No creo que la sociedad que he descrito en 1984 necesariamente llegue a ser una realidad, pero sí creo que puede llegar a existir algo parecido», escribía Orwell después de publicar su novela. Corría el año 1948, y la realidad se ha encargado de convertir esa pieza -entonces de ciencia ficción- en un manifiesto de la realidad.\r\nEn el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete.\r\n', '2020-02-21', '55000', 1, 3, 9, 17);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`idLibro`),
  ADD KEY `idEditorial` (`idEditorial`),
  ADD KEY `idCategoria` (`idCategoria`),
  ADD KEY `idAutor` (`idAutor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `idLibro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`idEditorial`) REFERENCES `editoriales` (`idEditorial`),
  ADD CONSTRAINT `libros_ibfk_2` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`idCategoria`),
  ADD CONSTRAINT `libros_ibfk_3` FOREIGN KEY (`idAutor`) REFERENCES `autores` (`idAutor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
