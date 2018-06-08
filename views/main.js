setInterval(load_data, 1000);

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
