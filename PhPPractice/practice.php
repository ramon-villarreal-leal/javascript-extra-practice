


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
}}

//arrays small example
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
//indexed arrays
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";

//associative arrays

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";

$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
//loop through an associative array
foreach($age as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}





