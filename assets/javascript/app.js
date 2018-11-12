// API key L9qMY9FXXoafABq4TXgNSGMfp9GLLoF8

// Important query perameters
// q (query)
// limit
// rating

// Create array of topics to search for

var gifSearch = ["beer", "pizza", "dogs", "cats", "burrito"];


// TO DO: add dynamic search and remove static placeholder array element
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=L9qMY9FXXoafABq4TXgNSGMfp9GLLoF8&q=" + gifSearch[0] + "&limit=10&rating=g";

function renderButtons() {
    // Loop through the array of topics
    for (var i = 0; i < gifSearch.length; i++) {

        // Create button
        var gifBtn = $("<button>");

        // Add a class
        gifBtn.addClass("gif-tastic btn btn-primary btn-lg");

        // Add a type
        gifBtn.attr("type", "button");

        // Adding a data-attribute with a value of the movie at index i
        gifBtn.attr("data-name", gifSearch[i]);

        // Providing the button's text with a value of the movie at index i
        gifBtn.text(gifSearch[i]);

        // Adding the button to the HTML
        $("#gif-buttons").append(gifBtn);
    }
}

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    // dump the JSON contents
     $("#gif-container").text(JSON.stringify(response)).addClass("monospace");


    // Trying to get to the image URL. Can't seem to find it. None of these work.
    // var gifURL = response.data.images.original.url;
    // var gifURL = response.data.images[17].url;
    // var gifURL = response.data.images.url;
    // var gifURL = response.url;
    var gifURL = "https://media.giphy.com/media/JxlrNZzprrRhm/giphy.gif";
    console.log(gifURL);

    for (var i = 0; i < gifSearch.length; i++) {

        // Create image for the gif
        var gifImg = $("<img>");

        // Add a type
        gifImg.attr("src", gifURL);

        // Adding the gifs to the HTML
        $("#gif-container").append(gifURL);
    }
});

// IGNORE EARLY TESTING
// Doesn't empty the gif-container, but it seems like it should?
// function renderButtons() {
//     $("#gif-container").empty();
// }