<?php
$email = $_POST['email'];

if(!empty($email)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
     $receiver = "newsletter@glonetech.com";
     $from = "GloneSoft Newsletter";
     $body = "Email: $email\n";
     $sender = "From: $email";
    
     if(mail($receiver, $from, $body, $sender)){
        echo "Your message has been sent";
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

