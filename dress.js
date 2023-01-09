var data = [
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/0ISmEOPSzJC5tosJwCVA4qsYjUhRvOLY-25_large.jpg?v=1669349017",
        brand:"AQUA",
        name: "WOMENS SEQUINED LONG EVENING DRESS",
        mrp_price: "328.99",
        best_price : 77.99,
    },
    {   
        qty: 1,
        discount: "Extra 12% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2Pv8rL4PySjqq6LdRbv706ilwpUg4Rq1-25_large.jpg?v=1670226176",
        brand: "MAC DUGGAL",
        name:"WOMENS EMBELLISHED EMBROIDERED EVENING DRESS",
        mrp_price: "798.99",
        best_price: 219.99,
    },
    {   
        qty: 1,
        discount: "Extra 10% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411450334_RLLZ_2_large.jpg?v=1669180768",
        brand: "BGL",
        name:"BGL DRESS",
        mrp_price:"754.99",
        best_price: 299.99,
    },
    {
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Rhmii6YRQnzDh2XpmzLdz8zg7eBx0lcN-25_large.jpg?v=1670179633",
        brand: "JOVANI",
        name:"WOMENS PLUNGE MAXI EVENING DRESS",
        mrp_price:"899.99",
        best_price: 529.99,
    },
    {   
        qty: 1,
        discount: "Extra 12% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/sJFCI3x6kkWzUlECZVAgga0d76XcE4kP-25_large.jpg?v=1670121421",
        brand: "AMSALE",
        name:"FAILLE WOMENS WOVEN STRAPLESS FIT & FLARE DRESST",
        mrp_price:"400.99",
        best_price: 134.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/xGFlaFIp4EUN2qqlULr97dnoMJMMuJzP-25_large.jpg?v=1669348986",
        brand: "AQUA",
        name:"WOMENS VELVET LONG EVENING DRESS",
        mrp_price:"289.99",
        best_price: 39.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411202918_RLLZ_2_large.jpg?v=1669914424",
        brand: "VINCE",
        name:"VINCE MIXED MEDIA WOOL & CASHMERE-BLEND OPEN-BACK DRESS",
        mrp_price:"495.99",
        best_price: 134.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/83728-83730_b-X3_large.jpg?v=1669794585",
        brand: "REAL CASHMERE",
        name:"REAL CASHMERE DARK BLUE HALF ZIP FINE CASHMERE BLEND MENS SWEATER",
        mrp_price:"89.99",
        best_price: 134.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/86083897._large.jpg?v=1669663215",
        brand: "AZURA EXCHANGE",
        name:"AZURA EXCHANGE BLACK ONE-SHOULDER CASCADING SPLIT EVENING PARTY MAXI DRESS",
        mrp_price:"285.99",
        best_price: 165.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cartt",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/GCd5pFFg79VQamfaDiEEImOJTVwbuOhp-25_large.jpg?v=1669888904",
        brand: "MAC DUGGAL",
        name:"WOMENS SEQUINED LONG EVENING DRESS",
        mrp_price:"559.99",
        best_price: 289.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/57576697_large.jpg?v=1665510754",
        brand: "AZURA EXCHANGE",
        name:"AZURA EXCHANGE GREEN LONG SLEEVE V NECK TWIST FRONT SLIT LONG DRESS",
        mrp_price:"510.99",
        best_price: 285.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411821040_RLLZ_2_large.jpg?v=1669995270",
        brand: "RONNY KOBO",
        name:"RONNY KOBO BERNADETTE MAXI DRESS",
        mrp_price:"460.99",
        best_price: 203.99,
    },

]

var datafromlocal=JSON.parse(localStorage.getItem("new Cart")) || [];
DisplayClothing(data);
function DisplayClothing(data){
    document.querySelector('#clothing').innerHTML="";
    data.map (function (ele,i){

        
        var div=document.createElement("div");
        var discount=document.createElement("p");
        var dis_span = document.createElement("span");
        dis_span.innerText = ele.discount;
        discount.append(dis_span);

        var image = document.createElement("img");
        image.setAttribute("src", ele.image_url);

        var brandname=document.createElement("div");
        brandname.setAttribute("id","brand");

        var brand = document.createElement("p");
        brand.innerText = ele.brand;

        var name = document.createElement("h4");
        name.innerText = ele.name;
        
        var mrp_price = document.createElement("h5");
        sub_mrp = document.createElement("span");
        sub_mrp.innerText = "MRP Price";
        sub_mrp_price = document.createElement("span");
        sub_mrp_price.innerText ="$"+ ele.mrp_price;
        mrp_price.append(sub_mrp, sub_mrp_price);

        var best_price = document.createElement("h4");
        sub_best_price = document.createElement("span");
        sub_best_price.innerText = "Best Price";
         sub_best_price = document.createElement("span");
         sub_best_price.innerText = "$"+ ele.best_price;
         best_price.append(sub_best_price, sub_best_price);
        
        
         var button = document.createElement("button");
         button.innerText = "ADD TO CART";
         button.setAttribute("class", "cartbtn");
        button.addEventListener("click", function () {
         addcart(ele,i);

        
});

div.append(
    
    discount,
    image,
    brand,
    name,
    mrp_price,
    best_price,
    
    button
  );
  document.querySelector("#clothing").append(div);
  localStorage.setItem("clothing", JSON.stringify(data));
});
}
var id = 500;
data.map((elem) => {
  elem.id = id;
  id++;
});


var productIncart = JSON.parse(localStorage.getItem("newcart")) || [];
console.log(productIncart);
var cartdata = [];
function addcart(element) {
    cartdata.push(element);
    localStorage.setItem("prodList", JSON.stringify(cartdata));
  if (productIncart.length == 0) {
    data[i].qty = +1;
    productIncart.push(data[i]);
  } else {
    var flag = false;
    productIncart.map((e) => {
      if (e.id == id) {
        e.qty = +e.qty + 1;
        flag = true;
      }
    });

    if (!flag) {
      data[i].qty = +1;
      productIncart.push(data[i]);
    }
  }

  // productIncart.push(product[0]);
  localStorage.setItem("newcart", JSON.stringify(productIncart));
}
//new cart end

//-------------------cart-------------------- //

var productincart=JSON.parse(localStorage.getItem("newcart")) || [];
function addToCart(index){
  var product=data.filter(function(element,i){
    return i==index;
  })
  productincart.push(product[0]);
  localStorage.setItem("cartproduct",JSON.stringify(productincart))
}
function HighToLow() {
    console.log("hightolow")
      data.sort(function (x, y) {
          console.log(parseInt(x.best_price.slice(4,)) + " " + typeof parseInt(x.best_price.slice(4,)))
          return parseInt(y.best_price.slice(4,)) - parseInt(x.best_price.slice(4,));
      });
      DisplayDressing(data);
  }
  function LowToHigh() {
      data.sort(function (x, y) {
          console.log(parseInt(x.best_price.slice(4,)) + " " + typeof parseInt(x.best_price.slice(4,)))
          return parseInt(x.best_price.slice(4,)) - parseInt(y.best_price.slice(4,));
      });
      DisplayDressing(data);
  }
  function sortByDiscount() {
      data.sort(function (x, y) {
          console.log(parseInt(x.discount.slice(0, 2)) + " " + typeof parseInt(x.best_price.slice(4,)))
          return parseInt(y.discount.slice(0, 2)) - parseInt(x.discount.slice(0, 2));
      });
      DisplayDressing(data);
  }
  console.log(clothing);
  var a=b=c=d=e=f=g=h=0; var count1=0;
 function funclick1(){
     if(count1==0){
         a=1;
         count1++;
     }else{
         a=0;
         count1--;
     }

     abc1();
 }
 var count2=0;
 function funclick2(){
     if(count2==0){
         b=1;
         count2++;
     }else{
         b=0;
         count2--;
     }
     abc2();
 }
 var count3=0;
 function funclick3(){
     if(count3==0){
         c=1;
         count3++;
     }else{
         c=0;
         count3--;
     }
     abc3();
 }
 var count4=0;
 function funclick4(){
     if(count4==0){
         d=1;
         count4++;
     }else{
         d=0;
         count4--;
     }
     abc4();
 }

 var count5=0;
 function funclick5(){
     if(count5==0){
         e=1;
         count5++;
     }else{
         e=0;
         count5--;
     }
     abc5();
 }
 var count6=0;
 function funclick6(){
     if(count6==0){
         f=1;
         count6++;
     }else{
         f=0;
         count6--;
     }
     abc6();
 }
 var count7=0;
 function funclick7(){
     if(count7==0){
         g=1;
         count7++;
     }else{
         g=0;
         count7--;
     }
     abc7();
 }
 var count8=0;
 function funclick8(){
     if(count8==0){
         h=1;
         count8++;
     }else{
         h=0;
         count8--;
     }
     abc8();
 }
 var checkBoxArr=[];
  ///////////////////////////////////////////
function abc1(){
   if(a==1){
     var w=[]
     data.map(function(ele){
       if(ele.brand=="AUTUMN CASHMERE"){

        w.push(ele);
         DisplayDressing(w);
       }
     })
   }else{
     DisplayDressing(data);
   }
  }
function abc2(){
   if(b==1){
     var x=[]
     data.map(function(ele){
        if(ele.brand=="TAHARI"){
          x.push(ele);
          DisplayDressing(x);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }
function abc3(){
    if(c==1){
     var y=[];
     data.map(function(ele){
        if(ele.brand=="TED BAKER"){
          y.push(ele);
          DisplayDressing(y);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }
function abc4(){
    if(d==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="REAL CASHMERE"){
          z.push(ele);
          DisplayDressing(z);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }
//--------------------- End of CheckBox Brand----------------------------

function abc5(){
    if(e==1){
      var w=[];
      data.map(function(ele){
        if(ele.brand=="Women's Dresses"){
          w.push(ele);
          DisplayDressing(w);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }

function abc6(){
    if(f==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="Women's Tops"){
          z.push(ele);
          DisplayDressing(z);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }

function abc7(){
    if(g==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="Women's Pants"){
          z.push(ele);
          DisplayDressing(z);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }

function abc8(){
    if(h==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="Men's Suits"){
          z.push(ele);
          DisplayDressing(z);
        }
      })
    }else{
      DisplayDressing(data);
    }
   }

   ///////////////////////////////////////////////////////////

   function showVal(value) {
    console.log("input value:" + Number(value));
    let v = Number(value * 10);
    document.querySelector("#kl").innerHTML = v;
    //   console.log(());

    if (value == 0) {
      console.log("cancel selected");
      // console.log(dressing.length);
    } else if (value == 100) {
      console.log("ok selected");
    }

    //   dressing.map(function (el) {
    //     console.log(el.mrp_price);
    //     return el;
    //   });
    //   DisplayDressing(arr);
  }
  document.querySelector('input[type="range"]').ontouchend = function () {
    // clearInterval(document.init);
    var value = Number(this.value);
    if (value > 98) {
      console.log("ok selected");
      document.getElementById("rangeElement").disabled = true;
      return;
    } else if (value < 2) {
      console.log("cancel selected");
      document.getElementById("rangeElement").disabled = true;
      return;
    } else {
      //console.log("reset");
      if (value >= 50) {
        var rangeAnimIntervel = setInterval(function () {
          document.querySelector('input[type="range"]').value = value--;
          if (value == 50) {
            clearInterval(rangeAnimaIntervel);
            return;
          }
        }, 1);
      } else {
        var rangeAnimIntervel = setInterval(function () {
          document.querySelector('input[type="range"]').value = value++;
          if (value == 50) {
            clearInterval(rangeAnimaIntervel);
            return;
          }
        }, 1);
      }
    }
  };