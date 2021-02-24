

console.log("Let's get this party started!");

let $gifContainer = $('<div>').attr('id','container');
$('body').append($gifContainer);
$("form").on("submit", function (e) {
    e.preventDefault();
    addImage();
});

function emptyContainer() {
    $gifContainer.empty();
}

$('#remove-images').on('click', emptyContainer);

async function addImage() {
    let results = await getData();
    let img = results[0].images.original.url;
    let $new_div = $('<div>');
    $gifContainer.append($new_div);
    let $img = $('<img>').attr('src', img);
    $new_div.append($img);
        
}

async function getData() {
    let searchTerm = $("input").val();
    console.log(searchTerm)
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&q=${searchTerm}`);
    console.log("response = ", response)
    return response.data.data;
}

// api.giphy.com/v1/gifs/search

// api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym