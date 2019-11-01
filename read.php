<?php
	$mongo = new MongoDB\Driver\Manager('mongodb://127.0.0.1:27017');
	$query = new MongoDB\Driver\Query([], []);
	$rows = $mongo->executeQuery('php_dev.games', $query);
	echo json_encode($rows->toArray());
?>