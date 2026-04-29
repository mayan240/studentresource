<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

if (!isset($_FILES['pdf_file'])) {
    echo json_encode(['success' => false, 'message' => 'No file uploaded.']);
    exit;
}

$file = $_FILES['pdf_file'];
if ($file['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['success' => false, 'message' => 'Upload failed with error code ' . $file['error']]);
    exit;
}

// Validate file type
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if ($mimeType !== 'application/pdf') {
    echo json_encode(['success' => false, 'message' => 'Only PDF files are allowed.']);
    exit;
}

$uploadDir = __DIR__ . '/uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Generate unique name
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
if (strtolower($ext) !== 'pdf') $ext = 'pdf';
$filename = uniqid('paper_') . '_' . preg_replace('/[^a-zA-Z0-9_-]/', '_', basename($file['name'], '.'.$ext)) . '.' . $ext;
$destination = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $destination)) {
    // Return relative URL
    echo json_encode(['success' => true, 'url' => 'uploads/' . $filename]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
}
?>
