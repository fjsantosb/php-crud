function read() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = JSON.parse(request.responseText);
			var table = document.getElementById('data');
			table.innerHTML = "";
			var thead = table.createTHead();
			var tbody = table.createTBody();
			var row = thead.insertRow();
			row.insertCell().innerHTML = 'Name';;
			row.insertCell().innerHTML = 'Year';
			row.insertCell().innerHTML = 'Publisher';
			row.insertCell().innerHTML = 'Platform';
			row.insertCell().innerHTML = 'Action';
			for(i = 0; i < response.length; i++) {
				row = tbody.insertRow();
				row.insertCell().innerHTML = response[i].name;
				row.insertCell().innerHTML = response[i].year;
				row.insertCell().innerHTML = response[i].publisher;
				row.insertCell().innerHTML = response[i].platform;
				row.insertCell().innerHTML = '<button type="button" onclick="edit(\''+response[i]._id.$oid+'\')">Edit</button> | <button type="button" onclick="remove(\''+response[i]._id.$oid+'\')">Remove</button>';
			}
			row = tbody.insertRow();
			row.insertCell().innerHTML = '<input type="text" id="name">';
			row.insertCell().innerHTML = '<input type="text" id="year">';
			row.insertCell().innerHTML = '<input type="text" id="publisher">';
			row.insertCell().innerHTML = '<input type="text" id="platform">';
			row.insertCell().innerHTML = '<button type="button" onclick="add(document.getElementById(\'name\').value, document.getElementById(\'year\').value, document.getElementById(\'publisher\').value, document.getElementById(\'platform\').value)">Add</button>';
		}
	}
	request.open('POST', 'read.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send();
}

async function remove(id) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = request.responseText;
			if(response == 0) {
				console.log('Remove KO');
			} else {
				console.log('Remove OK');
				read();
			}
		}
	}
	request.open('POST', 'remove.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('id=' + id);
};

function add(name, year, publisher, platform) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = request.responseText;
			if(response == 0) {
				console.log('Add KO');
			} else {
				console.log('Add OK');
				read();
			}
		}
	}
	request.open('POST', 'add.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('name=' + name + '&year=' + year + '&publisher=' + publisher + '&platform=' + platform);
}