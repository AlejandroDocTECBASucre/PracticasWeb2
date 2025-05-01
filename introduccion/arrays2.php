<?php 
    $vocales= array('a','e','i','o','u');
    foreach ($vocales as $indice => $elem){
        echo $elem.' en el indice: '.$indice.'<br>';
    }
    print '<br>';

    for($i=0;$i<count($vocales);$i++){
        echo $vocales[$i]."<br>";
    } 

?>