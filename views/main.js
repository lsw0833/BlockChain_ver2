setInterval(load_data, 1000);
setInterval(load_address, 1000);
function load_data() {
  $.ajax({
    type: "GET",
    url: "/balance",
    success: function(data) {
      var content = "" + data.Balance + " Dac";
      $("#balance").html(content);
    }
  });
}
function load_address() {
  $.ajax({
    type: "GET",
    url: "/address",
    success: function(data) {
      var content = data.address;
      $("#adres").html(content);
    }
  });
}
