
<?php
require_once __DIR__ . '/../models/MailchimpModel.php';

class MailchimpController
{
    private $mailchimpModel;

    public function __construct($apiKey, $listId)
    {
        $this->mailchimpModel = new MailchimpModel($apiKey, $listId);
    }

    public function subscribe($email)
    {
        $result = $this->mailchimpModel->subscribe($email);
        if ($result) {
            echo json_encode(['success' => 'Subscription successful']);
        } else {
            echo json_encode(['error' => 'Subscription failed']);
        }
    }
}
?>
