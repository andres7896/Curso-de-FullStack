<?php

$numeros = [
    'Primer' => ['2', 5, 7, 8, 4, 3, 3],
    'Segundo' => [50, 60, 5, '8', 0, 3, 9, 2],
    'Tercero' => [100, 600, 8, '3', 78, 90, 5, 77]
];


foreach ($numeros as $key => $value) {
    $sum = 0;
    foreach ($value as $valor) {
        /*if($valor !== 8){
            $sum += $valor;
        }*/
        if (is_int($valor)) {
            $sum += $valor;
        }
    }
    echo "Resultado: $sum";
    echo "</br>";
}
