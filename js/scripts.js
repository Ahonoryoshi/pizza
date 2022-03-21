//business logic
function Pizza(size,quantity,crust,topping,price){
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this.topping = topping;
    this.price = price;
};

Pizza.prototype.detaills = function(){
    return 'You ordered ' +  this.quantity +" "+ this.size + " pizzas with " +
    this.crust + " crust, and " + this.topping +
    " topping. This will cost ksh " + this.price
};



//user-interface logic

$(document).ready(function(){
    $("#small").click(function(){
        $("#small-pizza").show();
        $("#medium-pizza").hide();
        $("#large-pizza").hide();
        $("#qs").attr("required", "true");
        $("#crusts").attr("required", "true");
        $("#toppings").attr("required", "true");
        $("#qm").removeAttr('required');
        $("#crustm").removeAttr('required');
        $("#toppingm").removeAttr('required');
        $("#ql").removeAttr('required');
        $("#crustl").removeAttr('required');
        $("#toppingl").removeAttr('required');

    });
    $("#medium").click(function(){
        $("#small-pizza").hide();
        $("#medium-pizza").show();
        $("#large-pizza").hide();
        $("#qm").attr("required", "true");
        $("#crustm").attr("required", "true");
        $("#toppingm").attr("required", "true");
        $("#qs").removeAttr('required');
        $("#crusts").removeAttr('required');
        $("#toppings").removeAttr('required');
        $("#ql").removeAttr('required');
        $("#crustl").removeAttr('required');
        $("#toppingl").removeAttr('required');
    });
    $("#large").click(function(){
        $("#small-pizza").hide();
        $("#medium-pizza").hide();
        $("#large-pizza").show();
        $("#ql").attr("required", "true");
        $("#crustl").attr("required", "true");
        $("#toppingl").attr("required", "true");
        $("#qs").removeAttr('required');
        $("#crusts").removeAttr('required');
        $("#toppings").removeAttr('required');
        $("#qm").removeAttr('required');
        $("#crustm").removeAttr('required');
        $("#toppingm").removeAttr('required');
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
            var toppingprice = parseInt($("input[type=radio][name=toppings]:checked").val().slice(0,3));
        }
        else if (newSize==="medium"){
            var newQuantity = parseInt($('#qm').val());
            var newCrust = $("input[type=radio][name=crustm]:checked").val().slice(3);
            var newTopping = $("input[type=radio][name=toppingm]:checked").val().slice(3);
            var crustPrice = parseInt($("input[type=radio][name=crustm]:checked").val().slice(0,3));
            var toppingprice = parseInt($("input[type=radio][name=toppingm]:checked").val().slice(0,3));
        }
        else if (newSize==="large"){
            var newQuantity = parseInt($('#ql').val());
            var newCrust = $("input[type=radio][name=crustl]:checked").val().slice(3);
            var newTopping = $("input[type=radio][name=toppingl]:checked").val().slice(3);
            var crustPrice =parseInt($("input[type=radio][name=crustl]:checked").val().slice(0,3));
            var toppingprice = parseInt($("input[type=radio][name=toppingl]:checked").val().slice(0,3));
        }
        else{
            alert('select size')
        }

        var deliverPrice = parseInt($("input[type=radio][name=delivery]:checked").val().slice(0,3));

        var newPrice = (crustPrice + toppingprice) * newQuantity + deliverPrice;
        var newPizza = new Pizza(newSize,newQuantity,newCrust,newTopping,newPrice);

        var town = $("#town").val();
        var street = $("#street").val();
        var houseNumber = $("#house-number").val();

        if(deliverPrice===200){
            $("#address").text(town + ' town, ' + street + ' street, house number ' + houseNumber);
            $("#deliveralert").show();
            $("#pickalert").hide();
        }
        else{
            $("#pickalert").show();
            $("#deliveralert").hide();
        }



        $('#checkout').text(newPizza.detaills())
        $('.details').show();
        $('#submit').show();



        $("#pizaa").submit(function(event){
            event.preventDefault();
            alert("Thank you for shopping with us." +
            "You will make your payment on delivery or pickup")
        })
    })

});