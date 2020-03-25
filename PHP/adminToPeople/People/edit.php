<?php
    echo('Hola');
?>

<form  method="POST">
        <label for="">Nombres</label>
        <input name='nombres' id="nombres" type="text" placeholder="Ingresa tu nombre" require value="<?= $dp->nombres ?>">
        </br>
        <label for="">Apellidos</label>
        <input name='apellidos' id='apellidos' type="text" placeholder="Ingresa tu apellido" require value="<?= $dp->apellidos ?>">
        </br>
        <label for="email">Email</label>
        <input name='email' id='email' placeholder="Ingresa tu email" require value="<?= $dp->profesion ?>">
        </br>
        <label for="profesion">Profesión</label>
        <input name='profesion' id='profesion' placeholder="Ingresa tu profesion" require value="<?= $dp->profesion ?>">
        </br>
        <label for="perfil">Perfil</label>
        <input name='perfil' id='perfil' placeholder="Ingresa tu perfil" require value="<?= $dp->profesion ?>">
        </br>
        <label>Descripción</label>
        <textarea name="descripcion" id="descripcion"><?= $dp->descripcion ?></textarea>
        </br>
        <input type="hidden" name="id" value="<?= $dp->id?>">
        <br><br>
        <button>Modificar</button>
</form> 