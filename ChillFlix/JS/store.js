var finalTotal = 0; //so total keeps changing
function addToCart(item,price){  //function to print the items in the shopping cart
    let qty = 0;
    if(item=="Us Poster"){  //assigning the quantity value based on the id of the item selected
        qty = document.getElementById("quantity1").value;
    } else if(item=="Dune Poster"){
        qty = document.getElementById("quantity2").value;
    } else if(item=="Titanic Poster"){
        qty = document.getElementById("quantity3").value;
    }else{
        qty = document.getElementById("quantity4").value;
    }
    if(qty>10 || qty<0){  //making sure quantity within the range is entered
        alert("Choose a quantity between 1-10")
    }else{
        if(qty==0){
            alert("No item was added as quantity was 0")  //making sure quantity is not 0
        }else{
            let total = qty*price;
            document.getElementById("itemName").innerHTML +="<br>"+item+"<br>";  //setting and appending values to print in cart (https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_p)
            document.getElementById("itemQuantity").innerHTML +="<br>"+qty+"<br>";
            document.getElementById("itemPrice").innerHTML +="<br>£"+total+" <br>";
            finalTotal=finalTotal+total;  //calculating the total amount of items bought
            document.getElementById("total").innerHTML ="£"+finalTotal;  //assigning total value in the area the id is in
        }
    }
}
//https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html
function openForm() {   //opens the check out form
    let flag=true;
    let name=document.getElementById("name").value;  //getting the values stored in these ids
    let email=document.getElementById("useremail").value;

    if(finalTotal == 0){   //making sure the cart is not empty
        alert("Cart is empty!")
        flag=false;
    }

    if(name == ""){ //making sure name is entered
        alert("Please enter your name")
        flag=false;
    }

    if(email == ""){  //making sure email is entered
        alert("Please enter your email")
        flag=false;
    }

    if(flag){
        document.getElementById("popupForm").style.display = "block";  //making the checkout form visible
        document.getElementById("cardHolderName").innerHTML=name;  //setting the name values in the form
        document.getElementById("email").innerHTML=email;
        document.getElementById("checkoutTotal").innerHTML ="£"+finalTotal;
    }
}

function openEditForm(){
    document.getElementById("edit").style.display = "block";  //making edit form visible
}

function closeForm() {   //closing the form
    document.getElementById("popupForm").style.display = "none";  //making the checkout form not visible
}

function closeEditForm(){    
    document.getElementById("edit").style.display = "none";  //making the edit form not visible
}

function confirmChanges(){  //to confirm changes made in the address
    let flag2=true;
    let address=document.getElementById("address").value; 
    let code=document.getElementById("code").value;
    let country=document.getElementById("country").value;
    if(address==""){  //making sure these are filled
        alert("Please enter your Address")
        flag2=false;
    }
    if(code==""){
        alert("Please enter your Postcode/ZIP code")
        flag2=false;
    }
    if(country==""){
        alert("Please enter your country")
        flag2=false;
    }
    if(flag2){  //assigning the variables to ids if conditions are fulfilled
        document.getElementById("editAddress").innerHTML=address;  
        document.getElementById("editCode").innerHTML=code;
        document.getElementById("editCountry").innerHTML =country;
        document.getElementById("edit").style.display = "none";
    }    
}