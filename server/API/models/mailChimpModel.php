<?php
class MailchimpModel
{
    private $apiKey;
    private $listId;

    public function __construct($apiKey, $listId)
    {
        $this->apiKey = $apiKey;
        $this->listId = $listId;
    }

    public function subscribe($email)
    {
        $dataCenter = substr($this->apiKey, strpos($this->apiKey, '-') + 1);
        $url = "https://$dataCenter.api.mailchimp.com/3.0/lists/$this->listId/members/";

        $json = json_encode([
            'email_address' => $email,
            'status_if_new' => 'pending', 
            'status'        => 'subscribed'
        ]);

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $this->apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $httpCode == 200;
    }
}
?>
