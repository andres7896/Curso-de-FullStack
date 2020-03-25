<?php

//include('infoPersonal.php'); //Lamar el archivo info..
//require('infoPersonal.php'); //Si no encuentra el archivo para toda la pagina ( no imprime mas)
include_once('infoPersonal.php'); // Llama al archivo solo una vez 


$nombre = 'Bryam'; //Cadena de texto
$numero = '2'; //Entero
$num = 0; //Float
$bool = true; //Booleano
$array = ['nombre' => 'Bryam', 'edad' => 25, 'apellido' => 'Hernández'];
$array2 = ['Bryam', 25, 'Hernández'];

//echo "Hola <br/> Nombre: $array[nombre] <br/> Apellido: $array[apellido] <br/>  Edad: $array[edad] años";
//var_dump($nombre);

//echo count($array);
for ($i = 0; $i < count($array2); $i++) {
   var_dump($array2[$i]);
}
foreach ($array as $key => $value) {
   echo "<br> $key => $value </br>";
}

echo "</br>";


//$nombre .= ' Piñeros '; //Concadenación
//$nom2 = $nombre . 'Hernández';
/*
   echo $num * 2;
   echo $num + 2;
   echo $num++;
   */

if ($numero === 2) {
   echo 'Son iguales';
} else {
   echo 'No son iguales';
}

switch ($num) {
   case 1:
      echo 'Es uno';
      break;
   case 2:
      echo 'Es dos';
      break;
   default:
      echo ' No es uno ni dos';
      break;
}

for ($i = 1; $i < 11; $i++) {
   echo "El numero es: $i </br>";
}

while ($num <= 5) {
   echo $num;
   $num++;
}

do {
   echo $num;
   $num++;
} while ($num <= 5);

// EJERCICIO

echo "</br>";
echo "</br>";

for ($j = 2; $j < 10; $j++) {
   if ($j % 2 == 0) {
      echo "Los pares son: $j </br>";
   }
}
echo "</br>";
$numero_impar = 0;

while ($numero_impar <= 10) {

   if ($numero_impar % 2 !== 0) {
      echo "Los impares son: $numero_impar </br>";
   }
   $numero_impar++;
}

function imprimirNombre()
{
   $nombre = "<b> Camilo </b>";
   return $nombre;
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>PHP</title>
</head>

<body>
   <h1> <?php echo $nombre;
         echo $nom2; ?> 1.</h1> //Primera forma de insertar un php en html
</body>

</html>