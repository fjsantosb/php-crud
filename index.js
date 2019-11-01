function remove(id) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = request.responseText;
			if(response == 0) {
				console.log('KO');
			} else {
				console.log('OK');
			}
		}
	}
	request.open('POST', 'remove.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('id=' + id);
}