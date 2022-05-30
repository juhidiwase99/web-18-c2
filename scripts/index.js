// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu"

async function getData(){
  try{
    let res=await fetch(url);
    let users = await res.json();
    appenddiv(users.menu.data)
    //console.log(users.menu.data)
  }
  catch(err){
    console.log(err)
    
  }
}
getData()


let arr =JSON.parse(localStorage.getItem("coffee"))||[]
      let total = arr.length;
      let item_div = document.querySelector("#coffee_count");
      item_div.innerText=total


function appenddiv(data){
  data.forEach(function(el){
    //console.log(data)
    
    let container=document.getElementById("menu");
    let box=document.createElement("div");
    box.style.border="1px solid blue"
    box.setAttribute("id","box")
    let img=document.createElement("img");
    img.src=el.image
    let flavour=document.createElement("p");
    flavour.innerText=el.title
    let price=document.createElement("p");
    price.innerText=el.price
    price.addEventListener("click",function(){
      console.log(this.innerText)
      let price =this.innerText
      localStorage.setItem("coffee",price)
    })
    

    // let button=document.createElement("a")
    // button.innerText="Add to bucket"
    // button.href="bucket.html"
    // button.style.marginLeft="35%"
    let bukbutton = document.createElement("button")
      bukbutton.innerText="Add to Bucket"
      bukbutton.style.marginLeft="35%"
      bukbutton.setAttribute("id","add_to_bucket")
      bukbutton.addEventListener("click",function(){
          addtobucket(el);
      })

    box.append(img,flavour,price,bukbutton)
    container.append(box)

  })

}

//   function cart(dat){
//     let objproduct={
//       img:data.img,
//       flavour:data.title,
//       price:data.price,
//   }
// console.log(objproduct)
function addtobucket(el){
      arr.push(el)
      localStorage.setItem("coffee",JSON.stringify(arr))
      let total = arr.length;
      let item_div = document.querySelector("#coffee_count");
      item_div.innerText=total
      // console.log(total)

}