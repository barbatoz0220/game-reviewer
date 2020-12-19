function upvote(id) {
    fetch('/like1/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result =>  {
            document.getElementById("upvote-button").textContent = result.likes;
        })
}

function downvote(id) {
    fetch('/dislike1/' + id, {
        method: 'GET'
    })
}