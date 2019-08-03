// business logic
function order (size, crust, topping, number, deliver){
  this.size= size;
  this.crust=crust;
  this.topping= topping;
  this.number=number;
  this.deviler= deliver;
}

order.prototype.pizza=function(){
  return this.size+ " , " + this.crust + " , " + this.topping + " , " + this.number;
}

// user interface logic
$(document).ready(function() {
  var inputtedSize=$("inputted#size").val();
  var inputtedCrust=$("inputted#crust").val();
  var inputtedtopping=$("inputted#topping").val();
  var inputtedNUmber=$("inputted#number").val();
  var newPizza= new order (inputtedSize,inputtedCrust,inputtedtopping,inputtedNUmber);
$("p#sample").append("<p>" + newPizza.pizza() + "</p>");
});
