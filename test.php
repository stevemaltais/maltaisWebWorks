<?php
$envPath = realpath(__DIR__ . '/../.env');
echo "Chemin vers le fichier .env: " . $envPath;

if (file_exists($envPath)) {
    echo "Fichier .env trouvé!";
} else {
    echo "Fichier .env non trouvé!";
}
?>
