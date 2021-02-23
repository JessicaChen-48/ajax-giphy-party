console.log("Let's get this party started!");

$("form").on("submit", function (e) {
    e.preventDefault();

    getData();
});


async function getData() {
    let searchTerm = $("input").val();
    console.log(searchTerm)
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&q=${searchTerm}`);
    console.log("response = ", response)
    return response;
}

// api.giphy.com/v1/gifs/search

// api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym