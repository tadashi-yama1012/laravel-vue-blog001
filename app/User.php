<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    
    public function entries() 
    {
        return $this->hasMany('App\Entry');
    }

}
