<?php

    include('experiencia.php');//Llamamos al archivo
    $experiencia = new Experiencia(); //Creamos una nueva instancia de persona

    if ( isset($_POST) && !empty($_POST) ) {
        $insert = $experiencia->crearExperiencia($_POST);
        if ($insert) {
            echo "Registro exitoso";
        }else{
            echo "Fallo... ";
        }
    }

    $todasLasExperiencias = $experiencia->obtenerExperiencias();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Experiencias</title>
</head>

<body>
    <form  method="POST" class="w-75 p-3">
        <div class="form-group">
            <label for="empresa">Empresa</label>
            <input name='empresa' id="empresa" type="text" placeholder="Ingresa su Empresa" require class="form-control">
        </div>
        <div class="form-group">
            <label for="cargo">Cargo</label>
            <input name='cargo' id='cargo' type="text" placeholder="Ingresa su Cargo" require class="form-control">
        </div>
        <div class="form-group">
            <label for="ciudad">Ciudad</label>
            <input name='ciudad' id='ciudad' placeholder="Ingresa la ciudad" require class="form-control">
        </div>
        <div class="form-group">
            <label>Duración</label>
            <input type="date" name="duracion" id="duracion" placeholder="Ingrese la duración" require class="form-control">
        </div>
        <div class="form-group">
            <label>idPersona</label>
            <input type="number" name="idPersona" id="idPersona" placeholder="Ingrese el id de la Persona" require class="form-control">
        </div>
        <button class="btn btn-primary">Enviar</button>
        <br>
        <br>
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <th scope="col">Empresa</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Duración</th>
                    <th scope="col">IdPersona</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                </thead>

                <?php
                    while ($expr = mysqli_fetch_object($todasLasExperiencias)) {
                        echo "<tr>";
                        echo "<td scope='row'>$expr->empresa</td>";
                        echo "<td scope='row'>$expr->cargo</td>";
                        echo "<td scope='row'>$expr->ciudad</td>";
                        echo "<td scope='row'>$expr->duracion</td>";
                        echo "<td scope='row'>$expr->idPersona</td>";
                        echo "<td scope='row'> <a href='modificar.php?id=$expr->id'>Modificar</a> </td>";
                        echo "<td scope='row'> <a href='eliminar.php?id=$expr->id'>Eliminar</a> </td>";
                        echo "</tr>";
                    }
                ?>
            </table>
        </div>
    </form>
</body>
</html>