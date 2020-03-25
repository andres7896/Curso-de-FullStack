<?php
  
  include_once ('tecnologias.php');
  include_once ('estudios.php');
  include_once('experiencia.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <header>
            <div class="cont-img">
               <img src="img/foto.png" alt="">
            </div>
            <div class="cont-nombre">
                <h1>Bryam Alfonso Piñeros Hernández</h1>
                <p>Diseñador industrial / Estudiante Sistemas</p>
            </div>
        </header>
        <main>
            <div class="perfil">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum omnis dolore laudantium excepturi suscipit molestiae aut temporibus, ipsum dicta quae fugit quibusdam, illum esse tenetur inventore ipsam labore pariatur! Debitis?</p>
            </div>
            <div class="tecnologias">
            <?php imprimirTecnologias() ?>
            </div>
            <div class="estudios">
                <?php imprimirEstudios()   ?>
            </div>
            <div class="experiencia">
            <?php imprimirExperiencia()  ?>
            </div>
        </main>
    </div>
</body>

</html>