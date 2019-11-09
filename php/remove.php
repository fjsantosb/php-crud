<?php
	$id = $_POST['id'];
	$mongo = new MongoDB\Driver\Manager('mongodb://127.0.0.1:27017');
	$bulk = new MongoDB\Driver\BulkWrite;
	$bulk->delete(['_id' => new MongoDB\BSON\ObjectID($id)]);
	$result = $mongo->executeBulkWrite('php_dev.games', $bulk);
	echo $result->getDeletedCount();
?>