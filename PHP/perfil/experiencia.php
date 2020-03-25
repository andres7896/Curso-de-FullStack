<?php

function imprimirExperiencia()
{
    echo "<h2>Experiencia</h2>";
    
    $trabajo = [
        'trabajo1:' =>
        ['Cargo: ' => 'Diseñador Gráfico', 'Empresa: ' => 'BETEL Publicidad', 'Duración: ' => '6 meses'],
        ['Cargo: ' => 'Diseñador Industrial', 'Empresa: ' => 'Capitalizaciones Mercantiles', 'Duración: ' => '6 meses']
    ];
    foreach ($trabajo as $key => $value) {
        foreach ($value as $exp => $conTrabajo) {
            echo "<b>$exp</b> $conTrabajo </br>";
        }
        echo "</br>";
    }
}

 /*
    $data = '';
    foreach($array as $key => $value){
        $data .= " $key = ";
        for ($i=0; $i < count($value) ; $i++) { 
            $data .= "<br/>";
        }
    }*/
