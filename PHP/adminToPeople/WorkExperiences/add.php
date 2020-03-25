<?php
include('WorkExperiences.php');
$WorkExperiences = new WorkExperiences();
// var_dump($_POST);
if ( isset($_GET) && !empty($_GET)){
  $id = $_GET['id'];
}else{
  $id = $_POST['idPerson'];
}
$allWe = $WorkExperiences->getAllWorkExperiences($id);

$ee = mysqli_fetch_object($WorkExperiences->getLastOneExperience(1));
//var_dump($ee);



if (isset($_POST) && !empty($_POST)) {
  header('Content-Type: application/json');
  header("HTTP/1.1 200 OK");
  $WorkExperiences->save($_POST);
  $ee = mysqli_fetch_object($WorkExperiences->getLastOneExperience($_POST['idPerson'])) ;
  echo json_encode($ee);
} else {
?>

<div class="container">
    <h1> Registrar nueva experiencia </h1>
    <form id="WorkExperiences" >

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="company">Empresa</label>
          <input type="text" class="form-control" id="company" name="company" placeholder="Empresa" required max="50">
        </div>
        <div class="form-group col-md-6">

          <label for="city">Ciudad</label>
          <input type="text" class="form-control" id="city" name="city" placeholder="Ciudad" required max="50">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="workTime">Tiempo trabajado</label>
          <input type="text" class="form-control" id="workTime" name="workTime" placeholder="Tiempo trabajado" required max="50">
        </div>
        <div class="form-group col-md-6">
          <label for="workPosition">Cargo</label>
          <input type="text" class="form-control" id="workPosition" name="workPosition" placeholder="Cargo" required max="100">
          <input type="hidden" id="idPerson" name="idPerson" value="<?= $_GET['id'] ?>" />
        </div>
      </div>
 
      <div class="clearfix">
        <button  type="button" class="btn btn-success float-left" onclick="addWorkExperience();" >Crear</button>
        <a href='<?= $people->root ?>' class="btn btn-danger float-right">Volver </a>
      </div>
    </form>
    <br>

    <h2> Experiencias </h2>

    <table class="table" id='allExperiences'>
      <tr>
        <th> Empresa </th>
        <th> Ciudad </th>
        <th> Cargo </th>
        <th> Duración </th>
        <th> Módificar </th>
        <th> Eliminar </th>
      </tr>
      <?php while( $experience = mysqli_fetch_object($allWe) ){
        echo "<tr id='exp_$experience->id'>";
        echo "<td> $experience->company </td>";
        echo "<td> $experience->city </td>";
        echo "<td> $experience->workTime </td>";
        echo "<td> $experience->workPosition </td>";
        echo " <td> <a href='../WorkExperiences/edit.php?id=$experience->id' > Módificar </a> </td> ";
        echo " <td> <a href='../WorkExperiences/delete.php?id=$experience->id' > Eliminar </a> </td> ";
        echo "</tr>";
      } ?>
    </table>
  </div>
<?php
}