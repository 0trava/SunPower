<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer-6.9.1/src/Exception.php';
require 'PHPMailer-6.9.1/src/PHPMailer.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.9.1/language');
$mail->IsHTML(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'user@example.com';                     //SMTP username
    $mail->Password   = 'secret';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('info@ledps.com.ua', 'PromSys');
    $mail->addAddress('0trava0910@gmail.com', 'My test');     //Add a recipient

    $mail->Subject = 'Запит з сайту PromSys';


    $body = '<h1>Новий запит на дзвінок</h1>';

    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Ім`я:<strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Телефон:<strong> '.$_POST['phone'].'</p>';
    }

    if(trim(!empty($_POST['description']))) {
        $body.='<p><strong>Опис:<strong> '.$_POST['description'].'</p>';
    }

    if(trim(!empty($_POST['range']))) {
        $body.='<p><strong>Ім`я:<strong> '.$_POST['range'].'</p>';
    }


      // -----------------------------------------------
    $mail->Body    = $body;

    if (!mail->send()) {
        $message = 'Данні відправлено ми  з вами зв`яжемося найближчий час';
    } else {
        $message = 'Ошибка';
    }




    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>