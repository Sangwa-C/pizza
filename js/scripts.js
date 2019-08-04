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

  $("button#delivery").click (function(){
    $("ul#kaki").append('<div class="address">'+'<div class="group">' +
                              '<label for="street">Street</label>' +
                              '<input type="text" class="street">' +
                            '</div>' +
                            '<div class="group">' +
                              '<label for="city">City</label>' +
                              '<input type="text" class="city">' +
                            '</div>'+
                          '</div>');
  });

  });
});
 