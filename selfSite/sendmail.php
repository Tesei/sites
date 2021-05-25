<?php

// ? Образец формы отправки данных от "Фрилансера"
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
// require 'vendor/autoload.php';
require 'phpmailer/src/Exception.php';
require 'vendor/PHPMailer.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');

    // от кого письмо
    $mail->setFrom('tesei@inbox.ru', 'Личный сайт'); // от кого
    $mail->addAddress('gud-stepan@yandex.ru', 'Степан'); // кому    //

    //Content
    $mail->isHTML(true);      //Разрешает передавать теги
    $mail->Subject = 'Сообщение с личного сайта';

	$body = '</h1>Письмо с личного сайта Гудошникова Степана</h1>'

	// имя в квадратных скобках берётся из атрибута 'name' тега input
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail или телефон:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message '].'</p>';
	}

    // ---------------------------------------------------------
    // ! Если input создан ввиде радио-кнопки
    // $hand = "значение_А";
    // if($_POST['hand']== "Значение_Б"){
    //     $hand = "значение_Б";
    // }

    // if(trim(!empty($_POST['name_атрибутРадиоКнопки']))){
	// 	$body.='<p><strong>Сообщение:</strong> '.$name_атрибутРадиоКнопки.'</p>';
	// }
    // ---------------------------------------------------------

    // ---------------------------------------------------------

	//! Если необходимо отправить файл:
    // if(!empty($_FILES['image']['tmp_name'])){
    // 	// путь загрузки файла
    // 	$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    // 	// загрузим файл
    // 	if (copy($_FILES['image']['tmp_name'], $filePath)){
    // 		$fileAttach = $filePath;
    // 		$body.='<p><strong>Фото вприложении</strong></p>';
    // 		$mail->addAttachment($fileAttach);
    // 	}
    // }
    // ---------------------------------------------------------

// Отправляем

if (!$mail->send()){
	$message = 'Ошибка {$mail->ErrorInfo}';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
