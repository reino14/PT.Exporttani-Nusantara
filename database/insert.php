<?php
$nama = $_POST['nama'];
$telepon = $_POST['telepon'];
$email = $_POST['email'];
$perusahaan = $_POST['perusahaan'];

if (!empty($nama) || !empty($telepon) || !empty($email) || !empty($perusahaan)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "exporttani";

    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if(mysqli_connect_error()) {
        die( 'Connect Error( '. mysqli_connect_errno().' ))'. mysqli_connect_error());
    }else{
        $INSERT = "INSERT Into clientprofile (nama, telepon, email, perusahaan) values(?,?,?,?)";

        //Prepare statement
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ssss", $nama, $telepon, $email, $perusahaan);
        $stmt->execute();
        echo "New record inserted successfully";

        // Close the prepared statement
        $stmt->close();
        // Close the database connection
        $conn->close();

        // Redirect to the PDF file
        header("Location: companyprofile.pdf");
        exit();
    }
} else {
    echo "All fields are required";
    die();
}
?>