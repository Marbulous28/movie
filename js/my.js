//Buissenssss logic
function Ticket(mChoice, tChoice, aChoice){
  this.movie = mChoice;
  this.time = tChoice;
  this.age = aChoice;
  this.price = 10;
}

Ticket.prototype.calculatePrice = function(){
  if (this.movie === "1" || this.movie === "4") {
    this.price -= 1;
  } else if (this.movie === "3") {
    this.price -= 2;
  }

  if(this.time === "time1") {
    this.price -= 1;
  }

  if (this.age === "senior" || this.age === "child") {
      this.price -= 1;
  }
  return this.price;

}

// UI logic
$(document).ready(function() {
  $("form#ticketInfo").submit(function(event) {
    event.preventDefault();

    var movieChoice = $("#movie-choice").val();
    var time = $("#time").val();
    var age = $("#age").val();
    var newTicket = new Ticket(movieChoice, time, age);

    $("#display").text(newTicket.calculatePrice() + " $");

  });
});
