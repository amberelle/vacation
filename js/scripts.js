
$(document).ready(function() {


  $("#submit").click(function(event) {
  // $("#blanks").submit(function(event){}


    var personInput = $("input#person").val();
    var purpose = $("#purpose").val();
    var locale = $("#locale").val();

    $(".person").text(personInput);


      event.preventDefault();

    if (purpose  === "relax") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Paris, France");
            $("#paris").show();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();


      }
      if (locale === "tropical") {
        $("#findMe").text("Koh Ta Kiev, Cambodia");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").show();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
      if (locale === "mountains") {
        $("#findMe").text("Mt. Hood, Oregon");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").show();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
    }
    if (purpose  === "sites") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Rome, Italy");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").show();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
      if (locale === "tropical") {
            $("#findMe").text("Hawaii");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").show();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
      if (locale === "mountains") {
        $("#findMe").text("Rougon, France");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").show();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
    }
    if (purpose  === "adventure") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Boulder, Colorado");
          $("#paris").hide();
          $("#peru").hide();
          $("#rocky").hide();
          $("#koh").hide();
          $("#hood").hide();
          $("#rome").hide();
          $("#hawaii").hide();
          $("#rougon").hide();
          $("#denver").show();
          $("#costa").hide();
          $("#bang").hide();
          $("#haiti").hide();
      }
      if (locale === "tropical") {
        $("#findMe").text("Costa Rica");
          $("#paris").hide();
          $("#peru").hide();
          $("#rocky").hide();
          $("#koh").hide();
          $("#hood").hide();
          $("#rome").hide();
          $("#hawaii").hide();
          $("#rougon").hide();
          $("#denver").hide();
          $("#costa").show();
          $("#bang").hide();
          $("#haiti").hide();
        }
      if (locale === "mountains") {
        $("#findMe").text("Mountains of Peru");
            $("#paris").hide();
            $("#peru").show();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
    }
    if (purpose  === "volunteer") {
      // $("#george").toggle();
      if (locale === "urban") {
        $("#findMe").text("Bangkok, Thailand");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").show();
            $("#haiti").hide();
          }
      if (locale === "tropical") {
        $("#findMe").text("Haiti");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").hide();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").show();
          }
      if (locale === "mountains") {
        $("#findMe").text("Rocky Mountains");
            $("#paris").hide();
            $("#peru").hide();
            $("#rocky").show();
            $("#koh").hide();
            $("#hood").hide();
            $("#rome").hide();
            $("#hawaii").hide();
            $("#rougon").hide();
            $("#denver").hide();
            $("#costa").hide();
            $("#bang").hide();
            $("#haiti").hide();
      }
    }


    $("#quote").show();

  });
});
