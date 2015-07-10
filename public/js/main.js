function rand(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

delayTime300 = 300;
delayTime400 = 300;
delayTime500 = 500;
delayTime600 = 600;
delayTime800 = 800;
delayTime1000 = 1000;
delayTime1200 = 1200;
delayTime1800 = 1800;
delayTime2000 = 2000;

content = '';
content2 = '';

function microtime(get_as_float) {
    //  discuss at: http://phpjs.org/functions/microtime/
    // original by: Paulo Freitas
    //   example 1: timeStamp = microtime(true);
    //   example 1: timeStamp > 1000000000 && timeStamp < 2000000000
    //   returns 1: true

    var now = new Date()
            .getTime() / 1000;
    var s = parseInt(now, 10);

    return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
}


$(document).ready(function() {
    $('#activate-button').on('click', function() { startLogging() })

    //$(document).bind('keydown', 'ctrl+space', function () { $('#UIDesignerMenu').toggle(); });
    //$(document).bind('keydown', 'up', function () { changeControlValue(1); });
    //$(document).bind('keydown', 'down', function () { changeControlValue(-1); });
    //$(document).bind('keydown', 'ctrl+l', function () { savePage(); });
    $(document).bind('keyup', 't', function () { var el = addTicket(); if (el) el.find('input').val('');});
    $(document).bind('keyup', 'm', function () { var el = addMeeting(); if (el) el.find('input').val('');});
    $(document).bind('keyup', 'r', function () { var el = addResearch(); if (el) el.find('input').val('');});
    $(document).bind('keydown', 'return', function () { enterPressed(); });
    $('input').on('keypress', function(e) {
        //console.info(e.keyCode);
        switch (e.keyCode) {
            case 13: //enter
                enterPressed();
                break;
        }
    });

    $('body').on('click', '#donotpress', function() {
        alert('CUUUUUUUUUUUURRRRRSE!!!!!');
    });
});

loggerStep = 0;


function startLogging() {
    loggerStep++;
    $('#index-banner').delay(delayTime400).slideUp(delayTime500);
    $('#form').delay(delayTime1000).slideDown(delayTime500, function() {

        var date = $('#current-date').val();

        var queue = [
            {text:'        Welcome to NU3 IT time logger', el:$('#text-area11'), options:{'duration':delayTime800, 'mistakes':20}},
            {text:'All rights reserved and bla-bla', el:$('#text-area12'), options:{'duration':delayTime800}},
            {text:'This piece of product would be never possible without help from the following people:', el:$('#text-area13'), options:{'duration':delayTime400}},
            {text:'1. The guy who came up with idea of tracking time in the IT department', el:$('#text-area14'), options:{'duration':delayTime400}},
            {text:'2. Humble developers who worked hard to make this piece of software happen.', el:$('#text-area15'), options:{'duration':delayTime400}},
            {text:'But let\'s cut to the chase and log some time!', el:$('#text-area16'), options:{'duration':delayTime2000}},
            {text:'By default the current date is used (' + date + ')', el:$('#text-area17'), options:{'duration':delayTime600}},
            {text:'Please enter the time when you started your day here', el:$('#text-area18'), options:{'duration':delayTime600}}
        ];
        pasteText('Hello my little fella!', $('#text-area11'), {'duration':delayTime1000, 'queue':queue});
        $('#start-day-block').delay((delayTime800 * 2) + (delayTime400 * 3) + delayTime2000 + (delayTime600 * 2) + delayTime1000).slideDown(300, function() {$('#day-start-time').focus()});
    });
}

function goForLunch() {
    loggerStep++;
    $('#logger-step-1').slideUp(delayTime500, function() {
        //Please enter the time when you started your Lunch:
        var queue = [
            {text: 'Please enter the time when you started your Lunch:', el: $('#text-area22'), options: {'duration': delayTime800}}
        ];
        pasteText('We at team Awesome hope that you had a nice lunch with your colleagues!', $('#text-area21'), {'duration': delayTime800, 'queue': queue});
        $('.step-2-controls').delay(delayTime800 * 2).slideDown(delayTime300, function() {
            $('#start-lunch-time').focus();
        });
    })
}

function firstPartOfDay() {

    loggerStep++;

    $('#logger-step-2').slideUp(delayTime500, function() {
        var queue = [
            {text: 'Please list all things you did in next way:', el: $('#text-area32'), options: {'duration': delayTime800}},
            {text: 'what@how-long', el: $('#text-area33'), options: {'duration': delayTime800}},
            {
                text: 'Example: \"FD-1234@1.5\" - means I worked on ticket FD-1234 for 1.5 hours.',
                el: $('#text-area34'),
                options: {'duration': delayTime600}
            },
            {
                text: 'Example 2: \"m@0.25\" - I was at meeting for 15 min.',
                el: $('#text-area35'),
                options: {'duration': delayTime600}
            },
            {
                text: 'Example 3:\"r@3\" - I was watching youtube for 3 hours. (research)',
                el: $('#text-area36'),
                options: {'duration': delayTime600}
            },
            {
                text: 'Now go and list your tasks',
                el: $('#text-area37'),
                options: {'duration': delayTime2000}
            }
        ];
        pasteText('Now let`s go through the FIRST part of your day', $('#text-area31'), {'duration': delayTime1200, 'queue': queue});
        $('.step-3-controls').delay(delayTime1200 + delayTime2000 + (delayTime600 * 3) + (delayTime800 * 2)).slideDown(delayTime300);
    });
}



function endLunch() {
    loggerStep++;
    $('#logger-step-3').slideUp(delayTime300, function() {
        pasteText('Please enter the time when you ended your Lunch:', $('#text-area41'), {'duration': delayTime1200});
        $('.step-4-controls').delay(delayTime1200).slideDown(delayTime300, function() {
            $('#end-lunch-time').focus();
        });
    });
}

function secondPartOfDay() {
    loggerStep++;
    $('#logger-step-4').slideUp(delayTime500, function() {
        pasteText('Now please do the same as you did for the first part:', $('#text-area51'), {'duration': delayTime1200});
        $('.step-5-controls').delay(delayTime1200).slideDown(300);
    });
}

function finishDay() {
    loggerStep++;
    $('#logger-step-5').slideUp(delayTime500, function() {
        var queue = [
            {text: 'Now let`s talk about email. Do you want us to send it to timetracker@nu3.com?', el: $('#text-area62'), options: {'duration': delayTime1200}}
        ];
        pasteText('We will use current time as the end time of your day (+5 minutes)', $('#text-area61'), {'duration': delayTime800, 'queue': queue});
        $('.step-6-controls').delay(delayTime1200 + delayTime800).slideDown(delayTime300);
    });
}

function targetEmailSet() {
    loggerStep++;
    $('#logger-step-6').slideUp(delayTime500, function() {
        pasteText('Sorry, I forgot what is your email? No spam. I promise! ...! Ok! Maybe a little bit!', $('#text-area71'), {'duration': delayTime1200});
        $('.step-7-controls').delay(delayTime1200).slideDown(delayTime300, function() {
            $('#email-from').focus();
        });
    });
}

function fromEmailSet() {
    loggerStep++;
    var startDayTime   = $('#day-start-time').val();
    var lunchStartTime = $('#start-lunch-time').val();
    var lunchEndTime = $('#end-lunch-time').val();
    var firstPartOfDay = getTasks(3);
    var secondPartOfDay = getTasks(5);

    var dateObject = new Date();
    var date = dateObject.toMysqlFormatDate();
    //$firstPart = convertTasks($firstPart);
    //$secondPart = convertTasks($secondPart);
    content = date + " " + startDayTime + ":00;" + date + " " + lunchStartTime + ":00;" + firstPartOfDay.join(',');
    console.info(content);
    content2 = date + " " + lunchEndTime + ":00;" + date + " " + twoDigits(dateObject.getUTCHours()) + ":" + twoDigits(dateObject.getUTCMinutes() + 5) + ":00;" + secondPartOfDay.join(',')
    console.info(content2);

    $('#logger-step-7').slideUp(delayTime500, function() {
        var queue = [
            {text: '=======================================================', el: $('#text-area82'), options: {'duration': delayTime400}},
            {text: content, el: $('#text-area83'), options: {'duration': delayTime600}},
            {text: content2, el: $('#text-area84'), options: {'duration': delayTime600}},
            {text: '=======================================================', el: $('#text-area85'), options: {'duration': delayTime400}},
        ];
        pasteText('Here we are! The report is ready! And it looks like:', $('#text-area81'), {'duration': delayTime1200, 'queue': queue});
        $('.step-8-controls').delay(delayTime2000).slideDown(delayTime300);
    });
}

function getTasks(stepNum) {
    var array = [];
    $('#logger-step-' + stepNum + ' div.active').each(function() {
        if ($(this).find('input.research').length) {
            var researchTime = $(this).find('input.research').val();
            var value = '#research@' + researchTime;
        } else if ($(this).find('input.meeting').length) {
            var meetingTime = $(this).find('input.meeting').val();
            var value = '#meeting@' + meetingTime;
        } else if ($(this).find('input.ticket-id').length) {
            var ticketId = $(this).find('input.ticket-id').val();
            var ticketTime = $(this).find('input.ticket-time').val()
            var value = '#' + ticketId + '@' + ticketTime;
        }
        if (value) {
            array.push(value);
        }
    });
    return array;
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
Date.prototype.toMysqlFormatDate = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate());
};

function enterPressed() {
    switch (loggerStep) {
        case 0:
            startLogging();
            break;
        case 1:
            goForLunch();
            break;
        case 2:
            firstPartOfDay();
            break;
        case 3:
            endLunch();
            break;
        case 4:
            secondPartOfDay();
            break;
        case 5:
            finishDay();
            break;
        case 6:
            targetEmailSet();
            break;
        case 7:
            fromEmailSet();
            break;
    }
}

function addTicket(button) {
    if (!button) {
        if (loggerStep == 3) {
            button = $('.step-3-controls .btn.ticket');
        } else if(loggerStep == 5) {
            button = $('.step-5-controls .btn.ticket');
        } else {
            return false;
        }
    }
    return addTask("ticket", button);
}
function addMeeting(button) {
    if (!button) {
        if (loggerStep == 3) {
            button = $('.step-3-controls .btn.meeting');
        } else if(loggerStep == 5) {
            button = $('.step-5-controls .btn.meeting');
        } else {
            return false;
        }
    }
    return addTask("meeting", button);
}
function addResearch(button) {
    if (!button) {
        if (loggerStep == 3) {
            button = $('.step-3-controls .btn.research');
        } else if(loggerStep == 5) {
            button = $('.step-5-controls .btn.research');
        } else {
            return false;
        }
    }
    return addTask("research", button);
}

function addTask(type, button) {
    switch(type) {
        case 'ticket':
            var el = $('#ticket-task-example').clone().attr('id', '').addClass('active');
            break;
        case 'meeting':
            var el = $('#meeting-task-example').clone().attr('id', '').addClass('active');
            break;
        case 'research':
            var el = $('#research-task-example').clone().attr('id', '').addClass('active');
            break;
    }
    button.parents('.top-controls-parent').find('.end-of-step-controls').before(el);

    el.slideDown().find('input.focus').focus();
    el.find('input').on('keyup', function(e) {
        switch (e.keyCode) {
            case 84: //t
            case 77: //m
            case 82: //r
                if ($(this).val().length <= 1) {
                    return ;
                }
                $(this).val($(this).val().substr(0, $(this).val().length - 1));
                break;
        }

        switch (e.keyCode) {
            case 13: //enter
                enterPressed();
                break;
            case 84: //t
                addTicket();
                break;
            case 77: //m
                addMeeting();
                break;
            case 82: //r
                addResearch();
                break;
        }

    });
    return el;
}

function getTimeoutTime(text, options) {
    if (options && options.duration !== undefined) {
        if (text.length == 1) {
            var time = options.duration;
        } else {
            var time = parseInt((options.duration / text.length)* (rand(8,12)/10));
            options.duration -= time;
        }
    } else {
        var time = rand(10,80);
    }
    return time;
}

function pasteText(text, el, options) {
    var time = getTimeoutTime(text, options);
    var letter = text.substr(0, 1);
    var rest = text.substr(1);
    el.append(letter);
    makeAndDeleteMistakes(letter, el, options);

    if (text.length > 1) {
        setTimeout(function(){pasteText(rest, el, options);}, time);
    } else {
        if (options && options.queue !== undefined) {
            var data = options.queue[0];
            options.queue.shift();

            if (data.options == undefined) {
                data.options = {};
            }
            if (options.queue.length > 0) {
                data.options.queue = options.queue;
            }
            pasteText(data.text, data.el, data.options);
        }
    }
}

function makeAndDeleteMistakes(lastLetter, el, options) {
    if (options.mistakes !== undefined && lastLetter !== ' ') {
        var possibleChars = "abcdefghijklmnopqrstuvwxyz";

        if (parseInt(Math.random() * 100, 0) < options.mistakes) {
            var lettersToGenerate = parseInt(Math.random() * 3, 0);
            if (!lettersToGenerate) lettersToGenerate = 1;
            for (var i = 0; i < lettersToGenerate; i++) {
                var letter = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
                var time = getTimeoutTime(letter, options);
                setTimeout(function(){
                    el.append(letter);
                    console.log('lettersToGenerate: ' + lettersToGenerate + ' letter: ' + letter);
                }, time);
            }
            removeLetters(el, lettersToGenerate, options);
        }
    }
}

function removeLetters(el, number, options) {
    if (number > 0) {
        var time = getTimeoutTime(' ', options);
        setTimeout(function () {
            var fullText = el.html();
            var remainingText = fullText.substr(0, fullText.length - 1);
            el.html(remainingText);
            removeLetters(el, number - 1, options);
        }, time);
    }
}


