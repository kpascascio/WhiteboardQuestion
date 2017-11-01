$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://jsonplaceholder.typicode.com/comments'
    }).done(data => {
        filterEmailsLong(data)
    })
});

// Sort the data from a JSON file 
// This JSON object is a collection of comments from a blog, each comment has a postId, a title, the email address of the poster, and the comment
// Write a function that takes the email property out of the object, then append it to an array, lastly sort that array from A - Z

function filterEmails(dataObjects) {
    let emailArry = [];
    dataObjects.filter(dataObject => emailArry.push(dataObject.email));
    console.log(emailArry.sort());
}

function filterEmailsLong(dataObjects){
    let emailArry = [];
    for (let dataObject of dataObjects){
        emailArry.push(dataObject.email);
    }
    console.log(emailArry.sort())
}