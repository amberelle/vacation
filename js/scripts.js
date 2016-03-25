
$(document).ready(function() {
  $("#submit").click(function(event) {

    var purpose = $("#purpose").val();
    var locale = $("#locale").val();


      event.preventDefault();

    if (purpose  === "relax") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Paris, France");
            $("#paris").show();
            $("#peru").hide();
      }
      if (locale === "tropical") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "mountains") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
    }
    if (purpose  === "sites") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "tropical") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "mountains") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
    }
    if (purpose  === "adventure") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "tropical") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "mountains") {
        $("#findMe").text("Mountains of Peru");
            $("#peru").show();
            $("#paris").hide();
      }
    }
    if (purpose  === "volunteer") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "tropical") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
      if (locale === "mountains") {
        $("#findMe").text("Steve Buscemi");
            $("#img1").show();
            $("#img2").hide();
      }
    }


    $("#quote").show();

  });
});
