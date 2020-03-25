<?php
include($_SERVER['DOCUMENT_ROOT'] . '/adminToPeople/config.php');
include(PATH . '/Database.php');
class People
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
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $profession = $data['profession'];
    $profile = $data['profile'];
    $urlImage = $data['urlImage'];
    $insert = " INSERT INTO People (firstName, lastName, email, profession, profile, urlImage) VALUES ('$firstName', '$lastName', '$email', '$profession', '$profile', '$urlImage' ) ";
    return mysqli_query($this->conn, $insert);
  }

  function getAllPeople(){
    $sql = " SELECT * FROM People ";
    //return mysqli_fetch_object( mysqli_query($this->conn, $sql) );
    return mysqli_query($this->conn, $sql);
  }

  function getPerson($id){
    $sql = " SELECT * FROM People WHERE id=$id ";
    return mysqli_fetch_object(mysqli_query($this->conn, $sql));
  }
}
