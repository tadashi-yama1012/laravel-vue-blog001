<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'body', 'date', 'entry_id'];
    public $timestamps = false;

    public function entry()
    {
        return $this->belongsTo('App\Entry');
    }

    public function getAll() 
    {
        return $this->all();
    }

}
