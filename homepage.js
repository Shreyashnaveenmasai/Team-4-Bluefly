
function storeEmail() {
    let data = JSON.parse(localStorage.getItem("subscribers")) || [];
    event.preventDefault();
    let val = document.querySelector("#subEmail").value;
    data.push(val);
    localStorage.setItem("subscribers",JSON.stringify(data));
} 


function check() {
    let validity = localStorage.getItem("login");

    if(validity == 1) {
        window.location = "profile.html";
    } else {
        window.location = "./login.html";
    }
}


let Arrival = [
    {   
        id : 1001,
        qty: 1,
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/myzcata07qh001-8809735100960-a-1_1800x1800.jpg?v=1672939755",
        brand : "MCM",
        name : "MCM WOMEN'S POWDER PINK VISETOS COATED CANVAS CROSSBODY POUCH BAG MYZCATA07QH001",
        best_price : "370.00",
        mrp_price : "470.00",
        discount : "Save 21%",
        details : "Usually ships in 1 to 2 business days Made of coated canvas; Top zip closure; Front flat pocket; Adjustable and removable strap; Gold hardware; Inside zipper pocket; Measurements: 11.25 L x 8.25 H x 0.5 W Inches; Comes with original tags, dust bag and authenticity cards.",
    },
    
    {   
        id : 1002,
        qty: 1,
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/R29ItRV79rrBMgRpWNJJZjxIrk5wHB1r-25_1800x1800.jpg?v=1672937083",
        brand : "PERFECT MOMENT",
        name : "PIRTUK WOMENS GOOSE DOWN SKI QUILTED COAT",
        best_price : "328.99",
        mrp_price : "700.00",
        discount : "Save 53%",
        details : "Condition: Style Type: Quilted Coat, Collection: Perfect Moment, Closure: Zipper, Material: 100% Polyester, Fill: 90% Goose Down 10% Feathers, Fabric Type: Polyester, Specialty: Pinstripe"
    },
    
    {   id : 1003,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313522880_RLLZ_1_1800x1800.jpg?v=1673120069",
        brand : "CELINE",
        name : "CELINE JANE CANVAS & LEATHER PLATFORM SNEAKER",
        best_price : "589.99",
        mrp_price : "690.00",
        discount : "Save 14%",
        details : "About The Brand: Classic, Coveted Parisian Chic, Please Note: Size Selections Are European. For Us Conversions, Please Reference Size Chart, Made In Spain, Jane Canvas & Leather Platform Sneaker In White Canvas And Leather And Silver-Tone Hardware With Logo Accent, Lace-Up Closure, Lightly Padded Insole, Rubber Sole With Traction, 1.5In Platform, Please Note: All Measurements Are Approximate And Were Taken From A Size 37; Slight Variations May Occur, Our Products Are 100% Genuine. In Some Cases We Purchase Merchandise From Trusted Independent Suppliers And Not Directly From The Brand Owner. In All Cases We Stand By The Authenticity Of Every Product Sold On Our Site."
    },
    
    {   
        id : 1004,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111533651_RLLZ_1_1800x1800.jpg?v=1672931917",
        brand : "BURBERRY",
        name : "BURBERRY TB MONOGRAM REVERSIBLE E-CANVAS & LEATHER BELT",
        best_price : "398.99",
        mrp_price : "480.00",
        discount : "Save 17%",
        details : "About The Brand: Iconic Patterns, Materials And Silhouettes Have Made Burberry A Coveted Luxury Staple Since 1856. From Waterproof, Patented Gabardine Fabric To The Unmistakable Vintage Check And The More Modern Monogram Pattern, Burberry Boasts Undeniably British Influence With Timeless Appeal. Tb Monogram Reversible E-Canvas & Leather Belt In Archive Beige Vintage Check E-Canvas; Reverses To Tan Leather With Gold-Tone Hardware, Monogram Buckle And Pin Buckle Closure Measures 1In Wide, Made In Italy, Please Note: All Measurements Were Taken By Hand And Are Approximate; Slight Variations May Occur. Our Products Are 100% Genuine. In Some Cases We Purchase Merchandise From Trusted Independent Suppliers And Not Directly From The Brand Owner. In All Cases We Stand By The Authenticity Of Every Product Sold On Our Site."
    },
    
    {   
        id : 1005,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/63b4645088e00_1800x1800.jpg?v=1672941901",
        brand : "POMPEII3",
        name : "1 1/4CT DIAMOND & MOISSANITE ACCENT ENGAGEMENT RING IN 10K GOLD",
        best_price : "1,078.80",
        mrp_price : "2,697.00",
        discount : "Save 60%",
        details : "Usually ships in 1 to 2 business days Women's ring is made of solid 10k gold and features 6mm round brilliant cut genuine moissanite. The stone is accented with round brilliant cut diamonds. The stones are set in solid metal with high polished shiny finish."
    },
];

let trend = [
    {   
        id: 1006,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1044770_9a3e0b24-b5a0-44fa-99ef-9dcbb055fc56_1800x1800.jpg?v=1633855402",
        brand : "BALENCIAGA",
        name : "BALENCIAGA HANDBAGS CITY WOMEN LEATHER RED",
        best_price : "1,176.68",
        mrp_price : "1,866.00",
        discount : "Save 37%",
        details : "The Product with code 542022CU5JJ6420 model city in red leather is a women's handbags designed by Balenciaga. It has features like studs , adjustable shoulder , removable shoulder. The product is made by the following materials: leather, Zip closure, Size Bag : medium, Height: 20 cm, Width: 29.5 cm, Depth: 10 cm, Shouder Length: 113 cm, Handle Length: 9.5 cm, The product was made in Italy"
    },

    {   
        id : 1007,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1070510_1800x1800.jpg?v=1633732658",
        brand : "GIVENCHY",
        name : "GIVENCHY ANKLE BOOTS BOTTE SHOW WOMEN LEATHER BLACK",
        best_price : "672.90",
        mrp_price : "1,553.00",
        discount : "Save 57%",
        details : "Usually ships in 1 to 2 business days, The product with code BE6012E087001 model botte show in black leather is a women's ankle boots designed by Givenchy, The product is made by the following materials: leather, Hell height type: mid heels, Bottomed Shoes is rubber, leather, Zip closure, Pointy toe, The product was made in Italy"
    },

    {   
        id : 1008,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1924396_1800x1800.jpg?v=1673038041",
        brand : "BURBERRY",
        name : "ARCHIVE BEIGE IP CHK DRESS",
        best_price : "670.81",
        mrp_price : "867.00",
        discount : "Save 23%",
        details : "Usually ships in 1 to 2 business days, Archive beige ip chk Dress, 95% Cotone, 5% Elastan"
    },

    {
        id : 1009,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1035747_1800x1800.jpg?v=1635150228",
        brand : "SAINT LAURENT",
        name : "SAINT LAURENT BACKPACK AND BUMBAGS MEN FABRIC BLACK",
        best_price : "612.68",
        mrp_price : "782.00",
        discount : "Save 22%",
        details : "Usually ships in 1 to 2 business days, The product with code 581375HO21Z1054 fabric is a men's backpack and bumbags in black designed by Saint Laurent. It has features like back adjustable straps , front logo, The product is made by the following materials: fabric, Zip closure, Size Bag : medium, Height: 17 cm, Width: 25 cm, Depth: 9 cm, The product was made in Italy"
    },

    {
        id : 10010,
        qty : "1",
        image_url : "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1044778_00342bb3-8266-4f15-9fd2-2e926bc821f2_1800x1800.jpg?v=1633855404",
        brand : "BALENCIAGA",
        name : "BALENCIAGA HANDBAGS CITY WOMEN LEATHER GRAY",
        best_price : "1,322.70",
        mrp_price : "2,107.00",
        discount : "Save 37%",
        details : "Usually ships in 1 to 2 business days, The Product with code 542026CU5JJ1560 model city in gray leather is a women's handbags designed by Balenciaga. It has features like studs, The product is made by the following materials: leather, Zip closure, Size Bag : maxi, Height: 21 cm, Width: 42.5 cm, Depth: 18 cm, Shouder Length: 107 cm, Handle Length: 15 cm, The product was made in Italy"
    }    
];


function pushProducts() {
    pushArrival();
    pushTrend();
}

function pushArrival() {
    Arrival.forEach(function(obj, index) {
        let div = document.createElement("div");
        div.style.cursor = "pointer";
        let image = document.createElement("img");
        image.setAttribute("src", obj.image_url);
        image.addEventListener("click", function() {
            localStorage.setItem("currArr", JSON.stringify(Arrival));
            localStorage.setItem("viewObj", JSON.stringify(obj));
            localStorage.setItem("objID", obj.id);
            localStorage.setItem("objIndex",index);
            window.location = "view.html";
        });

        let p1 = document.createElement("p");
        p1.textContent = obj.name;
        p1.addEventListener("click", function() {
            localStorage.setItem("currArr", JSON.stringify(trend));
            localStorage.setItem("viewObj", JSON.stringify(obj));
            localStorage.setItem("objID", obj.id);
            localStorage.setItem("objIndex",index);
            window.location = "view.html";
        });

        let p2 = document.createElement("p");
        p2.addEventListener("click", function() {
            localStorage.setItem("currArr", JSON.stringify(trend));
            localStorage.setItem("viewObj", JSON.stringify(obj));
            localStorage.setItem("objID", obj.id);
            localStorage.setItem("objIndex",index);
            window.location = "view.html";
        });
        
        let s = document.createElement("s");
        s.textContent = "$" + obj.mrp_price + " ";

        let span1 = document.createElement("span");
        span1.textContent = "$" + obj.best_price + " ";

        let span2 = document.createElement("span");
        span2.setAttribute("id", "save");
        span2.textContent = obj.discount;

        p2.append(s,span1,span2);

        div.append(image,p1,p2);

        document.querySelector("#arrival").append(div);
    });
}

function pushTrend() {
    trend.forEach(function(obj, index) {
        let div = document.createElement("div");
        div.style.cursor = "pointer";
        let image = document.createElement("img");
        image.setAttribute("src", obj.image_url);
        image.addEventListener("click", function() {
            localStorage.setItem("currArr", JSON.stringify(trend));
            localStorage.setItem("viewObj", JSON.stringify(obj));
            localStorage.setItem("objID", obj.id);
            localStorage.setItem("objIndex",index);
            window.location = "view.html";
        });

        let p1 = document.createElement("p");
        p1.textContent = obj.name;
        p1.addEventListener("click", function() {
            localStorage.setItem("currArr", JSON.stringify(trend));
            localStorage.setItem("viewObj", JSON.stringify(obj));
            localStorage.setItem("objID", obj.id);
            localStorage.setItem("objIndex",index);
            window.location = "view.html";
        });

        let p2 = document.createElement("p");
        p2.addEventListener("click", function() {
            localStorage.setItem("currArr", JSON.stringify(trend));
            localStorage.setItem("viewObj", JSON.stringify(obj));
            localStorage.setItem("objID", obj.id);
            localStorage.setItem("objIndex",index);
            window.location = "view.html";
        });
        
        let s = document.createElement("s");
        s.textContent = "$" + obj.mrp_price + " ";

        let span1 = document.createElement("span");
        span1.textContent = "$" + obj.best_price + " ";

        let span2 = document.createElement("span");
        span2.setAttribute("id", "save");
        span2.textContent = obj.discount;

        p2.append(s,span1,span2);

        div.append(image,p1,p2);

        document.querySelector("#trending").append(div);
    });
}

