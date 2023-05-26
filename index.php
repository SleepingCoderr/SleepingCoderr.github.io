<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Books</title>
</head>
<body>
    <h1>Issued Books</h1>

    <?php
    // Database connection parameters
    $host = 'localhost';
    $username = 'root';
    $password = 'carlogalarrita@101';
    $database = 'library_management_system';

    // Establish a connection to the MySQL database
    $conn = new mysqli($host, $username, $password, $database);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data for issuing a book
    $studentID = $_POST['studentid'];
    $studentName = $_POST['studentname'];
    $bookName = $_POST['bookname'];
    $bookID = $_POST['bookID'];

    // Insert the form data into the issue_book table
    $issueSql = "INSERT INTO issue_book (Student_ID, Student_Name, book_Name, book_ISBN) VALUES ('$studentID', '$studentName', '$bookName', '$bookID')";
    if ($conn->query($issueSql) === true) {
        // Data inserted successfully
        echo "Data inserted into issue_book successfully";
    } else {
        // Error in inserting data
        echo "Error: " . $issueSql . "<br>" . $conn->error;
    }

    // Retrieve form data for returning a book
    $returnStudentID = $_POST['studentname'];
    $returnBookISBN = $_POST['studentemail'];

    // Insert the form data into the return_book table
    $returnSql = "INSERT INTO return_book (Student_ID, book_ISBN) VALUES ('$returnStudentID', '$returnBookISBN')";
    if ($conn->query($returnSql) === true) {
        // Data inserted successfully
        echo "Data inserted into return_book successfully";
    } else {
        // Error in inserting data
        echo "Error: " . $returnSql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
    ?>

</body>
</html>
