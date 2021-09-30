const baseURL = 'http://localhost:3000'
const formData = { 
    userName: "${username}",
    email: "${email}",
};

function submitData(userName, email) {
    fetch(baseURL + `/users/`, configObj)
    .then
    return fetch()
}

const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData)
};
fetch(baseURL + '/users/', configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    });