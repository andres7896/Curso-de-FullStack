<?php

function imprimirTecnologias()
{
    echo "<h2>Tecnologias</h2>";
    $tecnologias = ['Html', 'CSS', 'JavaScript', 'Java', 'Git', 'GitHub'];
    for ($i = 0; $i < count($tecnologias); $i++) {
        echo "$tecnologias[$i] </br>";
    }
    return $tecnologias;
}
