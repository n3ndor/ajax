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

var myForm = document.getElementById('myForm');
myForm.onsubmit = function (e) {
    // "e" is the js event happening when we submit the form.
    // e.preventDefault() is a method that stops the default nature of javascript.
    e.preventDefault();

    // create FormData object from javascript and send it through a fetch post request.
    var form = new FormData(myForm);

    // this how we set up a post request and send the form data.
    fetch("http://localhost:5000/create/user", { method: 'POST', body: form })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(error => console.log(error))
}

function search(e) {
    e.preventDefault();
    var searchForm = document.getElementById('searchForm')
    var form = new FormData(searchForm);
    fetch('http://localhost:5000/search', { method: 'POST', body: form })
        .then(res => res.json())
        .then(data => console.log(data))
}
