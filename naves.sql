-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2022 a las 22:03:10
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `naves`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `naves`
--

CREATE TABLE `naves` (
  `id_nave1` int(11) NOT NULL,
  `id_relacional_naves` varchar(200) NOT NULL,
  `tipo_atributo` text NOT NULL,
  `atributo` text NOT NULL,
  `estado_nave1` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `naves`
--

INSERT INTO `naves` (`id_nave1`, `id_relacional_naves`, `tipo_atributo`, `atributo`, `estado_nave1`) VALUES
(22, '55939', 'Velocidad', '250', 1),
(23, '22735', 'Velocidad', '250', 1),
(24, '67816', 'Velocidad', '850', 1),
(25, '32639', 'Peso', '3000', 1),
(26, '44339', 'Velocidad', '2600', 1),
(27, '98842', 'Velocidad', '2600', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id_vehiculos` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `empuje` text NOT NULL,
  `destino` text NOT NULL,
  `combustible` text NOT NULL,
  `pais` text NOT NULL,
  `id_relacional_vehiculos` varchar(200) NOT NULL,
  `estado_vehiculos` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id_vehiculos`, `nombre`, `empuje`, `destino`, `combustible`, `pais`, `id_relacional_vehiculos`, `estado_vehiculos`) VALUES
(24, 'FALCO X', '7000', 'Luna', 'dimetilhidracina y el óxido de nitrógeno', 'NASA (EE.UU.)', '55939', 1),
(25, 'FALCO X', '6000', 'Urano y Neptuno', 'dimetilhidracina y el óxido de nitrógeno', 'NASA (EE.UU.)', '22735', 1),
(26, 'romero', '8000', 'Urano y Neptuno', 'petróleo refinado y oxígeno líquido ', 'ESA (Europa)', '67816', 1),
(27, 'Saturno V', '5000', 'Orbita', 'dimetilhidracina y el óxido de nitrógeno', 'NASA (EE.UU.)', '32639', 1),
(28, 'Falcon IX', '3000', 'Luna', 'petróleo refinado y oxígeno líquido ', 'NASA (EE.UU.)', '44339', 1),
(29, 'Falcon IX', '3000', 'Luna', 'petróleo refinado y oxígeno líquido ', 'NASA (EE.UU.)', '98842', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `naves`
--
ALTER TABLE `naves`
  ADD PRIMARY KEY (`id_nave1`),
  ADD KEY `id_relacional_nave1` (`id_relacional_naves`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id_vehiculos`),
  ADD KEY `id_relacional_vehiculos` (`id_relacional_vehiculos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `naves`
--
ALTER TABLE `naves`
  MODIFY `id_nave1` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id_vehiculos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `naves`
--
ALTER TABLE `naves`
  ADD CONSTRAINT `naves_ibfk_1` FOREIGN KEY (`id_relacional_naves`) REFERENCES `vehiculos` (`id_relacional_vehiculos`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
