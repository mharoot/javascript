<!DOCTYPE html>
<html>
    <head>
    <script type="text/javascript"> 
        var helloWorld = function() {
            var i = 0;
            var str = "String";
            var arr = [1, 2, 3]
            var b = false;
            console.log(i);
            console.log(str);
            console.log(arr);
            if (i == 0) {
                console.log("i is zero");
            } else if (i == 1) {
                console.log("i is one");
            }

            i = 0;
            while (i < 10 ) {
                console.log("i is " + i++);
            }

            for (i = 0; i < 10; i++) {
                console.log("i is " + i);
            }

            i = 0;
            do { // does before condition check
                //some cases you execute something at least once everytime
                console.log("i is " + i++);
            } while (i < 10);

            arr = [2, 4, 6];

            for (item of arr) {
                console.log("item of arr: "+item);
            }
        };

        helloWorld();
    </script>
    </head>
    <body>
    </body>
</html>