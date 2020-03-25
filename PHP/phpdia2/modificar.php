<?php
    include('persona.php');
    $persona = new Personas();
    $dp = $persona->obtenerPersona($_GET['id']); 

    if ( isset($_POST) && !empty($_POST)) {
        $modificar = $persona->modificarUsuario($_POST);
        if ($modificar) {
            echo "Modificar exitosa";
        }else{
            echo "Error!";
        }
    }
?>


<form  method="POST">
        <label for="">Nombre</label>
        <input name='nombres' id="nombres" type="text" placeholder="Ingresa tu nombre" require value="<?= $dp->nombres ?>">
        </br>
        <label for="">Apellido</label>
        <input name='apellidos' id='apellidos' type="text" placeholder="Ingresa tu apellido" require value="<?= $dp->apellidos ?>">
        </br>
        <label for="profesion">Profesión</label>
        <input name='profesion' id='profesion' placeholder="Ingresa tu profesion" require value="<?= $dp->profesion ?>">
        </br>
        <label>Descripción</label>
        <textarea name="descripcion" id="descripcion"><?= $dp->descripcion ?></textarea>
        </br>
        <input type="hidden" name="id" value="<?= $dp->id?>">
        <br><br>
        <button>Modificar</button>
</form>        