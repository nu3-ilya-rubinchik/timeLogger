
<nav class="awesome-red lighten-1 no-select" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><span>Nu3</span></a>
        <ul class="right hide-on-med-and-down">
            <li class="ignore-button">
                <a class="waves-effect" href="#">Do not press this button</a>
            </li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
            <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
</nav>
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h1 class="header center awesome-red-text">Time Logger</h1>
        <div class="row center">
            <h5 class="header col s12 light">A modern responsive high-tech eco-friendly tool to help you with time reporting</h5>
        </div>
        <div class="row center">
            <a href="#" id="activate-button" class="btn-large waves-effect waves-light light-blue">Get Started</a>
        </div>
        <br><br>

    </div>
</div>


<div class="container">
    <div id="form" class="z-depth-1" style="display: none;">
        <div id="controls-container">
            <div class="collection">
                <a class="collection-item step-1 active" data-step="1">Start of day</a>
                <a class="collection-item step-2" data-step="2">Lunch start</a>
                <a class="collection-item step-3" data-step="3">First part of day</a>
                <a class="collection-item step-4" data-step="4">Lunch end</a>
                <a class="collection-item step-5" data-step="5">Second part of day</a>
                <a class="collection-item step-6" data-step="6">Email to</a>
                <a class="collection-item step-7" data-step="7">Email from</a>
                <a class="collection-item step-8" data-step="8">Send report</a>
            </div>
        </div>
        <div id="step-container">
            <div id="logger-step-1" class="step-container active">
                <p class="flow-text text-area" id="text-area11"></p>
                <p class="flow-text text-area" id="text-area12"></p>
                <p class="flow-text text-area" id="text-area13"></p>
                <p class="flow-text text-area" id="text-area14"></p>
                <p class="flow-text text-area" id="text-area15"></p>
                <p class="flow-text text-area" id="text-area16"></p>
                <p class="flow-text text-area" id="text-area17"></p>
                <p class="flow-text text-area" id="text-area18"></p>
                <div id="start-day-block" class="hidden">
                    <input class="small-input" placeholder="08:00" type="text" id="day-start-time"  />
                    <a class="waves-effect green waves-light btn" onclick="openNextStep()">Done</a>
                </div>
            </div>
            <div id="logger-step-2" class="lunch-step-block step-container">
                <p class="flow-text text-area" id="text-area21"></p>
                <p class="flow-text text-area" id="text-area22"></p>
                <div class="step-2-controls hidden step-2-input">
                    <label>Lunch started at </label>
                    <input id="start-lunch-time" class="focus small-input" placeholder="13:00" type="text"  />
                    <a class="step-2-control-button waves-effect green waves-light btn" onclick="openNextStep()">Done</a>
                </div>
            </div>
            <div id="logger-step-3" class="top-controls-parent step-container">
                <p class="flow-text text-area" id="text-area31"></p>
                <p class="flow-text text-area" id="text-area32">
                    <span id="text-area321"></span>
                    <span style="font-weight: bold" id="text-area322"></span>
                    <span id="text-area323"></span>
                </p>
                <p class="flow-text text-area" id="text-area33"></p>
                <p class="flow-text text-area" id="text-area34"></p>
                <p class="flow-text text-area" id="text-area35"></p>
                <p class="flow-text text-area" id="text-area36"></p>
                <p class="flow-text text-area" id="text-area37"></p>
                <div class="hidden step-3-input" id="ticket-task-example">
                    <label>FD-</label><input class="ticket-id focus small-input" placeholder="1234" type="text" />
                    <label>@</label><input class="ticket-time small-input" placeholder="3.5" type="text"  />
                </div>
                <div class="hidden step-3-input" id="meeting-task-example">
                    <label>meeting @ </label><input class="meeting focus small-input" placeholder="0.25" type="text"  />
                </div>
                <div class="hidden step-3-input" id="research-task-example">
                    <label>research @ </label><input class="research focus small-input" placeholder="3.5" type="text"  />
                </div>
                <div class="step-3-controls hidden">
                    <a class="waves-effect green waves-light btn ticket" onclick="addTicket($(this))">+Ticket</a>
                    <a class="waves-effect green waves-light btn meeting" onclick="addMeeting($(this))">+Meeting</a>
                    <a class="waves-effect green waves-light btn research" onclick="addResearch($(this))">+Research</a>
                </div>
                <div class="end-of-step-controls"></div>
                <div class="step-3-controls hidden">
                    <a class=" waves-effect green waves-light btn" onclick="openNextStep()">I'm done with the first part of the day</a>
                </div>

            </div>

            <div id="logger-step-4" class="lunch-step-block step-container">
                <p class="flow-text text-area" id="text-area41"></p>
                <div class="step-4-controls hidden step-4-input">
                    <label>Lunch ended at </label>
                    <input id="end-lunch-time" class="focus small-input" placeholder="14:00" type="text"  />
                    <a class="step-4-control-button waves-effect green waves-light btn" onclick="openNextStep()">Done</a>
                </div>
            </div>
            <div id="logger-step-5" class="top-controls-parent step-container">
                <p class="flow-text text-area" id="text-area51"></p>
                <p class="flow-text text-area" id="text-area52">
                    <span id="text-area521"></span><span style="font-weight: bold" id="text-area522"></span><span id="text-area523"></span>
                </p>
                <div class="step-5-controls hidden">
                    <a class="waves-effect green waves-light btn ticket" onclick="addTicket($(this))">+Ticket</a>
                    <a class="waves-effect green waves-light btn meeting" onclick="addMeeting($(this))">+Meeting</a>
                    <a class="waves-effect green waves-light btn research" onclick="addResearch($(this))">+Research</a>
                </div>
                <div class="end-of-step-controls"></div>
                <div class="step-5-controls hidden">
                    <a class=" waves-effect green waves-light btn" onclick="openNextStep()">I'm done with the second part of the day</a>
                </div>

            </div>
            <div id="logger-step-6" class="top-controls-parent step-container">
                <p class="flow-text text-area" id="text-area61"></p>
                <p class="flow-text text-area" id="text-area62"></p>
                <div id="email-target-block" class="step-6-controls hidden">
                    <label>Email will be sent to </label>
                    <input value="timetracker@nu3.com" class="medium-input" type="text" id="email-target"  />
                    <a class="waves-effect green waves-light btn" onclick="openNextStep()">Done</a>
                </div>
            </div>
            <div id="logger-step-7" class="top-controls-parent step-container">
                <p class="flow-text text-area" id="text-area71"></p>
                <div class="step-7-controls hidden">
                    <label>Your email is </label>
                    <input placeholder="a.very.nice.guy@nu3.de" value="<?= $email ?>" class="medium-input" type="text" id="email-from"  />
                    <a class="waves-effect green waves-light btn" onclick="openNextStep()">Done</a>
                </div>
            </div>
            <div id="logger-step-8" class="top-controls-parent step-container">
                <p class="flow-text text-area" id="text-area81"></p>
                <p class="flow-text text-area" id="text-area82"></p>
                <p class="flow-text text-area" id="text-area83"></p>
                <p class="flow-text text-area" id="text-area84"></p>
                <p class="flow-text text-area" id="text-area85"></p>
                <div class="step-8-controls hidden">
                    <a class="waves-effect green waves-light btn" onclick="sendReport()">Stop talking and send this got damn report already!</a>
                    <a class="waves-effect red waves-light btn">You know what? I changed my mind! Don't sent it!</a>
                </div>
            </div>
            <div id="logger-step-9" class="top-controls-parent step-container">
                <p class="flow-text text-area" id="text-area91"></p>
                <p class="flow-text text-area" id="text-area92"></p>
                <p class="flow-text text-area" id="text-area93"></p>
                <p class="flow-text text-area" id="text-area94"></p>
            </div>
        </div>
    </div>
    <div class="section" >

        <!--   Icon Section   -->
        <div class="row">
            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center awesome-red-text"><i class="">Cutting edge</i></h2>
                    <h5 class="center">technologies was never used</h5>

                    <p class="light">A stone. A rock. A bird. That are the simple things our developments team was inspired by when this piece of software was developed. Hmm maybe the bird was not on that list.</p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center awesome-red-text"><i class="">Ruby, Go, Scala</i></h2>
                    <h5 class="center">languages that are not known by our developers</h5>

                    <p class="light">Here at nu3, the timeTracker team were thinking about the Zend Framework for the whole time that we were working on this project. And as a special feature for our customers we started this project with the creation of a huge base of legacy code. We just can't work without it!</p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center awesome-red-text"><i class="">User friendly</i></h2>
                    <h5 class="center">interface is not something we care about</h5>

                    <p class="light">Here at nu3 timeTracker team we always think about our customers and after a huge amount of research we can totally see that time tracking is not working for you if you are reading this stupid filler text.</p>
                </div>
            </div>
        </div>

    </div>
    <br><br>

    <div class="section">

    </div>
</div>

<footer class="page-footer awesome-red">
    <div class="container">
        <div class="row">
            <div class="col l12 s12">
                <h5 class="white-text">by Team Awesome</h5>
                <p class="grey-text text-lighten-4">From the creators of Fidtz, NT-tool and many other buggy products!</p>


            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Made by <a class="orange-text text-lighten-3" href="#">Team Awesome</a>
            <i onclick="thankYouTeamAwesome()" class="small material-icons like-us">thumb_up</i>
        </div>
    </div>
</footer>

