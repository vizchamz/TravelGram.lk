<html>
    <head>
        <?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "webcomments";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";

$n=$_POST['n'];
$a=$_POST['age'];
$g=$_POST['gen'];
$c=$_POST['country'];
$com=$_POST['comment'];

mysqli_select_db($conn, $database) or die("Unable to select database.");

$query = "INSERT INTO comments VALUES (0,'$n','$g','$a','$c','$com')";
mysqli_query($conn, $query) or die("Cannot execute query.");

mysqli_close($conn);
?>

</head>
<body>
<h4>Record Inserted.</h4>
<a href="../common/Comment.html">Goto the Comments Page</A>
</body>
</html>

