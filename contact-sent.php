<?php
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];


if(!empty($name)&&!empty($company)&&!empty($email)&&!empty($phone) && !empty($subject) &&!empty($message)){
if(filter_var($email, FILTER_VALIDATE_EMAIL)){
 $receiver = "info@appconghana.com";
 $from = "$subject";
 $body = "Name: $name\nCompany: $company\nEmail: $email\nPhone: $phone\nSubject: $subject\n\nMessage: $message\n\nRegards, \n$name";
 $sender = "From: $name <$email>";

 if(mail($receiver, $from, $body, $sender)){
    echo "Your Quote has been sent, We will respond to you as soon as possible.Thank you";
 }else{
    echo "Sorry! Your message failed to send";
 }
}else{
    echo "Enter a valid email address";
}
}else{
    echo "email required";
}
 ?>
