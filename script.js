$(function() {

  $(document).on("click", "#firstMovie", function() {
    $.get("http://www.omdbapi.com/?t=silence+of+the+lambs&y=1991&plot=full&r=json").done(function(response) {
      appendMovieStats(response);
      $("#silentLambs").toggle("fast");
    })
  });

  $(document).on("click", "#secondMovie", function() {
    $.get("http://www.omdbapi.com/?t=good+will+hunting&y=1997&plot=full&r=json").done(function(response) {
      appendMovieStatsdos(response);
      $("#huntWill").toggle("fast");
    })
  });

  $(document).on("click", "#thirdMovie", function() {
    $.get("http://www.omdbapi.com/?t=uncle+buck&y=&plot=full&r=json").done(function(response) {
      appendMovieStatstres(response);
      $("#buckUncle").toggle("fast");
    })
  });

  function appendMovieStats(response) {
    $("#postMovieUno").append("<div id=\"silentLambs\">" + "<h1>" + response.Title + "</h1>" + "<h2>" + response.Year + "</h2>" + "<img src = " + response.Poster + "/>" + "<p> Release date: " + response.Released + "</p>" + "<p> Director : " + response.Director + "</p>" + "<p> Featuring: " + response.Actors + "</p>" + "Storyline: " + response.Plot + "</p></div>")
  };

  function appendMovieStatsdos(response) {
    $("#postMovieDos").append("<div id=\"huntWill\">" + "<h1>" + response.Title + "</h1>" + "<h2>" + response.Year + "</h2>" + "<img src = " + response.Poster + "/>" + "<p> Release date: " + response.Released + "</p>" + "<p> Director : " + response.Director + "</p>" + "<p> Featuring: " + response.Actors + "</p>" + "Storyline: " + response.Plot + "</p></div>")
  };

  function appendMovieStatstres(response) {
    $("#postMovieTres").append("<div id=\"buckUncle\">" + "<h1>" + response.Title + "</h1>" + "<h2>" + response.Year + "</h2>" + "<img src = " + response.Poster + "/>" + "<p> Release date: " + response.Released + "</p>" + "<p> Director : " + response.Director + "</p>" + "<p> Featuring: " + response.Actors + "</p>" + "Storyline: " + response.Plot + "</p></div>")
  };
});
