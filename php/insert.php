<html>
    <head>
        <?php

$username="root";
$pass="";
$database="webcomments";

$n=$_POST['n'];
$a=$_POST['age'];
$g=$_POST['gen'];
$c=$_POST['country'];
$com=$_POST['comment'];

mysql_connect(localhost, $username, $pass) or die("Cannot connect to database.");
mysql_select_db($database) or die("Unable to select database.");

$query = "INSERT INTO comments VALUES (0,'$n','$a','$g','$c','$com')";
mysql_query($query) or die("Cannot execute query.");

mysql_close();
?>

</head>
<body>
<h4>Record Inserted.</h4>
<A href="../Comment.html">Goto the Comments Page</A>
</body>
</html>

