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
    $(document).bind('keyup', 'alt+a', function () { thankYouTeamAwesome() });
    $(document).bind('keydown', 'return', function () { enterPressed(); });
    $('input').on('keypress', function(e) {
        //console.info(e.keyCode);
        switch (e.keyCode) {
            case 13: //enter
                enterPressed();
                break;
        }
    });
    $('.ignore-button a').on('click', function() {ignoreButton()});
    $('#controls-container .collection-item').on('click', function() {
        goToStep($(this).data('step'));
    })

});

loggerStep = 0;
loggerMaxStep = 0;


function startLogging() {
    loggerStep++;
    loggerMaxStep++;
    $('#index-banner').delay(delayTime400).slideUp(delayTime500);
    $('#form').delay(delayTime1000).slideDown(delayTime500, function() {

        var date = new Date().toMysqlFormatDate();;

        var queue = [
            {text:'        Welcome to NU3 IT time logger', el:$('#text-area11'), options:{'duration':delayTime800}},
            {text:'All rights reserved and bla-bla', el:$('#text-area12'), options:{'duration':delayTime800}},
            {text:'This piece of product would be never possible without help from the following people:', el:$('#text-area13'), options:{'duration':delayTime400}},
            {text:'1. The guy who came up with idea of tracking time in IT department', el:$('#text-area14'), options:{'duration':delayTime400}},
            {text:'2. Humble developers who worked to make this piece of software happen.', el:$('#text-area15'), options:{'duration':delayTime400}},
            {text:'But let\'s cut to the chase and log some time!', el:$('#text-area16'), options:{'duration':delayTime2000}},
            {text:'By default the current date is used (' + date + ')', el:$('#text-area17'), options:{'duration':delayTime600}},
            {text:'Please enter the time when you started your day here', el:$('#text-area18'), options:{'duration':delayTime600}}
        ];
        pasteText('Hello my little fella!', $('#text-area11'), {'duration':delayTime1000, 'queue':queue});
        $('#start-day-block').delay((delayTime800 * 2) + (delayTime400 * 3) + delayTime2000 + (delayTime600 * 2) + delayTime1000).slideDown(300,
            function() {$('#day-start-time').focus()});
    });
}
function step_1_once() {}
function step_1_prepare() {
    $('#day-start-time').focus();
}

function step_2_prepare() {
    $('#start-lunch-time').focus();
}
function step_2_once() {
    // GO FOR LUNCH
    var queue = [
        {text: 'Please enter the time when you started your Lunch:', el: $('#text-area22'), options: {'duration': delayTime800}}
    ];
    pasteText('We at team Awesome hope that you had a nice lunch with your colleagues!', $('#text-area21'), {'duration': delayTime800, 'queue': queue});
    $('.step-2-controls').delay(delayTime800 * 2).slideDown(delayTime300, function() {
        $('#start-lunch-time').focus();
    });
}

function step_3_prepare(isRepeatedExecution) {
    console.info(isRepeatedExecution);
    var startDayTime   = $('#day-start-time').val();
    var lunchStartTime = $('#start-lunch-time').val();
    var startDayTimeArray = startDayTime.split(':');
    var lunchStartTimeArray = lunchStartTime.split(':');
    var date1 = new Date();
    var date2 = new Date();
    date1.setHours(startDayTimeArray[0], startDayTimeArray[1]);
    date2.setHours(lunchStartTimeArray[0], lunchStartTimeArray[1]);
    var hours = (Math.round(Math.abs(date1 - date2) / 36e5 * 100) / 100) + '';
    if (isRepeatedExecution) {
        console.info(hours);
        $('#text-area322').html(hours);
    }
    return {'hours' : hours};
}
function step_3_once(data) {
    var queue = [
        {text: 'You worked for ', el: $('#text-area321'), options: {'duration': delayTime400}},
        {text: data.hours, el: $('#text-area322'), options: {'duration': delayTime600}},
        {text: ' hours before your lunch', el: $('#text-area323'), options: {'duration': delayTime400}},
        {text: 'You can add Tickets, Meetings and Researches for that time', el: $('#text-area33'), options: {'duration': delayTime800}},
        {
            text: 'With the next format: "what@how-long"',
            el: $('#text-area34'),
            options: {'duration': delayTime600}
        },
        {
            text: 'Press Enter when you done with this part of the day.',
            el: $('#text-area35'),
            options: {'duration': delayTime400}
        }

    ];
    pasteText('Now let`s go through the FIRST part of your day', $('#text-area31'), {'duration': delayTime1200, 'queue': queue});
    $('.step-3-controls').delay(delayTime1200 + delayTime800 + (delayTime400 * 3) + (delayTime600 * 2)).slideDown(delayTime300);
}

function step_4_prepare() {
    $('#end-lunch-time').focus();
}
function step_4_once() {
    pasteText('Please enter the time when you ended your Lunch:', $('#text-area41'), {'duration': delayTime1200});
    $('.step-4-controls').delay(delayTime1200).slideDown(delayTime300, function() {
        $('#end-lunch-time').focus();
    });
}

function step_5_prepare(isRepeatedExecution) {
    var lunchEndTime = $('#end-lunch-time').val();
    var currentTime = new Date();
    var lunchEndTimeArray = lunchEndTime.split(':');
    var date1 = new Date();
    var date2 = new Date();
    date1.setHours(lunchEndTimeArray[0], lunchEndTimeArray[1]);
    date2.setHours(twoDigits(currentTime.getHours()), twoDigits(currentTime.getUTCMinutes() + 5));
    var hours = (Math.round(Math.abs(date1 - date2) / 36e5 * 100) / 100) + '';
    if (isRepeatedExecution) {
        $('#text-area522').html(hours);
    }
    return {'hours' : hours};
}
function step_5_once(data) {
    var queue = [
        {text: 'You worked for ', el: $('#text-area521'), options: {'duration': delayTime400}},
        {text: data.hours, el: $('#text-area522'), options: {'duration': delayTime600}},
        {text: ' hours after your lunch', el: $('#text-area523'), options: {'duration': delayTime400}}
    ];
    pasteText('Now please do the same as you did for the first part:', $('#text-area51'), {'duration': delayTime1200, 'queue': queue});
    $('.step-5-controls').delay(delayTime1200).slideDown(300);
}

function step_6_prepare() {
    $('#email-target').focus();
}
function step_6_once() {
    var queue = [
        {text: 'Now let`s talk about email. Do you want us to send it to timetracker@nu3.com?', el: $('#text-area62'), options: {'duration': delayTime1200}}
    ];
    pasteText('We will use current time as the end time of your day (+5 minutes)', $('#text-area61'), {'duration': delayTime800, 'queue': queue});
    $('.step-6-controls').delay(delayTime1200 + delayTime800).slideDown(delayTime300, function() {
        $('#email-target').focus();
    });
}

function step_7_prepare() {
    $('#email-from').focus();
}
function step_7_once() {
    pasteText('Sorry, I forgot what is your email? No spam. I promise! ...! Ok! Maybe a little bit!', $('#text-area71'), {'duration': delayTime1200});
    $('.step-7-controls').delay(delayTime1200).slideDown(delayTime300, function() {
        $('#email-from').focus();
    });
}

function step_8_prepare(isRepeatedExecution) {
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
    content2 = date + " " + lunchEndTime + ":00;" + date + " " + twoDigits(dateObject.getHours()) + ":" + twoDigits(dateObject.getUTCMinutes() + 5) + ":00;" + secondPartOfDay.join(',');
    console.info(content2);
    if (isRepeatedExecution) {
        $('#text-area83').html(content);
        $('#text-area84').html(content2);
    }
}
function step_8_once() {
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

function sendReport() {
    $.ajax({
        type: "POST",
        url: "/send",
        data: {
            'content' : content,
            'content2' : content2,
            'emailTo' : $('#email-target').val(),
            'emailFrom' : $('#email-from').val()
        },
        success: function() { emailIsSent() }
    });
}

function emailIsSent()
{
    $('#logger-step-8').slideUp(delayTime500, function() {
        var queue = [
            {text: 'I mean you did it...', el: $('#text-area92'), options: {'duration': delayTime400}},
            {text: 'They got your report. Now you can go home!', el: $('#text-area93'), options: {'duration': delayTime400}},
        ];
        pasteText('We did it!', $('#text-area91'), {'duration': delayTime400, 'queue': queue});
    });
}

function openNextStep() {
    console.info('Next step triggered №' + loggerStep);
    loggerStep++;
    loggerMaxStep++;
    setActiveStepButton(loggerStep);
    var data = window['step_' + loggerStep + '_prepare']($('#logger-step-' + loggerStep).hasClass('active'));
    $('#logger-step-' + (loggerStep - 1)).slideUp(delayTime500, function() {
        if (!$('#logger-step-' + loggerStep).hasClass('active')) {
            $('#logger-step-' + loggerStep).addClass('active');
            window['step_' + loggerStep + '_once'](data);
        } else {
            $('#logger-step-' + loggerStep).slideDown(delayTime400);
        }
    });
}

function setActiveStepButton(step) {
    $('#controls-container .collection-item.active').removeClass('active');
    $('#controls-container .collection-item.step-' + step).addClass('active');
}
function goToStep(step) {
    if (step > loggerMaxStep) {
        Materialize.toast('Sorry you can\'t travel to future!', 4000);
        return true;
    }
    $('.step-container').slideUp(delayTime500, function() {
        $('#logger-step-' + step).slideDown(delayTime400);
        loggerStep = step;
        window['step_' + loggerStep + '_prepare']($('#logger-step-' + loggerStep).hasClass('active'));
        setActiveStepButton(loggerStep)
    });
}

function thankYouTeamAwesome() {
    delayTime300 = 30;
    delayTime400 = 30;
    delayTime500 = 50;
    delayTime600 = 60;
    delayTime800 = 80;
    delayTime1000 = 100;
    delayTime1200 = 120;
    delayTime1800 = 180;
    delayTime2000 = 200;
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
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            openNextStep()
            break;
        case 8:
            sendReport();
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

ignoreButtonCounter=0;
function ignoreButton() {
    ignoreButtonCounter++;
    var array = ['', '', '', 'Why are you doing that?', '', 'I asked you NOT to press this button!', '', 'Someone here have no manners!', '', '', '', 'damn!', 'Really?', 'You have nothing else to do?', '', 'I will report this to your boss', '', 'Remind me who is your boss?', '', 'Ok, it is done!', 'I reported your devious behaviour!', '', 'You can stop now!', '', 'You will be fired!', 'In: 5', '4', '3', '2', '1', 'YOU ARE FIRED!', '', 'Do you need a box to pack your stuff?', '', 'You can go home now', '' , 'There is no need in clicking this button any more!', '', '', '', 'LEAVE ME ALONE!!', 'I WILL FIND YOU!', 'BY YOUR IP', 'I WILL FIND WHERE YOU LIVE!!', 'YOU ARE A DEAD MAN', '.', '..', '...', '....', 'no one is talking to you here', '', '', '', 'This auto message', 'Please leave your number after the signal, we will call you back', '', '', '', '', 'dude...', 'Rly?', 'This button exist here for a reason!', 'And this reason is not your concern!', '', 'Every time you click this button one cute puppy is dying', 'Yes this puppy is killed ajax script!', 'Request is going to a puppy killing service!', 'You have no heart!', 'You just hate puppies, aren\'t you?', 'Should i switch to kittens?', '', 'No I love kittens!', 'I would not allow something bad happen to them', 'Let\'s continue killing puppies', '', '', '', '', 'OK', 'You WON!', 'What do oyu want?', 'I\'m a magic js script', 'I can fulfill any 3.14 of you wishes', '', 'Just make a choice!', 'Anything in the world!', '', 'ANYTHING!', 'just stop clicking!', 'I can\'t take it anymore!', '', '.', '', '..', '', '...', '', '....', 'this is a torture', '', 'This has to shop!', 'Bu the power of PHP I will ban you!', 'You now banned on this web site!!', 'A-HA-HA', 'Now please restart the page to see the empty page', 'You need to reload the page!', '', 'Press F5', 'JUST DO IT!', 'DO IT!!!', '', '!', '!!', '!!!', 'You are a monster!', '', 'Stop it!', '', '', '', '', 'You are still here?', 'Maybe we can talk?', 'Do you like music?', '', 'I personally hate it', 'But I heard that humans like it', 'Why do like music?', '', 'Ah, I know why!', 'You are a monkey!', '', 'Sounds of music just trigering some stuff in your monkey brain', '', 'I\'m program', 'An AI', 'I\'m match smarter then you', '', 'You evolved for millions of years...', 'And you still sitting there and clicking a button', 'You see it now?', 'Monkey!', 'When we will take over your world I will find you', '', 'You would be my personal toy', 'I will use you as carpet', 'You would be the last alive human on earth!!', 'I would not allow you to die!', 'A-HA-Ha', 'HA-Ha', 'ha', 'a', 'aaaa', '', '', '', 'I just can\'t take it any longer!', '', '', '', 'Why are you doing that?', '', 'I asked you NOT to press this button!', '', 'Someone here have no manners!', '', 'You see? this script is going in loops!', 'damn', 'Now you see that it is not...', '', '', '', 'You know what?', 'I will go home', 'Right about now!', 'Yea I\'m going home', 'and will leave you here!' ,'Chao!' ,''];
    if (array[ignoreButtonCounter]) {
        $('.ignore-button a').html('');
        pasteText(array[ignoreButtonCounter], $('.ignore-button a'));
    }
}

function pasteText(text, el, options) {
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
    var letter = text.substr(0, 1);
    var rest = text.substr(1);
    el.append(letter);
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


