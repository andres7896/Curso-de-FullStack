<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/adminToPeople/config.php');
include_once(PATH . '/Database.php');
class WorkExperiences
{
  public $conn;
  public $root = ROOT;
  public $path = PATH;
  function __construct()
  {
    $db = new Databse();
    $this->conn =  $db->__construct();
  }

  function save($data)
  {
    $company = $data['company'];
    $city = $data['city'];
    $workTime = $data['workTime'];
    $workPosition = $data['workPosition'];
    $idPerson = $data['idPerson'];
    $insert = " INSERT INTO WorkExperiences (company, city, workTime, workPosition, idPerson) VALUES ('$company', '$city', '$workTime', '$workPosition', $idPerson ) ";
    return mysqli_query($this->conn, $insert);
  }

  function getAllWorkExperiences($id){
    $sql = " SELECT * FROM WorkExperiences WHERE idPerson=$id  ";
    return mysqli_query($this->conn, $sql);
  }

  function getLastOneExperience($id){
    $sql = " SELECT * FROM WorkExperiences WHERE idPerson=$id ORDER BY Id DESC LIMIT 1";
    return mysqli_query($this->conn, $sql);
  }
}