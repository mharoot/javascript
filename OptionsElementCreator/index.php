<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script src="OptionsElementCreator.js"></script>
</head>

<body class = "jumbotron">

<br><br>
<center>
<h3>OPTIONS PREVIEW</h3>

<select id="selectElementID">
    <option value="0">select</option>
</select>

<br><br><br>

<h3>OPTION SUBMISSION FORM</h3>
    
<textarea class="form-control" name="bulk_description_textarea" id="option_textarea" rows="1" placeholder="type option here"></textarea>
    
<button onclick="addOption()">Add Option</button>

</center>

<script>
function addOption() {
/*      option element creator initialized    */
    var option               = document.getElementById("option_textarea").value;
    var optionElementCreator = new OptionsElementCreator("selectElementID", option);
    optionElementCreator.insertLast();
    document.getElementById("option_textarea").value="";
}
</script>

</body>



