// API key L9qMY9FXXoafABq4TXgNSGMfp9GLLoF8

$(function () {
    renderButtons(gifArr, 'searchBtn', '#gifButtons');
})

var gifArr = ["beer", "pizza", "dogs", "burritos"];

function renderButtons(gifArr, classToAdd, destination) {
    $(destination).empty();
    for (var i = 0; i < gifArr.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd).addClass("btn btn-primary mr-2");
        a.attr("data-type", gifArr[i]);
        a.text(gifArr[i]);
        $(destination).append(a);
    }
}

$(document).on('click', '.searchBtn', function () {
    var type = $(this).data('type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        type + "&api_key=L9qMY9FXXoafABq4TXgNSGMfp9GLLoF8&limit=10&rating=g";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[j].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animated = response.data[j].images.fixed_height.url;
                var still = response.data[j].images.fixed_height_still.url;
                var image = $('<img>');
                image.attr('src', still);
                image.attr('data-still', still);
                image.attr('data-animated', animated);
                image.attr('data-state', 'still');
                image.addClass('searchImage');
                searchDiv.append(p);
                searchDiv.append(image);
                $("#searches").prepend(searchDiv);
            }
        })
})

$(document).on('click', '.searchImage', function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})


$('#addBtn').on('click', function () {
    var newSearch = $('input').eq(0).val();
    gifArr.push(newSearch);
    renderButtons(gifArr, 'searchBtn', '#gifButtons');
    return false;
})