<?php

    include('Database.php');

    class Personas{

        /*
        *   Atributos 
        */ 
        public $id;
        public $nombres;
        public $apellidos;
        public $profesion;
        public $descripcion;
        public $conn;

        /** 
         * Métodos por donde empieza nuestra clase
        */ 

        function __construct(){
            $db = new Database();
            $this->conn = $db->conectarse();
        }

        function crearPersona($data){
            $nombre = $data['nombres'];
            $apellido = $data['apellidos'];
            $profesion = $data['profesion'];
            $descripcion = $data['descripcion'];

            $sql = "INSERT INTO personas (nombres, apellidos, profesion, descripcion) VALUES ('$nombre', '$apellido', '$profesion', '$descripcion')";
            $res = mysqli_query($this->conn, $sql);

            if ($res) {
                return true;
            }else{
                return false;
            }
        }

        function obtenerPersonas(){
            $sql = "SELECT * FROM Personas ";
            return mysqli_query($this->conn, $sql);
        }

        function obtenerPersona($id){
            $sql = "SELECT * FROM Personas WHERE id=$id";
            return mysqli_fetch_object(mysqli_query($this->conn, $sql));
        }

        function modificarUsuario($data){
            $id = $data['id'];
            $nombre = $data['nombres'];
            $apellido = $data['apellidos'];
            $profesion = $data['profesion'];
            $descripcion = $data['descripcion'];

            $sql = "UPDATE Personas SET nombres = '$nombre', apellidos='$apellido', profesion='$profesion', descripcion = '$descripcion'
                    WHERE id=$id ";
            $update = mysqli_query($this->conn, $sql);

            if ($update) {
                return true;
            }else{
                return false;
            }
        }

        function eliminarUsuario($id){
            $sql = "DELETE FROM Personas WHERE id = $id ";
            return mysqli_query($this->conn, $sql);
        }
    }
?>