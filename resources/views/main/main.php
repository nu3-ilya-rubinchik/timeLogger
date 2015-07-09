<input type="hidden" id="current-date" value="<?= $date ?>" />


<nav class="light-green lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Nu3</a>
        <ul class="right hide-on-med-and-down">
            <li><a class="waves-effect" href="#">Just some button</a></li>
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
        <h1 class="header center green-text">Time Logger</h1>
        <div class="row center">
            <h5 class="header col s12 light">A modern responsive high-tech eco-friendly tool to help you with time reporting</h5>
        </div>
        <div class="row center">
            <a href="#" id="activate-button" class="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br><br>

    </div>
</div>


<div class="container">
    <div id="form" class="z-depth-1" style="display: none;">
        <div id="logger-step-1">
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
                <a class="waves-effect green waves-light btn" onclick="goForLunch()">Done</a>
            </div>
        </div>
        <div id="logger-step-2" class="lunch-step-block">
            <p class="flow-text text-area" id="text-area21"></p>
            <p class="flow-text text-area" id="text-area22"></p>
            <div class="step-2-controls hidden step-2-input">
                <label>Lunch started at </label>
                <input id="start-lunch-time" class="focus small-input" placeholder="13:00" type="text"  />
                <a class="step-2-control-button waves-effect green waves-light btn" onclick="firstPartOfDay()">Done</a>
            </div>
        </div>
        <div id="logger-step-3" class="top-controls-parent">
            <p class="flow-text text-area" id="text-area31"></p>
            <p class="flow-text text-area" id="text-area32"></p>
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
                <a class=" waves-effect green waves-light btn" onclick="endLunch()">I'm done with the first part of the day</a>
            </div>

        </div>

        <div id="logger-step-4" class="lunch-step-block">
            <p class="flow-text text-area" id="text-area41"></p>
            <div class="step-4-controls hidden step-4-input">
                <label>Lunch ended at </label>
                <input id="end-lunch-time" class="focus small-input" placeholder="14:00" type="text"  />
                <a class="step-4-control-button waves-effect green waves-light btn" onclick="secondPartOfDay()">Done</a>
            </div>
        </div>
        <div id="logger-step-5" class="top-controls-parent">
            <p class="flow-text text-area" id="text-area51"></p>
            <div class="step-5-controls hidden">
                <a class="waves-effect green waves-light btn ticket" onclick="addTicket($(this))">+Ticket</a>
                <a class="waves-effect green waves-light btn meeting" onclick="addMeeting($(this))">+Meeting</a>
                <a class="waves-effect green waves-light btn research" onclick="addResearch($(this))">+Research</a>
            </div>
            <div class="end-of-step-controls"></div>
            <div class="step-5-controls hidden">
                <a class=" waves-effect green waves-light btn" onclick="finishDay()">I'm done with the second part of the day</a>
            </div>

        </div>
        <div id="logger-step-6" class="top-controls-parent">
            <p class="flow-text text-area" id="text-area61"></p>
            <p class="flow-text text-area" id="text-area62"></p>
            <div id="email-target-block" class="step-6-controls hidden">
                <label>Email will be sent to </label>
                <input value="timetracker@nu3.com" class="medium-input" type="text" id="email-target"  />
                <a class="waves-effect green waves-light btn" onclick="targetEmailSet()">Done</a>
            </div>
        </div>
        <div id="logger-step-7" class="top-controls-parent">
            <p class="flow-text text-area" id="text-area71"></p>
            <div class="step-7-controls hidden">
                <label>Your email is </label>
                <input placeholder="a.very.nice.guy@nu3.de" class="medium-input" type="text" id="email-from"  />
                <a class="waves-effect green waves-light btn" onclick="fromEmailSet()">Done</a>
            </div>
        </div>
        <div id="logger-step-8" class="top-controls-parent">
            <p class="flow-text text-area" id="text-area81"></p>
            <p class="flow-text text-area" id="text-area82"></p>
            <p class="flow-text text-area" id="text-area83"></p>
            <p class="flow-text text-area" id="text-area84"></p>
            <p class="flow-text text-area" id="text-area85"></p>
            <div class="step-8-controls hidden">
                <a class="waves-effect green waves-light btn" onclick="sendReport()">Stop talking and send already this got damn report!</a>
                <a class="waves-effect red waves-light btn" onclick="sendReport()">You know what! I changed my mind! Don't sent it!</a>
            </div>
        </div>
<!--        <div class="row">-->
<!--            <form class="col s12">-->
<!--                <div class="row">-->
<!--                    <div class="input-field col s6">-->
<!--                        <input placeholder="Placeholder" id="first_name" type="text" class="validate">-->
<!--                        <label for="first_name">First Name</label>-->
<!--                    </div>-->
<!--                    <div class="input-field col s6">-->
<!--                        <input id="last_name" type="text" class="validate">-->
<!--                        <label for="last_name">Last Name</label>-->
<!--                    </div>-->
<!--                </div>-->
<!---->
<!--                <div class="row">-->
<!--                    <div class="input-field col s12">-->
<!--                        <input id="password" type="password" class="validate">-->
<!--                        <label for="password">Password</label>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="row">-->
<!--                    <div class="input-field col s12">-->
<!--                        <input id="email" type="email" class="validate">-->
<!--                        <label for="email">Email</label>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </form>-->
<!--        </div>-->
    </div>
    <div class="section" >

        <!--   Icon Section   -->
        <div class="row">
            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-green-text"><i class="material-icons">Cutting edge</i></h2>
                    <h5 class="center">technologies was never used</h5>

                    <p class="light">A stone. A rock. A bird. That are the simple things our developments team was inspired by when this peace of software was developed. Hmm maybe the bird was not on that list.</p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-green-text"><i class="material-icons">Ruby, Go, Scala</i></h2>
                    <h5 class="center">languages are not known by our developers</h5>

                    <p class="light">Here at nu3 timeTracker team we was thinking about Zend Framework all the time that we put into this project. And as a special feature for uor customers we started this project first with creating a huge base of legacy code. We just can't work without it!</p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-green-text"><i class="material-icons">User friendly</i></h2>
                    <h5 class="center">interface is not something we care about</h5>

                    <p class="light">Here at nu3 timeTracker team we always think about our customers and after a huge research we can totally see that time tracking is not working for you if you reading this stupid filler text.</p>
                </div>
            </div>
        </div>

    </div>
    <br><br>

    <div class="section">

    </div>
</div>

<footer class="page-footer green">
    <div class="container">
        <div class="row">
            <div class="col l12 s12">
                <h5 class="white-text">by Team Awesome</h5>
                <p class="grey-text text-lighten-4">From the creators of Fidtz, NT-tool and many other stupid things!</p>


            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Made by <a class="orange-text text-lighten-3" href="#">Ilya Rubinchik</a>
        </div>
    </div>
</footer>

