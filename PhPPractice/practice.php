


<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<?php


$a = 5;
$b = 10;

if($a == $b) {
    echo ' values are equal';
} else {
    echo 'values are not equal';
};

for($x = 0; $x <= 100; $x++) {
    echo "The number is $x";
//switch case

$favcolor = "red";

switch ($favcolor) {
    case "red":
        echo "Your favorite color is red!";
        break;
    case "blue":
        echo "Your favorite color is blue!";
        break;
    case "green":
        echo "Your favorite color is green!";
        break;
    default:
        echo "Your favorite color is neither red, blue, nor green!";
}


?>
</body>
</html>


