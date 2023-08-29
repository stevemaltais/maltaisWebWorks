<?php
require_once __DIR__ . '/config/databaseConfig.php';
require_once './api/controllers/contactController.php';

$contactController = new ContactController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'contact') {
    $contactController->create();
} else {
    // Autres routes ou page d'accueil
}
?>
