// Review 1
function upvote1(id) {
    fetch('/like1/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("upvote_" + id).innerHTML = '<i class="fas fa-angle-double-up"></i>' + ' Upvotes ' + result.likes;
        })
}
function downvote1(id) {
    fetch('/dislike1/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("downvote_" + id).innerHTML = '<i class="fas fa-angle-double-down"></i>' + ' Downvotes ' + result.dislikes;
        })
}

// Review 2
function upvote2(id) {
    fetch('/like2/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("upvote_" + id).innerHTML = '<i class="fas fa-angle-double-up"></i>' + ' Upvotes ' + result.likes;
        })
}
function downvote2(id) {
    fetch('/dislike2/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("downvote_" + id).innerHTML = '<i class="fas fa-angle-double-down"></i>' + ' Downvotes ' + result.dislikes;
        })
}

// Review 3
function upvote3(id) {
    fetch('/like3/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("upvote_" + id).innerHTML = '<i class="fas fa-angle-double-up"></i>' + ' Upvotes ' + result.likes;
        })
}
function downvote3(id) {
    fetch('/dislike3/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("downvote_" + id).innerHTML = '<i class="fas fa-angle-double-down"></i>' + ' Downvotes ' + result.dislikes;
        })
}

// Review 4
function upvote4(id) {
    fetch('/like4/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("upvote_" + id).innerHTML = '<i class="fas fa-angle-double-up"></i>' + ' Upvotes ' + result.likes;
        })
}
function downvote4(id) {
    fetch('/dislike4/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("downvote_" + id).innerHTML = '<i class="fas fa-angle-double-down"></i>' + ' Downvotes ' + result.dislikes;
        })
}

// Review 5
function upvote5(id) {
    fetch('/like5/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("upvote_" + id).innerHTML = '<i class="fas fa-angle-double-up"></i>' + ' Upvotes ' + result.likes;
        })
}
function downvote5(id) {
    fetch('/dislike5/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("downvote_" + id).innerHTML = '<i class="fas fa-angle-double-down"></i>' + ' Downvotes ' + result.dislikes;
        })
}

// Review 6
function upvote6(id) {
    fetch('/like6/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("upvote_" + id).innerHTML = '<i class="fas fa-angle-double-up"></i>' + ' Upvotes ' + result.likes;
        })
}
function downvote6(id) {
    fetch('/dislike6/' + id, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById("downvote_" + id).innerHTML = '<i class="fas fa-angle-double-down"></i>' + ' Downvotes ' + result.dislikes;
        })
}