<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //protected private public Investigar
    //eloquent
    //querybuilder

    protected $table = "usuarios";
    protected $primaryKey = "id";
    protected $fillable = ['name', 'lastname', 'email'];
    
}
