<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

        <div id="modify_me"></div>
        <script type="text/javascript"> 
        var append = function(str) {
            var element = document.getElementById("modify_me");
            element.innerHTML += "<h1>HI</h1>";
            element.append(str);
        };

        append("<h2>hello world</h2>");
        </script>

        <script type="text/javascript"> 
            // window.location.replace("http://www.google.com");
            window.setTimeout(function() {
                alert("timed out for 3 seconds");
            }, 3000);
        </script>



    </body>
</html>