document.querySelector('#newa').addEventListener('click', newacc)
function newacc(){
    event.preventDefault();
    console.log('hello')
    window.location="account.html"
    // document.querySelector('#newa').setAttribute('link', 'account.html')
}
// console.log('hello akash')
var fd=JSON.parse(localStorage.getItem('fetchdata')) || []
document.querySelector('#sbtn').addEventListener('click', sin)
function sin(){
    event.preventDefault();
    // console.log("hii")
    var c=0;
    fd.map(function(elem){
        if(elem.email===document.querySelector('#semail').value && elem.password===document.querySelector('#signup_pass').value){
            c=1;
            // console.log("password match")
            // console.log('match')
        }
    })
    if(c===1){
        console.log("password match")
    }else{
        var l=document.createElement('li')
        l.textContent="Incorrect email or password."
        document.querySelector('#ersign').append(l)
    }
}