<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


$ch = curl_init("https://jsonplaceholder.typicode.com/comments?postId=3");

curl_exec($ch);

if (curl_error($ch)) {
    curl_error($ch);
}
curl_close($ch);
return  $ch;
