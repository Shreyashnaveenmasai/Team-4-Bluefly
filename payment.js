// localStorage.setItem("fee","Free");
//     var expeditedOption = document.querySelector('.option.expedited');
//         expeditedOption.addEventListener('click', () => {
//         var total=document.querySelector("#pcee").textContent;
//         total=parseFloat(total.replace("$",""));
//         // console.log("jo"+total);
//         var expeditedPrice = 19.95;
//         var newTotal = parseFloat(total) + expeditedPrice;
//         // console.log("hio"+newTotal);
//         localStorage.setItem("fee","$"+expeditedPrice);
//         document.querySelector("#prices23").textContent ="$"+ expeditedPrice;
//         document.querySelector("#pcee").textContent ="$"+ Math.round(newTotal);
//     });
//     var standardOption = document.querySelector('.option.standard');
//         standardOption.addEventListener('click', () => {
//         var total=document.querySelector("#pcee").textContent;
//         total=parseFloat(total.replace("$",""));
//         // console.log("jiio"+total);
//         var expeditedPrice = 19.95;
//         var newTotal = parseFloat(total) - expeditedPrice;
//         // console.log("hello"+newTotal);
//         localStorage.setItem("fee","Free");
//         document.querySelector("#prices23").textContent = "Free";
//         document.querySelector("#pcee").textContent ="$"+ Math.round(newTotal);
//     });

    document.getElementById('sms').onchange = function() {
      document.getElementById('phone-number-container').style.display = this.checked ? 'block' : 'none';
    };

    const standardOption = document.querySelector('.option.standard');
    const expeditedOption = document.querySelector('.option.expedited');
    const billingAddressForm = document.querySelector('#adres');

    expeditedOption.addEventListener('click', () => {
    billingAddressForm.style.display = 'block';
    });

    standardOption.addEventListener('click', () => {
    billingAddressForm.style.display = 'none';
    });


    var creditCardOption = document.querySelector('#payments .option[data-value="credit-card"]');
    var paypalOption = document.querySelector('#payments .option[data-value="paypal"]');
    var creditCardInputs = document.querySelector('#payments #credit');
    var paypalMessage = document.querySelector('#payments #paypal-opt');
    creditCardOption.addEventListener('click', () => {
        creditCardInputs.style.display = 'block';
        paypalMessage.style.display = 'none';
    });
    paypalOption.addEventListener('click', () => {
        creditCardInputs.style.display = 'none';
        paypalMessage.style.display = 'block';
    });




    var options = document.querySelectorAll('.option');
    options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        // console.log(option.classList);
        // console.log(options);
    });
    });

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
            var editedText = toTitleCase(elem.name);
            var words = editedText.split(" ");
            var last4Words = words.slice(-4);
            var name4=last4Words.join(" ");
            title.textContent=name4;
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
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
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
            textarea.setAttribute("id","input")
            var coubtn=document.createElement("button");
            coubtn.setAttribute("id","submit-button");
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
            p5.setAttribute("id","prices23");
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

            if(localStorage.getItem("promo")==="THIRTY"){
                total=total-(total*0.3);
                document.querySelector("#pce").textContent="$"+Math.round(total);
                document.querySelector("#pcee").textContent="$"+Math.round(total+70);
                document.querySelector("#h44").textContent="Promo Applied";
            }
    }
    document.getElementById("input").addEventListener("input", function() {
        if (this.value) {
          document.getElementById("submit-button").style.backgroundColor = "black";
        } else {
          document.getElementById("submit-button").style.backgroundColor = "rgb(200,200,200)";
        }
    });
    function redirect(){
        window.location="./payment.html";

        localStorage.setItem("fee","")
    }
    // function apply(data,total){
    //     console.log(data,total);
    //     if(data==="masai30"){
    //         total=(total*30)/100;
    //         document.querySelector("#pce").textContent="$"+Math.round(total);
    //         document.querySelector("#pcee").textContent="$"+Math.round(total+70);
    //         document.querySelector("#h44").textContent="Promo Applied";
    //         console.log(total);

    //     }else{
    //         document.querySelector("#h44").textContent="Promo Does Not Exist";
    //     }

    // }
    // if(localStorage.getItem("promo")==="THIRTY"){
    //     document.querySelector("#h44").textContent="Promo Applied";
    // }

    function apply(data,total){
        // console.log(data,total);
        var ptext=document.querySelector("#h44").textContent;
        if(data==="masai30"&&(ptext==="Enter Promo Code"||ptext==="Promo Does Not Exist")){
            total=total-(total*0.3);
            // console.log(document.querySelector("#h44").textContent);
            document.querySelector("#pce").textContent="$"+Math.round(total);
            if(localStorage.getItem("fee")==="FREE"){
                document.querySelector("#pcee").textContent="$"+Math.round(total+70);
            }else{
                document.querySelector("#pcee").textContent="$"+Math.round(total+70+20);
            }
            document.querySelector("#h44").textContent="Promo Applied";
            // console.log(total);
            localStorage.setItem("promo","THIRTY");
            console.log(localStorage.getItem("promo"));
        }else if(ptext==="Promo Applied"||ptext==="Promo Code Alredy Applied"){
            document.querySelector("#h44").textContent="Promo Code Alredy Applied";
        }
        else{
            document.querySelector("#h44").textContent="Promo Does Not Exist";
        }
    }
    var formArr=JSON.parse(localStorage.getItem("info-list"))||[];
    Ddata();
    function Ddata(){
        formArr.map(function (elem,index){
            var semail=document.querySelector("#semail");
            semail.textContent=elem.email;
            var sdata=document.querySelector("#sdata");
            sdata.textContent=elem.aname+","+elem.city+","+elem.state+","+elem.zip+","+elem.country;
        })
    }
    var feeArr=localStorage.getItem("fee");
    var fdata=document.querySelector("#fdata");
    if(feeArr==="Free"){
        fdata.textContent="Standard · Free";
    }else{
        fdata.textContent="Expedited · $19.95";
        var total=document.querySelector("#pcee").textContent;
        total=parseFloat(total.replace("$",""));
        var expeditedPrice = 19.95;
        var newTotal = parseFloat(total) + expeditedPrice;
        localStorage.setItem("fee","$"+expeditedPrice);
        document.querySelector("#prices23").textContent ="$"+ expeditedPrice;
        document.querySelector("#pcee").textContent ="$"+ Math.round(newTotal);
    }

    function pay(){
        var cnum=document.querySelector("#card-number").value;
        var nam=document.querySelector("#name").value;
        var exp=document.querySelector("#expiry-date").value;
        var cvv=document.querySelector("#cvv").value;
        if(cnum==="123456789"&&exp==="0123"&&cvv==="123"){
            alert("Payment Succesful");
            window.location="homepage.html";
        }else{
            alert("Please provide correct card number");
        }
    }
    // var cdata=document.querySelector("#payments").add
    // California City, djfhf, California City CA 90231, United States
    // document.querySelector("sub").addEventListener("submit",Dataadd);
    // var feeArr=JSON.parse(localStorage.getItem("fee-list"))||[];
    // function Dataadd(){
    //     event.preventDefault();
    //     var email=document.querySelector("#price").textContent;
    //     var country=document.querySelector("#country").value;
    //     var fname=document.querySelector("#fname").value;
    //     var lname=document.querySelector("#lname").value;
    //     var aname=document.querySelector("#aname").value;
    //     var city=document.querySelector("#city").value;
    //     var state=document.querySelector("#state").value;
    //     var zip=document.querySelector("#zip").value;
    //     var telp=document.querySelector("#telp").value;
    //     var feeobj={email:email,country:country,fname:fname,lname:lname,aname:aname,city:city,state:state,zip:zip,telp:telp};
    //     console.log(feeobj);
    //     feeArr.push(feeobj);
    //     console.log(feeArr);
    //     localStorage.setItem("info-list",JSON.stringify(formArr));
    // }
    // const optionss = document.querySelectorAll('.option');
    // optionss.forEach(option => {
    // option.addEventListener('click', () => {
    //     options.forEach(opt => opt.classList.remove('active'));
    //     option.classList.add('active');
    //     const paymentContainer = document.querySelector('.payment-container');
    //     paymentContainer.innerHTML = ''; // clear the container
    //     if (option.dataset.value === 'credit-card') {
    //     // create form elements
    //     const form = document.createElement('form');
    //     form.innerHTML = `
    //         <label>Card Number</label>
    //         <input type="text" name="card-number">
    //         <label>Expiry Date</label>
    //         <input type="text" name="expiry-date">
    //         <label>CVV</label>
    //         <input type="text" name="cvv">
    //         <button type="submit">Submit</button>
    //     `;
    //     form.addEventListener('submit', event => {
    //         event.preventDefault();
    //         const cardNumber = form.elements['card-number'].value;
    //         const expiryDate = form.elements['expiry-date'].value;
    //         const cvv = form.elements['cvv'].value;
    //         if (cardNumber === '123456789' && expiryDate === '11111111' && cvv === '111') {
    //         alert('Payment successful!');
    //         } else {
    //         alert('Wrong card details');
    //         }
    //     });
    //     paymentContainer.appendChild(form);
    //     } else if (option.dataset.value === 'paypal') {
    //     // create message element
    //     const message = document.createElement('p');
    //     message.textContent = 'Please proceed to PayPal to complete your payment.';
    //     paymentContainer.appendChild(message);
    //     }
    // });
    // });


