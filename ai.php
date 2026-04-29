<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// ==========================================
// IMPORTANT: Put your Gemini API key here
// ==========================================
$API_KEY = "AIzaSyB6r45nPW-5GQXNBOxn3WhDUu-SwxIP4qs";

$input = json_decode(file_get_contents('php://input'), true);
$subject = isset($input['subject']) ? trim($input['subject']) : '';

if (empty($subject)) {
    echo json_encode(['success' => false, 'message' => 'Subject is required.']);
    exit;
}

if ($API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
    echo json_encode(['success' => false, 'message' => 'API Key not configured on the server. Please update ai.php.']);
    exit;
}

// Prepare the payload for Gemini
$prompt = "You are an expert university tutor. Create comprehensive, easy-to-understand study notes for the subject: " . $subject . ". Include key concepts, important formulas or definitions, and potential exam questions. Format using markdown.";

$payload = [
    "contents" => [
        [
            "parts" => [
                ["text" => $prompt]
            ]
        ]
    ]
];

$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . $API_KEY;

// Initialize cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo json_encode(['success' => false, 'message' => 'cURL error: ' . curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// Return the response back to the frontend
$decodedResponse = json_decode($response, true);

if ($httpCode !== 200 || isset($decodedResponse['error'])) {
    $errorMsg = isset($decodedResponse['error']['message']) ? $decodedResponse['error']['message'] : 'Unknown API error';
    echo json_encode(['success' => false, 'message' => $errorMsg]);
    exit;
}

// Extract the text
if (isset($decodedResponse['candidates'][0]['content']['parts'][0]['text'])) {
    $text = $decodedResponse['candidates'][0]['content']['parts'][0]['text'];
    echo json_encode(['success' => true, 'text' => $text]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid response format from Gemini API.']);
}
?>