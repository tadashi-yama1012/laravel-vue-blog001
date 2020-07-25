<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entries extends Model
{
    protected $fillable = ['user_id', 'title', 'body', 'date'];
    public $timestamps = false;
}
