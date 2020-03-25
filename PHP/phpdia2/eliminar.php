<?php
    if (isset($_GET['id'])) {
        require('persona.php');
        $persona = new Personas();
        $eliminar = $persona->eliminarUsuario($_GET['id']);
        if ($eliminar) {
            header('location: index.php');
        }else{
            echo "Error al eliminar";
        }
    }
?>