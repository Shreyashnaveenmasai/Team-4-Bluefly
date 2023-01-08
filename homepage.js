
function storeEmail() {
    let data = JSON.parse(localStorage.getItem("subscribers")) || [];
    event.preventDefault();
    let val = document.querySelector("#subEmail").value;
    data.push(val);
    localStorage.setItem("subscribers",JSON.stringify(data));
}    