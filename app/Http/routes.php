<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//$app->get('/', function () use ($app) {
//    return $app->welcome();
//});

$app->get('/', [
    'as' => 'main', 'uses' => 'Controller@main'
]);
$app->post('/send', [
    'as' => 'send', 'uses' => 'Controller@send'
]);
//$app->get('send', function () use ($app) {
//    return $app->welcome();
//});
