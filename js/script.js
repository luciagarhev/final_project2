// Rotten Tomatoes api key : mavx75yvcztanypnfzg9n262
$(document).ready(function(){
  
  $("#searchButton").click(function(){
    
    var input = $("#textInput").val();
    
    $.getJSON("http://www.omdbapi.com/?t="+ input +"&y=&plot=short&r=json", function(result){
      var title = result.Title;
      var year = result.Year;
      var rated= result.Rated;
      var genre = result.Genre;
      var runtime = result.Runtime;
      var director = result.Director;
      var plot = result.Plot;
      var language = result.Language;
      var poster = result.Poster;
      var released = result.Released;
      var actors = result.Actors;
      var writer = result.Writer;
      var imdbRating = result.imdbRating;
      var country = result.Country;
      var awards = result.Awards;
      
      console.log(poster);
   
      $("#movie_title").html(title);
      $("#year").html(year);
      $("#rated").html("<h5>Rated: </h5>" +rated);
      $("#director").html("<h5>Director: </h5>" +director);
      $("#plot").html("<h5>Plot: </h5>" +plot);
      $("#language").html("<h5>Language: </h5>" +language);
      $("#genre").html("<h5>Genre: </h5>" +genre);
      $("#poster-image").attr("src", poster);
//       console.log(imagePoster);
      $("#released").html("<h5>Released: </h5>" +released);
      $("#runtime").html("<h5>Runtime: </h5>" +runtime);
      $("#cast").html("<h5>Cast: </h5>" +actors, writer);
      $("#imdb_rating").html("<h5>Imdb Rating: </h5>" +imdbRating);
      $("#country").html("<h5>Country: </h5>" +country);
      $("#awards").html("Awards: " +awards);
      
    })
    console.log("It works!");

  })
  
  $("#searchButton").click(function() {
    $("#movie_title, .row2, .medium, .large, #awards").css("visibility", "visible");
});

});