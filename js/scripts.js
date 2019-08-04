// business logic
function Order(size, crust, topping){
  this.size= size;
  this.crust=crust;
  this.topping= topping;
}

Order.prototype.pizza=function(){
  return this.size+ " , " + this.crust + " , " + this.topping  
}



// user interface logic
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

  $("#oda").click (function(){

    var inputtedSize=$("select#size").val();
    console.log("inputtedSize");
    var inputtedCrust=$("select#crust").val();
    console.log("inputtedCrust");
    var inputtedTopping=$("select#topping").val();
    console.log("inputtedTopping");

    var newPizza= new Order (inputtedSize, inputtedCrust, inputtedTopping);

    $("ul#sample").append("<li><span>" + newPizza.pizza() + "<li><span>");
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

