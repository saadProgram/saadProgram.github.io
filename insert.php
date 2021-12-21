<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['email']) && isset($_POST['numbers']) &&
        isset($_POST['addresses']) && isset($_POST['messages'])) {
        
        $email = $_POST['email'];
        $numbers = $_POST['numbers'];
        $addresses = $_POST['addresses'];
        $messages = $_POST['messages'];
        

        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "supermar";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM information WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO information(email, numbers, addresses, messages) values(?, ?, ?, ?)";

            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultemail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("siss",$email, $numbers, $addresses, $messages);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button not set";
}
?>