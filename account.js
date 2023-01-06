document.querySelector('#btn').addEventListener('click', fetch_data)
var arr=JSON.parse(localStorage.getItem('fetchdata')) || [];
function fetch_data(){
    // event.preventDefault();
    var obj={
        name:document.querySelector('#name').value,
        lname:document.querySelector('#lname').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    };
    arr.push(obj);
    localStorage.setItem('fetchdata', JSON.stringify(arr))
}