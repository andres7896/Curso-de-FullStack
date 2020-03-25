<?php 

    class Database{
        private $server = 'localhost';
        private $db = 'miprimeraapp';
        private $username = 'root';
        private $pass = '';
        private $conn;

        //Funcion que conecta a nuestra base e datos
        //return conn.
        function conectarse(){
            $this->conn = mysqli_connect($this->server, $this->username, $this->pass, $this->db);
            if (mysqli_connect_error()) {
                echo "Erro: " . mysqli_connect();
            }else{
                //echo "Si nos conectamos";
            }
            return $this->conn;
        }
    }
?>