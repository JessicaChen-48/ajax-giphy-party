

console.log("Let's get this party started!");

$("form").on("submit", function (e) {
    e.preventDefault();
    addImage();
});

async function addImage() {
    let url = await getData();

    let newImg = $('<img>').attr('src', url);
    $("#gif-container").append(newImg)
}

async function getData() {
    let searchTerm = $("input").val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&q=${searchTerm}`);

    let results = response.data.data;
    let randomN = Math.floor(Math.random() * results.length);
    return results[randomN].images.original.url;
}

function emptyContainer() {
    $("#gif-container").empty();
}

$('#remove-images').on('click', emptyContainer);