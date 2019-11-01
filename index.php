<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>php-crud</title>
	<script src='index.js'></script>
</head>
<body>
	<div>
		<table>
			<tr>
				<th>Name</th>
				<th>Year</th>
				<th>Publisher</th>
				<th>Platform</th>
				<th>Action</th>
			</tr>
			<?php
				$mongo = new MongoDB\Driver\Manager('mongodb://127.0.0.1:27017');
				$query = new MongoDB\Driver\Query([], []);
				$rows = $mongo->executeQuery('php_dev.games', $query);
				foreach ($rows as $row) {
					echo '<tr>
							<td>'.$row->name.'</td>
							<td>'.$row->year.'</td>
							<td>'.$row->publisher.'</td>
							<td>'.$row->platform.'</td>
							<td><button type="button" onclick="remove(\''.$row->_id.'\')">Remove</button>
						</tr>';
				}
			?>
		</table>
	</div>
</body>
</html>