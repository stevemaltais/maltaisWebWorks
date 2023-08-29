<?php
require_once __DIR__ . '/../models/contactModel.php';


class ContactController
{
    private $db;
    private $contactModel;

    public function __construct($db)
    {
        $this->db = $db;
        $this->contactModel = new Contact($db);
    }

    public function create()
    {
        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, true);

        $name = $input['name'];
        $prenom = $input['prenom'];
        $email = $input['email'];
        $phone = $input['phone'];
        $msg = $input['message'];

        $this->contactModel->create($name, $prenom, $email, $phone, $message);

        echo json_encode(['success' => 'Formulaire envoye avec succes']);
    }
}
?>
