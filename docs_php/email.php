<?php

if(isset($_POST['email']) && !empty($_POST['email']){
	
$name = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);

$destinatario = "gcristina.franco@gmail.com";
$assunto = "MENSAGEM DE CONTATO WEBSITE";

		$body = "Nome: " .$nome. "\r\n" .
				"E-mail: " .$email. "\r\n" .
				"Mensagem: " .$mensagem;
		$header = "From: gcristina.franco@gmail.com  " . 
				  "\r\n" . "Reply-to:" .$email. "\r\n" .
				  "x=Mailer:PHP/" .phpversion();
		
	
		$resultado = @mail($destinatario,$assunto,$body,$header);
		
		switch( $resultado ){
            case true:
                $msg='Obrigada por entrar em contato! Toda informação recebida permanece confidêncial. Vou contata-lo assim que analisar sua mensagem!.';
            break;
            case false:
                $msg='E-mail não enviado.\n Por favor entre em contato pelo e-mail: moreira.gabriela.br@gmail.com';
            break;
		}
	echo "<script type='text/javascript'>alert('{$msg}');</script>";
	}
?>

