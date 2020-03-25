<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crear Persona</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<?php
include('People.php');
$people = new People();
if (isset($_POST) && !empty($_POST)) {

  $_POST['urlImage'] = '';
  if (isset($_FILES['urlImage'])) {
    $errors = array();
    $file_name = str_replace(' ', '', $_FILES['urlImage']['name']);
    $file_tmp = $_FILES['urlImage']['tmp_name'];
    $_POST['urlImage'] = $file_name;
    

    move_uploaded_file($file_tmp, $_SERVER['DOCUMENT_ROOT'] . '/adminToPeople/images/' . $_POST['urlImage']);
  }

  echo ($people->save($_POST)) ? '<div class="alert alert-success" role="alert">Registro exitoso</div>' : '<div class="alert alert-danger" role="alert">Error al registrar</div>';
}
?>

<body>

  <div class="container">
    <h1> Registrar nueva persona </h1>
    <form method="POST" enctype="multipart/form-data">

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="firstName">Nombres</label>
          <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Nombres" required max="50">
        </div>
        <div class="form-group col-md-6">

          <label for="lastName">Apellidos</label>
          <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Apellidos" required max="50">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="email@email.com" required max="50">
        </div>
        <div class="form-group col-md-6">
          <label for="profession">Profesión</label>
          <input type="text" class="form-control" id="profession" name="profession" placeholder="Profesión" required max="100">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="profile">Perfil</label>
          <textarea class="form-control" id="profile" name="profile" placeholder="Perfil" required></textarea>
        </div>
      </div>

      <input type="file" id="urlImage" name="urlImage" accept="image/png, image/jpeg" required />

      <div class="clearfix">
        <button class="btn btn-success float-left">Crear</button>
        <a href='<?= $people->root ?>' class="btn btn-danger float-right">Volver </a>
      </div>
    </form>
  </div>

</body>

</html>