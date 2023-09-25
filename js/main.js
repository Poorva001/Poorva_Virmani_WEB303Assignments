//WEB303 Assignment 2
//Name - Poorva Virmani
//StudentID - W0816105
$(document).ready(function () {
  const content = $("#content");

  function LoadContent(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", page, true);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        content.fadeOut(500, function () {
          content.html(xhttp.responseText);
          content.fadeIn(500);
        });
      }
    };
    xhttp.send();
  }

  $("#prospect").on("click", function () {
    content.empty();
    LoadContent("prospect.html");
  });

  $("#convert").on("click", function () {
    content.empty();
    LoadContent("convert.html");
  });

  $("#retain").on("click", function () {
    content.empty();
    LoadContent("retain.html");
  });
});
