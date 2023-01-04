var data = [
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/aap9VKrZwOff2EzzMvDWfugXcJhbPyfF-25_large.jpg?v=1669532929",
        brand:"BCBMAXAZRIA",
        name: "CROPPED LIQUID PUFFER WOMENS METALLIC CROPPED PUFFER COAT",
        mrp_price: "260.99",
        best_price : 92.99,
    },
    {   
        qty: 1,
        discount: "Extra 12% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/83728-83730_b-X3_large.jpg?v=1669794585",
        brand: "REAL CASHMERE",
        name:"REAL CASHMERE DARK BLUE HALF ZIP FINE CASHMERE BLEND MENS SWEATER",
        mrp_price: "89.99",
        best_price: 29.99,
    },
    {   
        qty: 1,
        discount: "Extra 10% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/4292666_large.jpg?v=1658446282",
        brand: "MICHAEL MICHAEL KORS",
        name:"MICHAEL MICHAEL KORS WOMEN'S BONE WHITE DOWN SLEEVELESS PUFFER VEST WITH REMOVABLE HOOD",
        mrp_price:"219.99",
        best_price: 119.99,
    },
    {
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77216-77219_b_zps3t3yr5lr_large.jpg?v=1669660348",
        brand: "CASHMERE COMPANY",
        name:"CASHMERE BLEND BEIGE V-NECK SWEATER",
        mrp_price:"89.99",
        best_price: 29.99,
    },
    {   
        qty: 1,
        discount: "Extra 12% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411538632_RLLZ_2_large.jpg?v=1669914967",
        brand: "LEA & VIOLA",
        name:"LEA & VIOLA QUILTED & CROCHETED TEDDY JACKET",
        mrp_price:"200.99",
        best_price: 134.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/83728-83730_b-X3_large.jpg?v=1669794585",
        brand: "METTE",
        name:"REAL CASHMERE DARK BLUE HALF ZIP FINE CASHMERE BLEND MENS SWEATER",
        mrp_price:"89.99",
        best_price: 29.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/zUZlhFwSUlhmvH5jTeWkFzAbnrsnPwEk-25_large.jpg?v=1669435533",
        brand: "REAL CASHMERE",
        name:"REAL CASHMERE DARK BLUE HALF ZIP FINE CASHMERE BLEND MENS SWEATER",
        mrp_price:"89.99",
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
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/4306659_large.jpg?v=1668479383",
        brand: "TED BAKER",
        name:"TED BAKER MEN'S HEATHER GRAY DROVERS ZIP FRONT FUNNEL NECK SWEATSHIRT",
        mrp_price:"285.99",
        best_price: 165.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cartt",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/RSbCBbwck2NICdJUsxFND7AwvjLiJV4R-25_large.jpg?v=1669422048",
        brand: "TAHARI",
        name:"NIKKI WOMENS WOOL BLEND WRAP COAT WOOL COAT",
        mrp_price:"105.99",
        best_price: 78.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1925359_large.jpg?v=1654588277",
        brand: "BARRIERS",
        name:"BARRIERS ORANGE BOBBY SEALE PULLOVER HOODIE",
        mrp_price:"510.99",
        best_price: 285.99,
    },
    {   
        qty: 1,
        discount: "Extra 20% off in Cart",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010942624_RLLZ_2_large.jpg?v=1669915059",
        brand: "AUTUMN CASHMERE",
        name:"AUTUMN CASHMERE CHECKERED WOOL & CASHMERE-BLEND CREWNECK SWEATERT",
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
         addcart(ele,ele.id,i);

        
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
      DisplayClothing(data);
  }
  function LowToHigh() {
      data.sort(function (x, y) {
          console.log(parseInt(x.best_price.slice(4,)) + " " + typeof parseInt(x.best_price.slice(4,)))
          return parseInt(x.best_price.slice(4,)) - parseInt(y.best_price.slice(4,));
      });
      DisplayClothing(data);
  }
  function sortByDiscount() {
      data.sort(function (x, y) {
          console.log(parseInt(x.discount.slice(0, 2)) + " " + typeof parseInt(x.best_price.slice(4,)))
          return parseInt(y.discount.slice(0, 2)) - parseInt(x.discount.slice(0, 2));
      });
      DisplayClothing(data);
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
         DisplayClothing(w);
       }
     })
   }else{
     DisplayClothing(data);
   }
  }
function abc2(){
   if(b==1){
     var x=[]
     data.map(function(ele){
        if(ele.brand=="TAHARI"){
          x.push(ele);
          DisplayClothing(x);
        }
      })
    }else{
      DisplayClothing(data);
    }
   }
function abc3(){
    if(c==1){
     var y=[];
     data.map(function(ele){
        if(ele.brand=="TED BAKER"){
          y.push(ele);
          DisplayClothing(y);
        }
      })
    }else{
      DisplayClothing(data);
    }
   }
function abc4(){
    if(d==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="REAL CASHMERE"){
          z.push(ele);
          DisplayClothing(z);
        }
      })
    }else{
      DisplayClothing(data);
    }
   }
//--------------------- End of CheckBox Brand----------------------------

function abc5(){
    if(e==1){
      var w=[];
      data.map(function(ele){
        if(ele.brand=="Women's Dresses"){
          w.push(ele);
          DisplayClothing(w);
        }
      })
    }else{
      DisplayClothing(data);
    }
   }

function abc6(){
    if(f==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="Women's Tops"){
          z.push(ele);
          DisplayClothing(z);
        }
      })
    }else{
      DisplayClothing(data);
    }
   }

function abc7(){
    if(g==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="Women's Pants"){
          z.push(ele);
          DisplayClothing(z);
        }
      })
    }else{
      DisplayClothing(data);
    }
   }

function abc8(){
    if(h==1){
      var z=[];
      data.map(function(ele){
        if(ele.brand=="Men's Suits"){
          z.push(ele);
          DisplayClothing(z);
        }
      })
    }else{
      DisplayClothing(data);
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