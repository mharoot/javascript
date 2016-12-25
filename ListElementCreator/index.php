<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<!--
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->

<script src="ListElementCreator.js"></script>
</head>

<body class = "jumbotron">

<br><br>
<center>
<h3>OPTIONS PREVIEW</h3>

<ul id="ulElementID">
    <li>item 1</li>
</ul>

<br><br><br>

<h3>OPTION SUBMISSION FORM</h3>
    
<textarea class="form-control" name="bulk_description_textarea" id="li_textarea" rows="1" placeholder="type list item name here"></textarea>
    
<button onclick="addListItem()">Add Option</button>

</center>

<script>
function addListItem() {
/*      list element creator initialized    */
    var list               = document.getElementById("li_textarea").value;
    var listElementCreator = new ListElementCreator("ulElementID", list);
    listElementCreator.insertLast();
    document.getElementById("li_textarea").value="";
}
</script>

</body>



