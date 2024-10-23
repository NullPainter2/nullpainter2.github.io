<?php
$data = array();

$compilers = array();
$x = file_get_contents( "https://godbolt.org/api/compilers/" );
foreach( explode( $x, "\n" ) as $index => $line )
{
    if( $index == 0 ) continue;
    list( $compilerId, $compilerName ) = explode( $line, "|" );
    
    $m = preg_match( "/
            (.*)
            (?:
                (?: \s+ \([^)]\ ) # explanation or something in parenthesis
                |
                (?: [0-9.]+ ) # version
            )$/e", $compilerName ) or die("compiler name match '$compilerName' :(");
    $group = $m[1];
    $name = $compilerName;
    $data['compilers'][$compilerId] = array('id'=>$compilerId, 'name'=>$name, 'group'=>$group, 'orig'=>$compilerName); 
}

foreach( $compilers as $compiler )
{
    $x = file_get_contents( "https://godbolt.org/api/compilers/$compiler" );    
}

file_put_contents( "data.js", json_encode( $data ));