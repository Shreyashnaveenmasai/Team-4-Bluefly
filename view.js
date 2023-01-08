
let obj = JSON.parse(localStorage.getItem("viewObj"));
let index = JSON.parse(localStorage.getItem("objID"));

viewframe(obj,index);

function viewframe(data,index) {
    // event.preventDefault();
    let title = document.querySelector("title");
    title.textContent = data.name;

    let image = document.createElement("img");
    image.setAttribute("src" , data.image_url);
    document.querySelector("#showImage").append(image);


    let brand = document.querySelector("#brand");
    brand.textContent = data.brand;


    let name = document.querySelector("#name");
    name.textContent = data.name;

    let strike = document.querySelector("#strike");
    strike.textContent = "$" +  data.mrp_price;

   let price = document.querySelector("#price");
   price.textContent = "$" + data.best_price;

   let save = document.querySelector("#save");
   save.textContent = data.discount;

   let cartBotton = document.querySelector("#cartBtn");
   cartBotton.addEventListener("click" , function() {
    console.log(data);
   });

   let info = document.querySelector("#informations");
   info.textContent = data.details;
}




