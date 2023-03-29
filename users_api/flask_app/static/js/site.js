console.log("hello from javascript")


function getUsers() {
    fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(data => {
            var users = document.getElementById('users');
            for (let i = 0; i < data.length; i++) {
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);

                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);

                users.appendChild(row);
            }
        })
        .catch(error => console.log(error))

}
getUsers();

