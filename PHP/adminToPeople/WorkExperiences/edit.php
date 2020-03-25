<?php
    include('WorkExperiences.php');
    $workexperience = new WorkExperiences();
    $dp = $workexperience->getAllWorkExperiences($_GET['id']); 

    if ( isset($_POST) && !empty($_POST)) {
        $modificar = $workexperience->updateWorkExperiences($_POST);
        if ($modificar) {
            echo "Modificar exitosa";
        }else{
            echo "Error!";
        }
    }
?>

<form  method="POST">
        <label for="empresa">Empresa</label>
        <input name='empresa' id="empresa" type="text" placeholder="Ingresa tu empresa" require value="<?= $dp->company ?>">
        </br>
        <label for="ciudad">Ciudad</label>
        <input name='ciudad' id='ciudad' type="text" placeholder="Ingresa tu ciudad" require value="<?= $dp->city ?>">
        </br>
        <label for="cargo">Cargo</label>
        <input name='cargo' id='cargo' placeholder="Ingresa tu cargo" require value="<?= $dp->cargo ?>">
        </br>
        <label for="duración">Duración</label>
        <input name='duración' id='duración' placeholder="Ingresa tu duración" require value="<?= $dp->duracion ?>">
        </br>
        <input type="hidden" name="id" value="<?= $dp->id?>">
        <br><br>
        <button>Modificar</button>
</form> 