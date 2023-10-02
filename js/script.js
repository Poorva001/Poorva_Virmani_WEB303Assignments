const message = "Loading...";
const errorMessage = "Can't display the data";
function jsonMethod() {
  $.getJSON("team.json", function (data) {
    $.each(data.members, function (index, obj) {
      $("#team").append("<h2>" + obj.name + "</h2>");
      $("#team").append("<h5>" + obj.position + "</h5>");
      $("#team").append("<p>" + obj.bio + "</p>");
    });
  });
}
function ajaxMethod() {
  $.ajax({
    type: "GET",
    url: "team.json",
    dataType: "json",
    beforeSend: function () {
      $("#team").append("<p>" + message + "</p>");
    },
    success: function (response) {
      setTimeout(function () {
        $("#team").empty();
        $.each(response.members, function (index, obj) {
          $("#team").append("<h2>" + obj.name + "</h2>");
          $("#team").append("<h5>" + obj.position + "</h5>");
          $("#team").append("<p>" + obj.bio + "</p>");
        });
      }, 3000);
    },
    error: function () {
      $("#team").append("<p>" + errorMessage + "</p>");
    }
  });
}
$(document).ready(function () {
  jsonMethod();
  //ajaxMethod();
});
