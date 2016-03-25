
$(document).ready(function() {
  $("#submit").click(function(event) {

    var purpose = $("#purpose").val();
    var locale = $("#locale").val();
    

      event.preventDefault();

    if (purpose  === "relax") {
      // $("#george").toggle();
      if (hairpref === "blonde") {
          if (humor === "funny"){
            $("#winner").text("Steve Buscemi");
            $("#img1").show();
          }
          if (humor === "serious")
          $("#winner").text("Chris Hemsworth");
          }
      if (hairpref === "brunette") {
        if (humor === "funny"){
          $("#winner").text("Chris Prat");
        }
        if (humor === "serious")
        $("#winner").text("Robert Patinson");
        }

      }
      if (purpose === "sites") {
        // $("#george").toggle();
        if (hairpref === "blonde") {
            if (humor === "funny"){
              $("#winner").text("Kristen Wigg");
            }
            if (humor === "serious")
            $("#winner").text("Scarlet Johanssen");
            }
        if (hairpref === "brunette") {
          if (humor === "funny"){
            $("#winner").text("Olivia Munn");
          }
          if (humor === "serious")
          $("#winner").text("Megan Fox");
          }

        }

        if (purpose === "adventure") {
          // $("#george").toggle();
          if (hairpref === "blonde") {
              if (humor === "funny"){
                $("#winner").text("Kristen Wigg");
              }
              if (humor === "serious")
              $("#winner").text("Scarlet Johanssen");
              }
          if (hairpref === "brunette") {
            if (humor === "funny"){
              $("#winner").text("Olivia Munn");
            }
            if (humor === "serious")
            $("#winner").text("Megan Fox");
            }

          }

          if (purpose === "volunteer") {
            // $("#george").toggle();
            if (hairpref === "blonde") {
                if (humor === "funny"){
                  $("#winner").text("Kristen Wigg");
                }
                if (humor === "serious")
                $("#winner").text("Scarlet Johanssen");
                }
            if (hairpref === "brunette") {
              if (humor === "funny"){
                $("#winner").text("Olivia Munn");
              }
              if (humor === "serious")
              $("#winner").text("Megan Fox");
              }

            }



    $("#quote").show();

  });
});
