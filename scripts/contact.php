<?php

if(isset($_POST['submit'])) {
    $mailFrom = $_POST['mail'];
    $message = $_POST['message']; 

    $mailTo = "xwhiteline@gmail.com";
    $header = "From: ".$mailFrom;

    $text = "You have received an email from ".$name.". \n\n".$message;

    mail($mailTo, $subject, $text, $headers);
    header("Location: index.php?mailsend");
}