<html>
   <head>
    <!-- Include meta tag to ensure proper rendering and touch zooming -->
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!-- Include jQuery Mobile stylesheets -->
    <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
    <!-- Include the jQuery library -->
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <!-- Include the jQuery Mobile library -->
    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <!-- Include the Word Generator script -->
    <script src="js/WordGenerator.js"></script>
    <!-- Include the Games Controller script -->
    <script src="js/gameController.js"></script>
    </head>
    <body>
        <div data-role="page">
        <div data-role="header">
            <h1>Hangman</h1>
                    <center> <img id="hangman" src="pics/1.jpg"/> </center> 
                    <ol>
                        <li>Double click/tap letters.</li>
                        <li>Start a new game any time.</li>
                    </ol>
        </div>
        <div data-role="main"      class="ui-grid-b ui-responsive"><!-- og: "ui-content"  -->
            <center><div id="word">__ __ __ __ __ __ __ __ __ __ __ __ __ __</div> </center> <!-- dynamically append words here and doulbe underscores per letter -->
            <div class="controller" style="height:200px; width:95%; overflow:auto; border:8px solid yellowgreen; padding:2%">
                <a href="#A"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">A</a>
                <a href="#B"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">B</a>
                <a href="#C"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">C</a>
                <a href="#D"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">D</a>
                <a href="#E"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">E</a>
                <a href="#F"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">F</a>
                <a href="#G"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">G</a>
                <a href="#H"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">H</a>
                <a href="#I"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">I</a>
                <a href="#J"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">J</a>
                <a href="#K"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">K</a>
                <a href="#L"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">L</a>
                <a href="#M"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">M</a>
                <a href="#N"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">N</a>
                <a href="#O"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">O</a>
                <a href="#P"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">P</a>
                <a href="#Q"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">Q</a>
                <a href="#R"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">R</a>
                <a href="#S"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">S</a>
                <a href="#T"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">T</a>
                <a href="#U"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">U</a>
                <a href="#V"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">V</a>
                <a href="#W"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">W</a>
                <a href="#X"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">X</a>
                <a href="#Y"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">Y</a>
                <a href="#Z"       class="ui-btn ui-btn-inline ui-shadow ui-corner-all" data-rel="dialog">Z</a>
                <br><br><br>
                <a href="#newGame" class="ui-btn ui-shadow ui-corner-all" data-rel="dialog">Start New Game</a>
            </div>
        </div>
<!--
        <div data-role="footer">
            <h1>Footer Text</h1>
        </div>-->

        </div>
    </body>
</html>