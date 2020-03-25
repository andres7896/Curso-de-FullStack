<?php
include('People.php');
$people = new People();
$person = $people->getPerson($_GET['id']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crear Persona</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col-sm col">
        <?= $person->firstName ?> <?= $person->lastName ?>
        <br /><?= $person->email ?>
        <br /><?= $person->profession ?>
      </div>
      <div class="col-sm col">
        <img src='<?= $people->root ?>/images/<?= $person->urlImage ?>' alt='Imagen' width='100' height='100' />
      </div>
    </div>
    <div class="row">
      <div class="col-sm col">
        <p>
          <?= $person->profile ?>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm col">
        <?php include($_SERVER['DOCUMENT_ROOT'] . '/adminToPeople/WorkExperiences/add.php'); ?>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="../scripts.js" ></script>
</body>

</html>