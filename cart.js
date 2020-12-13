
var count = 0;
function addToCart()
{
    count = count + 1;
    document.getElementById("cartCount").innerText = count; 
    alert("تمت اضافة المنتج الى سلة المشتريات");
}
