<?php

    include('persona.php');//Llamamos al archivo
    $persona = new Personas(); //Creamos una nueva instancia de persona

    if ( isset($_POST) && !empty($_POST) ) {
        $insert = $persona->crearPersona($_POST);
        if ($insert) {
            echo "Registro exitoso";
        }else{
            echo "Fallo... ";
        }
    }

    $todasLasPersonas = $persona->obtenerPersonas();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <form  method="POST" class="w-75 p-3">
        <div class="form-group">
            <label for="">Nombre</label>
            <input name='nombres' id="nombres" type="text" placeholder="Ingresa tu nombre" require class="form-control">
        </div>
        <div class="form-group">
            <label for="">Apellido</label>
            <input name='apellidos' id='apellidos' type="text" placeholder="Ingresa tu apellido" require class="form-control">
        </div>
        <div class="form-group">
            <label for="profesion">Profesión</label>
            <input name='profesion' id='profesion' placeholder="Ingresa tu profesion" require class="form-control">
        </div>
        <div class="form-group">
            <label>Descripción</label>
            <textarea name="descripcion" id="descripcion" class="form-control"></textarea>
        </div>
        <button class="btn btn-primary">Enviar</button>
        <br/>
        <br>
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <th scope="col">Nombres</th>
                    <th scope="col">apellidos</th>
                    <th scope="col">Profesión</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                </thead>

                <?php
                    while ($pers = mysqli_fetch_object($todasLasPersonas)) {
                        echo "<tr>";
                        echo "<td scope='row'>$pers->nombres</td>";
                        echo "<td scope='row'>$pers->apellidos</td>";
                        echo "<td scope='row'>$pers->profesion</td>";
                        echo "<td scope='row'>$pers->descripcion</td>";
                        echo "<td scope='row'> <a href='modificar.php?id=$pers->id'>Modificar</a> </td>";
                        echo "<td scope='row'> <a href='eliminar.php?id=$pers->id'>Eliminar</a> </td>";
                        echo "</tr>";
                    }
                ?>
            </table>
        </div>
    </form>
</body>
</html>