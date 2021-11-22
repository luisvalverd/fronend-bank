

function findUser() {
	console.log('OK');
	console.log(document.getElementById("search").value);
	var data = {email: "sebas@gmail.com"};
	fetch('http://localhost:3500/api/findUser', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data) 
	})
	.then(function(user) {
		console.log(user);
	})
	.catch(function(err) {
		console.log(err)
	});
}

module.exports = findUser;
