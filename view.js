
let obj = JSON.parse(localStorage.getItem("viewObj"));
let ID = JSON.parse(localStorage.getItem("objID"));
let i = JSON.parse(localStorage.getItem("objIndex"));

viewframe(obj);

function viewframe(data) {
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
      addcart();
   });

   let info = document.querySelector("#informations");
   info.textContent = data.details;
}

function addcart() {

    let currArr = JSON.parse(localStorage.getItem("currArr"));
    let productIncart = JSON.parse(localStorage.getItem("newcart")) || [];

    let cartdata = [];
    cartdata.push(obj);
    localStorage.setItem("prodList", JSON.stringify(cartdata));


    if (productIncart.length == 0) {
        currArr[i].qty = +1;
        productIncart.push(currArr[i]);
    } else {
        let flag = false;
        productIncart.map((e) => {
            if (e.id == ID) {
                e.qty = +e.qty + 1;
                flag = true;
            }
        });

        if (!flag) {
            currArr[i].qty = +1;
            productIncart.push(currArr[i]);
        }
    }

    localStorage.setItem("newcart", JSON.stringify(productIncart));
}



