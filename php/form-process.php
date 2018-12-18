<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$phone = $_POST["phone"];
 
$EmailTo = "info@optservice.net";
$Subject = "Новое сообщение с сайта Snakmania";
 
// prepare email body text
$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";

if($phone) {
  $Body .= "Телефон: ";
  $Body .= $phone;
  $Body .= "\n";
}

if($email) {
  $Body .= "Email: ";
  $Body .= $email;
  $Body .= "\n";
}
 
$Body .= "Сообщение: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:"."info@snakmania.ru");
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>