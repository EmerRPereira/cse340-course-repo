// Refactor this Promise chain to use async/await:
function getUserData() {
    return fetch('/user')
        .then(response => response.json())
        .then(data => processUser(data))
        .catch(error => console.error('Error:', error));
}