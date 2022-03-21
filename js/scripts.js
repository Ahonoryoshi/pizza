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



    $('#charge').click(function(){
        var newSize = $("input[type=radio][name=size]:checked").val();
        if (newSize==="small"){
            var newQuantity = parseInt($('#qs').val());
            var newCrust = $("input[type=radio][name=crusts]:checked").val();
            var newTopping = $("input[type=radio][name=toppings]:checked").val();
        }
        else if (newSize==="medium"){
            var newQuantity = parseInt($('#qm').val());
            var newCrust = $("input[type=radio][name=crustm]:checked").val();
            var newTopping = $("input[type=radio][name=toppingm]:checked").val();
        }
        else if (newSize==="large"){
            var newQuantity = parseInt($('#ql').val());
            var newCrust = $("input[type=radio][name=crustl]:checked").val();
            var newTopping = $("input[type=radio][name=toppingl]:checked").val();
        }
    })

});