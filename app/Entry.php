<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'title', 'body', 'date'];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getAll() 
    {
        return $this->all();
    }

}
