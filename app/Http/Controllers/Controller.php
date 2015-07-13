<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    //

    public function main()
    {


        return view('layout', ['date' => '07.07.2015']);
    }


    public function send(Request $request)
    {
        $content   = $request->input('content');
        $content2  = $request->input('content2');
        $emailTo   = $request->input('emailTo');
        $emailFrom = $request->input('emailFrom');

        $content .= "\n" . $content2;

        $headers = 'From: ' . $emailFrom . "\r\n" .
            'Reply-To: ' . $emailFrom . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        $result  = mail($emailTo, 'Time log provided by TimeTool TM', $content, $headers);
        $result2 = mail($emailFrom, 'Time log provided by TimeTool TM', "This is a copy of your timelog report that was sent to " . $emailTo . "\n\n" . $content, $headers);

        return response()->json(['result' => $result]);
    }
}
