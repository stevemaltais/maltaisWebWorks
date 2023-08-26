<?php
$envPath = __DIR__ . '/../../.env';

echo "Chemin vers le fichier .env: " . realpath($envPath) . "<br>";

if (file_exists($envPath)) {
    $envContent = file_get_contents($envPath);
    echo "<pre>" . htmlspecialchars($envContent) . "</pre><br>"; // Affiche le contenu du fichier .env
    
    // Le reste du code pour charger les variables d'environnement...
} else {
    echo "Fichier .env non trouvé.<br>";
}

$host = getenv('DB_HOST');
$user = getenv('DB_USER');
$password = getenv('DB_PASSWORD');
$dbname = getenv('DB_NAME');

$dsn = "mysql:host=$host;dbname=$dbname";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $password, $options);
} catch (PDOException $e) {
    die($e->getMessage());
}

return $pdo;
?>
