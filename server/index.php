<?php
require_once __DIR__ . '/config/databaseConfig.php';
require_once './api/controllers/contactController.php';
require_once './api/controllers/MailchimpController.php';

$contactController = new ContactController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'contact') {
    $contactController->create();
} else {
    // Autres routes ou page d'accueil
}

$apiKey = getenv('bb908fabfa1c901bf0867ee9b5e65aa6-us21');
$listId = getenv('2d7b1103a3');
$mailchimpController = new MailchimpController($apiKey, $listId);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'subscribe') {
    $mailchimpController->subscribe($_POST['email']);
}

?>
