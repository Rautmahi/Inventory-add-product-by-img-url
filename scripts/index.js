//store the products array in localstorage as "data"




let arr=JSON.parse(localStorage.getItem("data")) || []
  function Product (b,n,p,i)
  {
      this.Brand=b;
      this.name =n;
      this.price=p;
      this.image=i;

  }


  function addProduct(event)
  {

    event.preventDefault()

    let form=document.getElementById("product_form")
    let Brand=form.product_brand.value;
    // console.log("Brand:",Brand)
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;

    let p1=new Product(Brand,name,price,image)
    arr.push(p1)
    console.log(arr)

    localStorage.setItem("data",JSON.stringify(arr))
  }







  
