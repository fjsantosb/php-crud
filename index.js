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
};

function add(name, year, publisher, platform) {
	console.log(name);
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
	request.open('POST', 'add.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('name=' + name + '&year=' + year + '&publisher=' + publisher + '&platform=' + platform);
}