// Search when pressing enter key
document.getElementById('search').addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('search-button').click();
    }
});

function bookSearch() {
    var search = document.getElementById('search').value;
    var results = document.getElementById('results')
    results.innerHTML = ""
    console.log(search);

    $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + search,
        datatype: 'json',
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.items.length; i++){
                results.innerHTML += `  <div class='row search-result col-md-5 col-12 m-3 pb-3'>   
                                            <h4 id='title${[i]}' class='col-12 text-center mt-4'> ${data.items[i].volumeInfo.title} </h4>
                                            <p id='author${[i]}' class='col-12 text-center '> ${data.items[i].volumeInfo.authors}</p> 
                                            <img src='${data.items[i].volumeInfo.imageLinks.thumbnail}' class='d-inline-block col-md-5 col-12 m-2 my-3' alt= 'picture of ${data.items[i].volumeInfo.title}' > 
                                            <p id='overflow' class='d-inline-block col-12 col-md-6 mt-4 p-3'> ${data.items[i].volumeInfo.description} </p>
                                        </div>`
                // document.getElementById(`author${[i]}`).style.fontFamily = 'Gravitas One, cursive';
                document.getElementById(`title${[i]}`).style.fontFamily = 'Gravitas One, cursive';
                document.getElementById(`author${[i]}`).style.textDecoration = 'underline';
            }
        },
        type: 'GET'
    })
}
document.getElementById('search-button').addEventListener('click', bookSearch, false);


{/* <p id='overflow' class='m-2 p-3'> ${data.items[i].volumeInfo.description} </p> */}
