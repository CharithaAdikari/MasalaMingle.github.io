
function filterCategory(category) {

    var articleTiles = document.getElementsByClassName('recipe-tile');


    for (var i = 0; i < articleTiles.length; i++) {
        var article = articleTiles[i];

        if (category === 'all' || article.classList.contains(category)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    }
}


function submitForm() {

    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('myForm').reset();
}

