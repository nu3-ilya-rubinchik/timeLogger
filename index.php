<?php

$delay = 100000;

echo "\n\nWelcome to NU3 IT time logger\n\n"; usleep($delay);
echo "All rights reserved and bla-bla\n"; usleep($delay);
echo "This peace of product would be never possible without help from next people:\n"; usleep($delay);
echo "1. The guy who came up with idea of tracking time in IT department\n"; usleep($delay);
echo "2. Humble developers who worked to make this peace of software happen.\n\n";

$line = "-------------------------============================-------------------------\n";
echo $line;usleep($delay);

$dateTime = new DateTime();

$date = $dateTime->format('Y-m-d');
echo "By default current date is used (" . $date . ")\n"; usleep($delay);
echo "Please enter the time when you started your day:\n"; usleep($delay);
echo "The format is: hh:mm (example 08:00)\n";
$startDay = validatedUserInput(function ($line) {
    return validateTimeInput($line);
});

echo $line;

echo "Now let`s go through the FIRST part of your day\n"; usleep($delay);
echo "Please list all things you did in next way:\n"; usleep($delay);
echo "what@how-long\n"; usleep($delay);
echo "Example: \"FD-1234@1.5\" - means I worked on ticket FD-1234 for 1.5 hours.\n"; usleep($delay);
echo "Example 2: \"m@0.25\" - I was at meeting for 15 min.\n"; usleep($delay);
echo "Example 3:\"r@3\" - I was watching youtube for 3 hours. (research)\n"; usleep($delay);
echo "---> When you are done with tasks just leave field empty\n"; usleep($delay);
//echo "Now please enter here what you did:";
$firstPart = [];
while($task = validatedUserInput(function ($line) {
    return validateTask($line);
}, "Please enter here what you did: ")) {
    $firstPart[] = $task;
}

echo $line;usleep($delay);
echo "\nPlease enter the time when you started your Lunch:\n"; usleep($delay);
$lunchStart = validatedUserInput(function ($line) {
    return validateTimeInput($line);
});

echo "\nPlease enter the time when you ended your Lunch:\n"; usleep($delay);
$lunchEnd = validatedUserInput(function ($line) {
    return validateTimeInput($line);
});

echo "Ok let`s go now through your tasks after lunch\n"; usleep($delay);
echo "We will do it in the same way as before\n"; usleep($delay);

$secondPart = [];
while($task = validatedUserInput(function ($line) {
    return validateTask($line);
}, "Please enter here what you did: ")) {
    $secondPart[] = $task;
}

$email = 'timetracker@nu3.com';
echo "By default email will be sent to $email.\n"; usleep($delay);
echo "If you ok with this one just leave next field empty\n"; usleep($delay);
echo "Or provide other email if you wish so\n"; usleep($delay);

$newEmail = validatedUserInput(function ($line) {
    return validateEmail($line);
});
if ($newEmail) {
    $email = $newEmail;
}

echo "Now please provide your email\n"; usleep($delay);
echo "So that we know who sent this email\n"; usleep($delay);

$sender = validatedUserInput(function ($line) {
    return validateEmail($line);
});

$dateTime = new DateTime();
$dateTime->modify('+5 minutes');

$firstPart = convertTasks($firstPart);
$secondPart = convertTasks($secondPart);
$content = "$date $startDay:00;$date $lunchStart:00;" . implode(',', $firstPart) . "\n";
$content .= "$date $lunchEnd:00;$date " . $dateTime->format('H:i') .":00;" . implode(',', $secondPart);

echo "\nNext content would be sent:\n"; usleep($delay);
echo $line;usleep($delay);
echo $content . "\n";
echo $line;usleep($delay);

echo "\nIf you are happy with this email press enter one more time\n"; usleep($delay);
echo "If you don't want to send this email type 'Please don't send this email'.\n"; usleep($delay);
echo "Any other input for this field will crush you PC, format your disk and put a curse on your entire family tree.\n"; usleep($delay);

$dontSend = validatedUserInput(function ($line) {
    return true;
});
if ($dontSend) {
    die;
}

$headers = 'From: ' . $sender . "\r\n" .
    'Reply-To: ' . $sender . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$result = mail($email, 'Time log provided by TimeTool TM', $content, $headers);

if ($result) {
    echo "The email was sent\n";
}

function validateTimeInput($input) {
    if (strlen($input) > 5 || strlen($input) < 4) {
        echo "Input is too long or short\n";
        return false;
    }
    $exploded = explode(':', $input);
    if (count($exploded) != 2) {
        echo "The format is wrong\n";
        return false;
    }
    if ((int) $exploded[0] < 6 || (int) $exploded[0] > 18) {
        echo "Your work hours are wrong\n";
        return false;
    }
    if ((int) $exploded[1] < 0 || (int) $exploded[1] > 59) {
        echo "Your minutes are wrong\n";
        return false;
    }
    return true;
}

function validateEmail($input) {
    return true;
}

function validateTask($input) {
    if (empty($input)) {
        return true;
    }
    $exploded = explode('@', $input);
    if (count($exploded) != 2) {
        echo "The format is wrong. Please use \"@\" to separate task and time\n";
        return false;
    }
    if ($exploded[0] != 'm' && $exploded[0] != 'r') {
        // it is ticket

    }
    if ((double) $exploded[1] < 0 || (double) $exploded[1] > 10) {
        echo "time is wrong\n";
        return false;
    }
    return true;
}

function validatedUserInput($validator, $message = "") {
    $line = readline($message);
    if (!$validator($line)) {
        return validatedUserInput($validator);
    }
    return $line;
}

function convertTasks($list) {
    foreach ($list as &$task) {
        list($name, $time) = explode('@', $task);
        if ($name == 'm') {
            $name = 'meeting';
        } else if($name == 'r') {
            $name = 'research';
        }
        $task = '#' . $name . '@' . $time;
    }
    return $list;
}