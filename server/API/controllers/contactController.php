<?php
require_once '../maltaisWebWorks/server/API/models/contactModel.php';

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

        $this->contactModel->create($name, $prenom, $email, $phone);

        echo json_encode(['success' => 'Formulaire envoyé avec succès']);
    }
}
?>
