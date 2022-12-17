//mostrar
function getUser() {
    fetch('http://localhost:9000/api/users')
    .then(response => response.json())
    .then(data => console.log(data))
}

//usuario
function getUserbyId(id){
    fetch(`http://localhost:9000/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
}

//mostrar todo

getUser();

//mostrar un solo Id
getUserbyId('639d0b8037be4164c5f07200')