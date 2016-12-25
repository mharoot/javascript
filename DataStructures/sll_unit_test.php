<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- bootstrap css-->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- bootstrap js-->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- classes/test.js-->
<script src="classes/sll.js"></script>

</head>
<body>

<script>
var list = new SLL();
</script>
<br><br>
<input id="test"></input>
<center><button onclick = "list.add( $('#test').val() );">add</button>
</center>
<br><br>

<center><button onclick = "list.delete( $('#test').val() );">delete</button>
</center>
<br><br>


<center>
<button onclick = "list.print();">print</button>
</center>



</body>

</html>