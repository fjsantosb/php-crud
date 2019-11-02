<?php
	$id = $_POST['id'];
	$name = $_POST['name'];
	$year = $_POST['year'];
	$publisher = $_POST['publisher'];
	$platform = $_POST['platform'];
	
	$mongo = new MongoDB\Driver\Manager('mongodb://127.0.0.1:27017');
	$bulk = new MongoDB\Driver\BulkWrite;
	$bulk->update(['_id' => new MongoDB\BSON\ObjectID($id)], ['$set' => ['name' => $name, 'year' => $year, 'publisher' => $publisher, 'platform' => $platform]]);
	$result = $mongo->executeBulkWrite('php_dev.games', $bulk);
	echo $result->getModifiedCount();
?>