<h1> Todas las personas </h1>



<table class="table" >

<tr>
  <th> Nombres </th>
  <th> Apellidos </th>
  <th> Email </th>
  <th> Profesión </th>
  <th> Perfil </th>
  <th> Imagen </th>
  <th> Ver </th>
</tr>

<?php 
include('People.php');
$people = new People();

$rr = $people->getAllPeople();

while($p = mysqli_fetch_object($rr)){
  echo " <tr> ";
  echo " <td> $p->firstName</td> ";
  echo " <td> $p->lastName </td> ";
  echo " <td> $p->email </td> ";
  echo " <td> $p->profession </td> ";
  echo " <td> $p->profile </td> ";
  echo " <td> <img src='$people->root/images/$p->urlImage' alt='Imagen' width='50' height='50' /> </td> ";
  echo " <td> <a href='People/index.php?id=$p->id' > Ver </a> </td> ";
  echo " </tr> ";
}
?>

</table>