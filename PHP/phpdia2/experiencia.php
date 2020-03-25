<?php

    include('Database.php');

    class Experiencia{
        public $id;
        public $empresa;
        public $ciudad;
        public $duracion;
        public $cargo;
        public $idPersona;
        public $conn;

        function __construct(){
            $db = new Database();
            $this->conn = $db->conectarse();
        }

        function crearExperiencia($data){
            $empresa = $data['empresa'];
            $ciudad = $data['ciudad'];
            $cargo = $data['cargo'];
            $duracion = $data['duracion'];
            $idPersona = $data['idPersona'];

            $sql = "INSERT INTO Experiencias (empresa, ciudad, duracion, cargo, idPersona) 
                    VALUES ('$empresa', '$ciudad', '$duracion', '$cargo', '$idPersona')";
            $res = mysqli_query($this->conn, $sql);

            if ($res) {
                return true;
            }else{
                return false;
            }
        }

        function obtenerExperiencias(){
            $sql = "SELECT * FROM Experiencias";
            return mysqli_query($this->conn, $sql);
        }

        function obtenerExperiencia($id){
            $sql = "SELECT * FROM Experiencias WHERE id=$id";
            return mysqli_fetch_object(mysqli_query($this->conn, $sql));
        }

        function modificarExperiencia($data){
            $id = $data['id'];
            $empresa = $data['empresa'];
            $ciudad = $data['ciudad'];
            $cargo = $data['cargo'];
            $duracion = $data['duracion'];
            $idPersona = $data['idPersona'];

            $sql = "UPDATE Experiencias SET empresa = '$empresa', ciudad='$ciudad', cargo='$cargo', duracion = '$duracion', idPersona = '$idPersona'
                    WHERE id=$id ";
            $update = mysqli_query($this->conn, $sql);

            if ($update) {
                return true;
            }else{
                return false;
            }
        }

        function eliminarUsuario($id){
            $sql = "DELETE FROM Experiencias WHERE id = $id ";
            return mysqli_query($this->conn, $sql);
        }
    }
?>