<?php
class Contact
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function create($name, $prenom, $email, $phone)
    {
        $sql = "INSERT INTO contacts (name, prenom, email, phone) VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$name, $prenom, $email, $phone]);
    }
}
?>
