alert("halima is precious");

//Business Logic
function Address(streetAddress, city, state) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.deliveryAddress = (streetAddress + "  " + city + ", " + state);
}//User Interface Logic
$(document).ready(function(event) {
    $("#pickup-btn").click(function() {
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("PICKUP BY CUSTOMER");
    });
    $("#delivery-btn").click(function() {
        $("#address").show();
        $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
    });
    $("form#address-form").submit(function(event) {
        event.preventDefault();
        var streetAddress = $("input#street-add").val();
        var city = $("input#city-add").val();
        var state = $("input#state-select").val();
        // var zipcode = $("input#zip-add").val();
        var newAddress = new Address(streetAddress, city, state)
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
    });
    $("#sides-dropdown").click(function() {
        $("#sides-details").toggle();
    });
    ///Checkout Btn
    $("#checkout-btn").click(function() {
        location.reload();
    });
});


