<?php
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];

#database
$conn = new mysql('localhost','root','PASSWORD','test');
if($conn->connect_error){
    die('connection failed:' .$conn->connect_error);
}else{
    $stmt= $conn=>prepare("insert into users(UserName,Email,Password)
    values(?,?,?)");
    $stmt->bind_param("vvv",$username,$email,$password);
    $stmt->execute();
    echo"registration sucessfull";
    $stmt->close();
    $conn->close();
}
?>