document.addEventListener("DOMContentLoaded",function(){
    const ingrediants = document.querySelectorAll(".ingrediant");
    const totalpriceElement = document.getElementById("totalprice")

    ingrediants.forEach(ingrediant => {
        ingrediant.addEventListener("change",updateTotalprice);
    });

    function updateTotalprice(){
        let totalprice = 0;

        ingrediants.forEach( ingrediant =>{
            if (ingrediant.checked){
                const price = parseFloat(ingrediant.getAttribute("data-price"));
                totalprice +=  price + 40;
            }
        });
        totalpriceElement.textContent = totalprice.toFixed(2);
    }
    orderButton.addEventListener("click",function(){
        if(totalpriceElement.textContent <= 40){
            alert("please select an ingrediant");
        }
        else{
            alert("your order is placed for burger");
        }
        
    });
});