// business logic
function Order(size, crust, topping, number){
  this.size= size;
  this.crust=crust;
  this.topping= topping;
  this.number= number;
}

Order.prototype.pizza=function(){
  return "Your Order: Pizza size is " + this.size+ ", crust chosen is " + this.crust + ", with " + this.topping + ", the quantity is " + this.number
}



// user interface logic
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

  $("#oda").click (function(){

    var inputtedSize=$("select#size").val();
    // console.log("inputtedSize");
    if ($("select#size").val()==="small"){
      var money1 = 5
    }else if ($("select#size").val()==="medium"){
      var money1 = 7
    }else if ($("select#size").val()==="large"){
      var money1 = 12
    } else{
      alert("Please refresh and re-order")
    }


    var inputtedCrust=$("select#crust").val();
    // console.log("inputtedCrust");
    if ($("select#crust").val() ==="Crispy"){
      var money2= 1
    } else if ($("select#crust").val() ==="Stuffed"){
      var money2= 3
    }else if ($("select#crust").val() ==="Gluten-free"){
      var money2= 5
    }else{
      alert("Please refresh and re-order")
    }

    var inputtedTopping=$("select#topping").val();
    console.log("inputtedTopping");
    if($("select#topping").val()==="Pepperoni"){
      var money3=1
    } else if ($("select#topping").val()==="Mushrooms"){
      var money3=1
    } else if ($("select#topping").val()==="Onions"){
      var money3=1
    }  else if ($("select#topping").val()==="Sausage"){
      var money3=1
    } else if ($("select#topping").val()==="Bacon"){
      var money3=1
    }  else if ($("select#topping").val()==="Extra cheese"){
      var money3=1
    } else if ($("select#topping").val()==="Black olives"){
      var money3=1
    } else if ($("select#topping").val()==="Green peppers"){
      var money3=1
    } else {
      alert("Please refresh and re-order")
    }
    
    var inputtedNumber=$("select#number").val();
    console.log(inputtedNumber);
    // if($("select#number").val()===1){
    //   var money3=1
    // }
    var newPizza= new Order (inputtedSize, inputtedCrust, inputtedTopping,inputtedNumber);
    var pizzaMoney= parseInt(money1) +parseInt(money2)+parseInt(money3)
    var totalMoney = pizzaMoney * inputtedNumber

    $("div#sample").append("<p>" + "The charge will be " +totalMoney + " $"+ "</p>");
    console.log(pizzaMoney);

    $("div#sample").append("<p>" + newPizza.pizza() + "</p>");
    console.log(newPizza);
    });

  

  });
});


$(document).ready(function() {
  $("#delivery").click (function(){            

    $("#address").show();
    alert("your order will be delivered to your location. let us know your location!")
  });
});

$(document).ready(function() {
  $("#bobo").click (function(){
    
    $("#order").clear();
  });
})

