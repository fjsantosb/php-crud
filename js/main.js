function read(edit) {
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
				if (edit == response[i]._id.$oid) {
					row = tbody.insertRow();
					row.insertCell().innerHTML = '<input type="text" id="update_name" value=\''+response[i].name+'\'>';
					row.insertCell().innerHTML = '<input type="text" id="update_year" value=\''+response[i].year+'\'>';
					row.insertCell().innerHTML = '<input type="text" id="update_publisher" value=\''+response[i].publisher+'\'>';
					row.insertCell().innerHTML = '<input type="text" id="update_platform" value=\''+response[i].platform+'\'>';
					row.insertCell().innerHTML = '<button type="button" onclick="update(\''+response[i]._id.$oid+'\')">Update</button> | <button type="button" onclick="remove(\''+response[i]._id.$oid+'\')">Remove</button>';
				} else {
					row = tbody.insertRow();
					row.insertCell().innerHTML = response[i].name;
					row.insertCell().innerHTML = response[i].year;
					row.insertCell().innerHTML = response[i].publisher;
					row.insertCell().innerHTML = response[i].platform;
					row.insertCell().innerHTML = '<button type="button" onclick="edit(\''+response[i]._id.$oid+'\')">Edit</button>';
				}
			}
			row = tbody.insertRow();
			row.insertCell().innerHTML = '<input type="text" id="name">';
			row.insertCell().innerHTML = '<input type="text" id="year">';
			row.insertCell().innerHTML = '<input type="text" id="publisher">';
			row.insertCell().innerHTML = '<input type="text" id="platform">';
			row.insertCell().innerHTML = '<button type="button" onclick="add(document.getElementById(\'name\').value, document.getElementById(\'year\').value, document.getElementById(\'publisher\').value, document.getElementById(\'platform\').value)">Add</button>';
		}
	}
	request.open('POST', 'php/read.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send();
};

function update(id) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = request.responseText;
			if(response == 0) {
				console.log('Update KO');
			} else {
				console.log('Update OK');
			}
			read(0);
		}
	}
	request.open('POST', 'php/update.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('id=' + id + '&name=' + document.getElementById('update_name').value + '&year=' + document.getElementById('update_year').value + '&publisher=' + document.getElementById('update_publisher').value + '&platform=' + document.getElementById('update_platform').value);
}

function edit(id) {
	read(id);
};

function remove(id) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = request.responseText;
			if(response == 0) {
				console.log('Remove KO');
			} else {
				console.log('Remove OK');
			}
			read(0);
		}
	}
	request.open('POST', 'php/remove.php', true);
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
			}
			read(0);
		}
	}
	request.open('POST', 'php/add.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('name=' + name + '&year=' + year + '&publisher=' + publisher + '&platform=' + platform);
}
