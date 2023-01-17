const recipes = ["recipes/chocolatechipcookies.html", "recipes/cheesecake.html", "recipes/brownies.html", "recipes/ricekrispies.html"];

function random_recipe()
{
    length = recipes.length;
    var i = getRndInteger(0, length - 1);
    window.location.href = recipes[i];
}

function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}