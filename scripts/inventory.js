

let local=JSON.parse(localStorage.getItem("data"))
console.log("local:" ,local);
local.map(function (ele,index)
{
  let box=document.createElement("div")
  let image=document.createElement("img")
  image.src=ele.image
  let Brand=document.createElement("p")
  Brand.innerText=ele.Brand
  let name=document.createElement("p")
  name.innerText=ele.name
  let price=document.createElement("p")
  price.innerText=ele.price

  let btn=document.createElement("button")
  btn.innerHTML="Remove Product"
 btn.setAttribute("id","remove_product")
  btn.addEventListener("click",function()
  {
    removeproduct(ele,index)
  })

  box.append(image,Brand,name,price,btn)
  document.querySelector("#products_data").append(box)

})
function removeproduct(ele,index)

{
  console.log(ele,index)
  local.splice(index,1)
  console.log(local)

  localStorage.setItem("data",JSON.stringify(local));
  window.location.reload();
}





