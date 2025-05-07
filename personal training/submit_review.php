<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim(htmlspecialchars($_POST["name"]));
    $review = trim(htmlspecialchars($_POST["review"]));

    if (empty($name) || empty($review)) {
        echo json_encode(["status" => "error", "message" => "All fields are required!"]);
        exit;
    }

    // Save reviews in JSON file
    $reviewsFile = "reviews.json";
    $existingReviews = json_decode(file_get_contents($reviewsFile), true);
    $newReview = ["name" => $name, "review" => $review];
    $existingReviews[] = $newReview;
    file_put_contents($reviewsFile, json_encode($existingReviews, JSON_PRETTY_PRINT));

    echo json_encode(["status" => "success", "message" => "Review submitted successfully!"]);
}
?>
