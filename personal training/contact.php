<?php
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Error 405: Method Not Allowed. Use POST requests only.";
    exit;
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim(htmlspecialchars($_POST["name"]));
    $email = trim(htmlspecialchars($_POST["email"]));
    $message = trim(htmlspecialchars($_POST["message"]));

    // ✅ Basic Validation
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required!"]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format!"]);
        exit;
    }

    // 📧 Send Email
    $to = "your-email@example.com"; 
    $subject = "New Inquiry from Your Website";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";
    mail($to, $subject, $body, $headers);

    // 📱 Send SMS Notification (Twilio)
    $sid    = "your_account_sid";  
    $token  = "your_auth_token";   
    $twilio = new Client($sid, $token);

    $twilio->messages->create(
        "your-phone-number",
        ["from" => "twilio-phone-number", "body" => "New Inquiry from $name! Check email."]
    );

    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
}
?>

