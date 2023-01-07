document.getElementById('sms').onchange = function() {
    document.getElementById('phone-number-container').style.display = this.checked ? 'block' : 'none';
  };
  function refer(){
      window.location="./index.html";
  }
  var dataArr=JSON.parse(localStorage.getItem("newcart")) || [];
  if(dataArr.length===0){
      document.querySelector("#parent").textContent="Cart is Empty Add Products In Cart";
  }else{
      var total=0;
      var totalprice=0;
      var totalitem=0;
      displaydata(dataArr);
      displayprice(dataArr);
  }
  
  
  function displaydata(list){
      document.querySelector("#parent").textContent="";
      list.map(function (elem,index){
          var parent=document.querySelector("#parent");
          var div=document.createElement("div");
          div.setAttribute("id","maindiv");
          var image=document.createElement("img");
          image.setAttribute("class","img");
          // var imge_url="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/507185-w8187-1000__2_large.jpg?v=1672383522";
          image.setAttribute("src",elem.image_url);
          var title=document.createElement("h3");
          title.textContent=elem.name;
          var div7=document.createElement("div");
          div7.setAttribute("class","div7");
          div7.append(title);
          var div6=document.createElement("div");
          div6.setAttribute("class","div6");
          // <div class="quantity-circle">
          // <span id="quantity-value">1</span>
          // </div>
          var circle=document.createElement("div");
          circle.setAttribute("class","quantity-circle");
          var span=document.createElement("span");
          span.setAttribute("id","quantity-value");
          span.textContent = elem.qty;
          circle.append(span);
          div6.append(image,circle);
          var price=document.createElement("p");
          price.textContent="$"+elem.best_price;
          var strprice=document.createElement("p");
          strprice.setAttribute("class","str");
          strprice.textContent="$"+elem.mrp_price;
          var pricediv=document.createElement("div");
          div.setAttribute("class","pricediv");
          pricediv.append(price);
          totalitem++;
          totalprice+=elem.best_price*elem.qty;
          var hr3=document.createElement("hr");
          div.append(div6,div7,pricediv);
          document.querySelector("#parent").append(div);
      });
  }
  
  function displayprice(list){

          total=list.reduce(function (acc,curr){
              return acc+curr.best_price*curr.qty;
          },0);
          var item=0;
          list.forEach(element => {
              item++;
          });


          var div4=document.createElement("div");
          div4.setAttribute("id","div4");
          var cou=document.createElement("h4");
          cou.textContent="Enter Promo Code";
          // cou.style.color="red";
          cou.setAttribute("id","h44");
          var textarea=document.createElement("input");
          textarea.setAttribute("class","texta");
          var coubtn=document.createElement("button");
          coubtn.setAttribute("class","apy");
          coubtn.textContent="Apply Promo";
          coubtn.addEventListener("click",function(){
              apply(textarea.value,total);
          });
          div4.append(textarea,coubtn);
          document.querySelector("#parent").append(cou,div4);

          var div3=document.createElement("div");
          div3.setAttribute("class","div3c");
          var p2=document.createElement("p");
          p2.setAttribute("id","prices");
          p2.textContent="SUBTOTAL";
          var span=document.createElement("span");
          span.setAttribute("id","pce")
          span.append("$"+Math.round(total));
          div3.append(p2,span);

          var div5c=document.createElement("div");
          div5c.setAttribute("class","div3c");
          var p4=document.createElement("p");
          p4.setAttribute("id","prices2");
          p4.textContent="Shipping";
          var p5=document.createElement("p");
          p5.setAttribute("id","prices2");
          p5.textContent="Free";
          div5c.append(p4,p5);
          var hr1=document.createElement("hr");
          var hr2=document.createElement("hr");
          var div4c=document.createElement("div");
          div4c.setAttribute("class","div3c");
          var p3=document.createElement("p");
          p3.setAttribute("id","prices1");
          p3.textContent="Estimated tax";
          // var span1=document.createElement("span");
          // span1.append("$"+Math.round(70));
          var span1=document.createElement("p");
          span1.textContent="$70";
          div4c.append(p3,span1);
          var pdiv=document.createElement("div");
          pdiv.setAttribute("class","pdiv");
          pdiv.append(hr1,div3,div5c,div4c,hr2);

          var sub=document.createElement("div");
          sub.setAttribute("class","div3c");
          var pp=document.createElement("p");
          pp.setAttribute("id","prices");
          pp.textContent="TOTAL";
          var span5=document.createElement("span");
          span5.setAttribute("id","pcee");
          span5.append("$"+Math.round(total+70));
          sub.append(pp,span5);

          // var p4=document.createElement("p");
          // p4.textContent="Shipping, taxes, and discounts codes calculated at checkout.";
          // var checkoutb=document.createElement("button");
          // checkoutb.textContent="CHECK OUT";
          // checkoutb.setAttribute("class","checkout");
          // checkoutb.addEventListener("click",redirect);
          document.querySelector("#parent").append(pdiv,sub);
  }
  function redirect(){
      window.location="./payment.html";
  }
  function apply(data,total){
      console.log(data,total);
      if(data==="masai30"){
          total=(total*30)/100;
          document.querySelector("#pce").textContent="$"+Math.round(total);
          document.querySelector("#pcee").textContent="$"+Math.round(total+70);
          document.querySelector("#h44").textContent="Promo Applied";
          console.log(total);

      }else{
          document.querySelector("#h44").textContent="Promo Does Not Exist";
      }

  }
  document.querySelector("form").addEventListener("submit",Dataadd);
  var formArr=JSON.parse(localStorage.getItem("info-list"))||[];
  function Dataadd(){
      event.preventDefault();
      var email=document.querySelector("#email").value;
      var country=document.querySelector("#country").value;
      var fname=document.querySelector("#fname").value;
      var lname=document.querySelector("#lname").value;
      var aname=document.querySelector("#aname").value;
      var city=document.querySelector("#city").value;
      var state=document.querySelector("#state").value;
      var zip=document.querySelector("#zip").value;
      var telp=document.querySelector("#telp").value;
      var formobj={email:email,country:country,fname:fname,lname:lname,aname:aname,city:city,state:state,zip:zip,telp:telp};
      console.log(formobj);
      formArr.push(formobj);
      console.log(formArr);
      localStorage.setItem("info-list",JSON.stringify(formArr));
      window.location="./shipping.html";
  }