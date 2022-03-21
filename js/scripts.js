//business logic
function Pizza(size,quantity,crust,topping){
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this,topping = topping;
};



//user-interface logic

$(document).ready(function(){
    $("#small").click(function(){
        $("#small-pizza").show();
        $("#medium-pizza").hide();
        $("#large-pizza").hide();
    })
    $("#medium").click(function(){
        $("#small-pizza").hide();
        $("#medium-pizza").show();
        $("#large-pizza").hide();
    })
    $("#large").click(function(){
        $("#small-pizza").hide();
        $("#medium-pizza").hide();
        $("#large-pizza").show();
    })

    $("#charge").click(function(){
        var newquantitySmall = $('#')
    })
})