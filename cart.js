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
        var div6=document.createElement("div");
        div6.setAttribute("class","div6");
        div6.append(image,title);
        var price=document.createElement("p");
        price.textContent="$"+elem.best_price;
        var strprice=document.createElement("p");
        strprice.setAttribute("class","str");
        strprice.textContent="$"+elem.mrp_price;
        
        var pricediv=document.createElement("div");
        div.setAttribute("class","pricediv");
        pricediv.append(strprice,price);
        var strike=document.createElement("p");
        strike.setAttribute("class","bargain");
        strike.textContent="End Of Year Clearance Sale (- $"+ Math.round(elem.mrp_price-elem.best_price)+")";
        var del=document.createElement("button");
        del.setAttribute("class","delete");
        del.textContent="Delete";
        del.addEventListener("click",function(){
            deld(index);
        });
        
        var div5=document.createElement("div");
        div5.setAttribute("class","div5");
        var div2=document.createElement("div");
        div2.setAttribute("class","box");
        var btn1=document.createElement("button");
        btn1.setAttribute("class","btn1");
        btn1.textContent="-";
        btn1.addEventListener("click",function (){
            sub(elem);
        });
        
        totalitem++;
        totalprice+=elem.best_price*elem.qty;
        var h4=document.createElement("h4");
        var quantity=elem.qty;
        h4.textContent=quantity;
        var btn2=document.createElement("button");
        btn2.textContent="+";
        btn2.setAttribute("class","btn2");
        btn2.addEventListener("click",function (){
            add(elem);
        });

        div2.append(btn1,h4,btn2);
        div5.append(div2,pricediv)
        var hr=document.createElement("hr");
        
        div.append(div6,div5,del,strike,hr);
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
        var coubtn=document.createElement("button");
        coubtn.textContent="Apply Promo";
        coubtn.style.color="green";
        coubtn.addEventListener("click",function(){
            apply(textarea.value,total);
        });
        div4.append(textarea,coubtn);
        document.querySelector("#parent").append(cou,div4);

        var div3=document.createElement("div");
        div3.setAttribute("class","div3c");
        var p1=document.createElement("p");
        p1.textContent="Total Item";
        var p2=document.createElement("p");
        p2.setAttribute("id","prices");
        p2.textContent="SUBTOTAL";
        var span=document.createElement("span");
        span.append("$"+Math.round(total));
        div3.append(p2,span);
        var p3=document.createElement("p");
        p3.textContent="Shipping, taxes, and discounts codes calculated at checkout.";
        var checkoutb=document.createElement("button");
        checkoutb.textContent="CHECK OUT";
        checkoutb.setAttribute("class","checkout");
        checkoutb.addEventListener("click",redirect);
        document.querySelector("#parent").append(div3,p3,checkoutb);
}
function redirect(){
    window.location="./information.html";
}
function sub(elem,index){
    elem.qty--;
    if(elem.qty===0){
        deld(index);
    }
    // localStorage.setItem("cart",dataArr);

    displaydata(dataArr);
    displayprice(dataArr);
}
function add(elem){
    elem.qty++;
    // localStorage.setItem("cart",dataArr);

    displaydata(dataArr);
    displayprice(dataArr);
    
}
function deld(index){
    // event.target.parentNode.remove();
    dataArr.splice(index,1);
    if(dataArr.length===0){
        document.querySelector("#parent").textContent="Cart is Empty Add Products In Cart";
    }else{
        localStorage.setItem("cart",JSON.stringify(dataArr));
        displaydata(dataArr);
        displayprice(dataArr);
    }
    
}
function apply(data,total){
    console.log(data,total);
    if(data==="masai30"){
        total=(total*30)/100;
        document.querySelector("span").textContent="$"+Math.round(total);
        document.querySelector("#h44").textContent="Promo Applied";
        console.log(total);

    }else{
        document.querySelector("#h44").textContent="Promo Does Not Exist";
    }

}