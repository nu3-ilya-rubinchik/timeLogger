<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    //

    public function main()
    {


        return view('layout', ['date' => '07.07.2015']);
    }
}
