<?php

function imprimirEstudios()
{
    echo "<h2>Estudios</h2>";

    $estudios = ['Carrera:' => ['Tecnólogia en Desarrollo de Software', 'Escuela Tecnologica Instituto Tecnico Central', 'Segundo semestre (Cursando)'], 'Segunda: ' => ['Diseño Industrial' , 'SENA', 'Finalizado']];
    foreach ($estudios as $key => $value) {
        for ($i = 0; $i < count($value); $i++) {
            echo "$value[$i] </br>";
        }
        echo "</br>";
    }
}

