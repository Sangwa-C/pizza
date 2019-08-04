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

console.log("hhhhhhhhhhhhhh");


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

// // business logic
// function Contact(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// // user interface logic
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();

//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();

//     var newContact = new Contact(inputtedFirstName, inputtedLastName);

//     $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//   });
// }); 