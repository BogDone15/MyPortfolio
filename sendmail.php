<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//Recipients
$mail->setFrom('from@example.com', 'Mailer');
$mail->addAddress('buselb2@gmail.com');     // Add a recipient
$mail->Subject('Hello, its me');               // Name is optional

$body = '<h1>Встречайте письмо!</h1>';

if(trim(!empty($_POST['name']))) {
 $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))) {
 $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['teatarea']))) {
 $body.='<p><strong>Message:</strong> '.$_POST['teatarea'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
 $message = 'Error!';
} else {
 $message = 'Data send!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>