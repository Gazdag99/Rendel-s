//OBjektum létrehozása 

const orders = [
    {
        id:1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi Zero",
        ar: 3010, 
        kep: "https://www.pizzaboypecs.hu/upload/images/products/IMG_0090k.png"
        },
    {
        id:2,
        pizza: "Margaréta",
        extra: "Oliva",
        ital: "Coca Cola Zero",
        ar: 2910, 
        kep: "https://www.pizzaboypecs.hu/upload/images/products/IMG_0007_k.png"
        },
    {
        id:3,
        pizza: "Calzone",
        extra: "Füstölt Sajt",
        ital: "Sprite",
        ar: 3900, 
        kep: "https://www.pizzaboypecs.hu/upload/images/products/IMG_0162k.png"
        },
    {
        id:4,
        pizza: "Son-Go-Ku",
        extra: "Bacon",
        ital: "Fanta",
        ar: 3180, 
        kep: "https://www.pizzaboypecs.hu/upload/images/products/IMG_0315k.png"
        },
    {
        id:5,
        pizza: "All-in",
        extra: "Kukorica",
        ital: "Narancslé",
        ar: 4230, 
        kep: "https://www.pizzaboypecs.hu/upload/images/products/IMG_0892k.png"
        },
        
]


window.addEventListener("load", function(){

    let output = ''; 
    orders.map (order =>{
        output += `
        <div class="order">

        <img src="${order.kep}">
        <p>Sorszám: ${order.id}</p>
        <h3>Rendelés: ${order.pizza}</h3>
        <strong>Extra: ${order.extra} </strong>
        <p>Üditő: ${order.ital}</p>
        <strong>Végösszeg: ${order.ar}</strong> 

        </div>
        `
    })
    document.getElementById("results").innerHTML = output; 
})

