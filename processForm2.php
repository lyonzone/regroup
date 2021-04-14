<?php
	define( "RECIPIENT_NAME", "your name" );
	define( "RECIPIENT_EMAIL", "contact@regroup.co.in" );
	define( "EMAIL_SUBJECT", "Visitor Message" );

// Read the form values
	$success = false;
	$senderName = isset( $_POST['senderName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['senderName'] ) : "";
	$senderEmail = isset( $_POST['senderEmail'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['senderEmail'] ) : "";
	$senderPhone = isset( $_POST['senderPhone'] ) ? preg_replace( "/[^\.\-\' 0-9]/", "", $_POST['senderPhone'] ) : "";
	$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
	if ( $senderName && $senderEmail && $message && $senderPhone ) {
		$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
		$headers = "From: " . $senderName . " - " . $senderPhone . " <" . $senderEmail . ">";
		$success = mail( $recipient, EMAIL_SUBJECT, $headers, $message );
	}

// Return an appropriate response to the browser
	if ( isset($_GET["ajax"]) ) {
		echo $success ? "success" : "error";
	} else {}
?>