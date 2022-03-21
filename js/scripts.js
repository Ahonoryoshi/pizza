//business logic
function Pizza(size,quantity,crust,topping){
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this.topping = topping;
};

Pizza.prototype.detaills = function(){
    return 'You ordered ' +  this.quantity +" "+ this.size + " pizzas with " +
    this.crust + " crust, and " + this.topping + " topping"
}



//user-interface logic

$(document).ready(function(){
    $("#small").click(function(){
        $("#small-pizza").show();
        $("#medium-pizza").hide();
        $("#large-pizza").hide();
    });
    $("#medium").click(function(){
        $("#small-pizza").hide();
        $("#medium-pizza").show();
        $("#large-pizza").hide();
    });
    $("#large").click(function(){
        $("#small-pizza").hide();
        $("#medium-pizza").hide();
        $("#large-pizza").show();
    });

    $("#deliver").click(function(){
        $(".location").show();
    })
    $("#pickup").click(function(){
        $(".location").hide();
    });



    $('#charge').click(function(event){
        event.preventDefault();
        var newSize = $("input[type=radio][name=size]:checked").val();
        if (newSize==="small"){
            var newQuantity = parseInt($('#qs').val());
            var newCrust = $("input[type=radio][name=crusts]:checked").val().slice(3);
            var newTopping = $("input[type=radio][name=toppings]:checked").val().slice(3);
            var crustPrice = parseInt($("input[type=radio][name=crusts]:checked").val().slice(0,3));
            var Toppingprice = parseInt($("input[type=radio][name=toppings]:checked").val().slice(0,3));
        }
        else if (newSize==="medium"){
            var newQuantity = parseInt($('#qm').val());
            var newCrust = $("input[type=radio][name=crustm]:checked").val().slice(3);
            var newTopping = $("input[type=radio][name=toppingm]:checked").val().slice(3);
            var crustPrice = parseInt($("input[type=radio][name=crustm]:checked").val().slice(0,3));
            var Toppingprice = parseInt($("input[type=radio][name=toppingm]:checked").val().slice(0,3));
        }
        else if (newSize==="large"){
            var newQuantity = parseInt($('#ql').val());
            var newCrust = $("input[type=radio][name=crustl]:checked").val().slice(3);
            var newTopping = $("input[type=radio][name=toppingl]:checked").val().slice(3);
            var crustPrice =parseInt($("input[type=radio][name=crustl]:checked").val().slice(0,3));
            var Toppingprice = parseInt($("input[type=radio][name=toppingl]:checked").val().slice(0,3));
        }
        else{
            alert('select size')
        }

        var newPizza = new Pizza(newSize,newQuantity,newCrust,newTopping);

        var newPrice =

        $('#checkout').text(newPizza.detaills())
        $('.details').show();
    })

});